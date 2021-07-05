import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import produce, {
  applyPatches,
  Patch,
  produceWithPatches,
  original,
} from 'immer';

import { avartanLength } from '#lib/avartanLength';
import { createBlank } from '#lib/document/createBlank';
import { groupBlocksByAvartan } from '#lib/groupBlocksByAvartan';
import { Block, BlockType } from '#lib/models/Block';
import { Composition as BaseComposition } from '#lib/models/Composition';
import { Document } from '#lib/models/Document';
import { MelakartaRaaga } from '#lib/models/Raaga';
import { Shruti } from '#lib/models/Shruti';
import { Sthayi } from '#lib/models/Sthayi';
import { SuladiSaptaTaala } from '#lib/models/Taala';
import { raagaToKeyMap } from '#lib/raagaToKeyMap';
import { taalaToAvartan } from '#lib/taalaToAvartan';

interface PatchState {
  cursor: number;
  stack: {
    inversePatches: Patch[];
    patches: Patch[];
  }[];
}

interface CompositionState extends Omit<BaseComposition, 'swara'> {
  blocks: Block['key'][][];
  cursorPosition: Block['key'][];
  document: Document;
  dragInProgress: boolean;
  history: PatchState;
  hovered?: Block['key'];
  keyMap: {
    key: string;
    shruti: Shruti;
  }[];
  useDikshitarNames: boolean;
}

const INITIAL_TAALA = SuladiSaptaTaala.TriputaChatusra;
const INITIAL_AVARTAN = taalaToAvartan(INITIAL_TAALA);
const INITIAL_ROW_SIZE = avartanLength(INITIAL_AVARTAN);
const INITIAL_DOCUMENT = createBlank(INITIAL_ROW_SIZE);

const { blocks, document } = groupBlocksByAvartan(
  INITIAL_DOCUMENT,
  INITIAL_ROW_SIZE,
);

const INITIAL_STATE: CompositionState = {
  blocks,
  document,
  composer: '',
  cursorPosition: [INITIAL_DOCUMENT.head],
  dragInProgress: false,
  history: {
    cursor: 0,
    stack: [],
  },
  hovered: undefined,
  keyMap: raagaToKeyMap(MelakartaRaaga.Mayamalavagowla),
  raaga: MelakartaRaaga.Mayamalavagowla,
  taala: INITIAL_TAALA,
  title: '',
  transcriber: '',
  useDikshitarNames: false,
};

function withUndo(
  state: CompositionState,
  mutations: (state: CompositionState) => void,
): CompositionState {
  const [nextState, patches, inversePatches] = produceWithPatches(
    state,
    draft => {
      mutations(draft);
    },
  );

  // @ts-ignore
  return produce(nextState, draft => {
    draft.history.cursor++;
    draft.history.stack.length = draft.history.cursor;
    draft.history.stack[draft.history.cursor - 1] = { patches, inversePatches };
  });
}

export const composition = createSlice({
  name: 'composition',
  initialState: INITIAL_STATE,
  reducers: {
    cursorExtend(state) {
      const last = state.cursorPosition[state.cursorPosition.length - 1];
      const block = state.document.allBlocks[last];

      if (block.next) {
        state.cursorPosition = state.cursorPosition.concat(block.next);
      }
    },
    cursorReduce(state) {
      if (state.cursorPosition.length > 1) {
        state.cursorPosition = state.cursorPosition.slice(
          0,
          state.cursorPosition.length - 1,
        );
      }
    },
    cursorNext(state) {
      const last = state.cursorPosition[state.cursorPosition.length - 1];
      const block = state.document.allBlocks[last];

      if (block.next) {
        state.cursorPosition = [block.next];
      } else if (state.cursorPosition.length > 1) {
        state.cursorPosition = [block.key];
      }
    },
    cursorPrev(state) {
      const first = state.cursorPosition[0];
      const block = state.document.allBlocks[first];

      if (block.prev) {
        state.cursorPosition = [block.prev];
      } else if (state.cursorPosition.length > 1) {
        state.cursorPosition = [block.key];
      }
    },
    cursorSet(state, action: PayloadAction<string>) {
      state.cursorPosition = [action.payload];
    },
    redo(state) {
      if (state.history.cursor === state.history.stack.length) {
        return;
      }

      const patches = state.history.stack[state.history.cursor];

      if (!patches) {
        return;
      }

      const originalState = original(state);

      if (!originalState) {
        return;
      }

      const nextState = applyPatches<CompositionState>(
        originalState,
        patches.patches,
      );

      return produce(nextState, draft => {
        draft.history.cursor++;
      });
    },
    setComposer(state, action: PayloadAction<CompositionState['composer']>) {
      return withUndo(state, draft => {
        draft.composer = action.payload;
      });
    },
    setNote(state, action: PayloadAction<Shruti | ',' | 'del'>) {
      return withUndo(state, draft => {
        draft.cursorPosition.forEach((cur, i) => {
          const curBlock = draft.document.allBlocks[cur];

          if (action.payload === 'del') {
            draft.document.allBlocks[cur] = {
              type: BlockType.Undefined,
              prev: curBlock.prev,
              next: curBlock.next,
              key: curBlock.key,
              style: curBlock.style,
            };
          } else if (i === 0 && action.payload !== ',') {
            draft.document.allBlocks[cur] = {
              ...curBlock,
              type: BlockType.Note,
              shruti: action.payload,
              sthayi: ('sthayi' in curBlock && curBlock.sthayi) || Sthayi.Mid,
              style: 'style' in curBlock ? curBlock.style : 1,
            };
          } else {
            draft.document.allBlocks[cur] = {
              type: BlockType.Continue,
              prev: curBlock.prev,
              next: curBlock.next,
              key: curBlock.key,
              style: curBlock.style,
            };
          }
        });

        const avartan = taalaToAvartan(draft.taala);
        const rowSize = avartanLength(avartan);
        const { blocks, document } = groupBlocksByAvartan(
          draft.document,
          rowSize,
        );
        draft.blocks = blocks;
        draft.document = document;
      });
    },
    setRaaga(state, action: PayloadAction<CompositionState['raaga']>) {
      return withUndo(state, draft => {
        draft.raaga = action.payload;
        if (action.payload === 'RaagaMaalikaa') {
          draft.keyMap = [];
        } else {
          draft.keyMap = raagaToKeyMap(action.payload);
        }
      });
    },
    setTaala(state, action: PayloadAction<CompositionState['taala']>) {
      return withUndo(state, draft => {
        const avartan = taalaToAvartan(action.payload);
        const rowSize = avartanLength(avartan);

        draft.taala = action.payload;
        const { blocks, document } = groupBlocksByAvartan(
          draft.document,
          rowSize,
        );
        draft.blocks = blocks;
        draft.document = document;
        draft.cursorPosition = [draft.document.head];
      });
    },
    setTitle(state, action: PayloadAction<CompositionState['title']>) {
      return withUndo(state, draft => {
        draft.title = action.payload;
      });
    },
    setTranscriber(
      state,
      action: PayloadAction<CompositionState['transcriber']>,
    ) {
      return withUndo(state, draft => {
        draft.transcriber = action.payload;
      });
    },
    startDrag(state) {
      state.dragInProgress = true;
    },
    stopDrag(state) {
      state.dragInProgress = false;
    },
    toggleHovered(state, action: PayloadAction<CompositionState['hovered']>) {
      if (state.hovered === action.payload) {
        state.hovered = undefined;
      } else {
        state.hovered = action.payload;
      }

      if (state.dragInProgress && state.hovered) {
        const start = state.cursorPosition[0];
        let cur = start;
        state.cursorPosition = [];

        while (cur) {
          state.cursorPosition.push(cur);
          const block = state.document.allBlocks[cur];

          if (cur === state.hovered) {
            break;
          } else {
            cur = block.next;
          }
        }

        if (!cur) {
          state.cursorPosition = [start];
        }
      }
    },
    undo(state) {
      if (state.history.cursor === 0) {
        return;
      }

      const patches = state.history.stack[state.history.cursor - 1];

      if (!patches) {
        return;
      }

      const originalState = original(state);

      if (!originalState) {
        return;
      }

      const nextState = applyPatches<CompositionState>(
        originalState,
        patches.inversePatches,
      );

      return produce(nextState, draft => {
        draft.history.cursor--;
      });
    },
  },
});
