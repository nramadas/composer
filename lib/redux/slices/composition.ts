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
import { Block } from '#lib/models/Block';
import { Composition as BaseComposition } from '#lib/models/Composition';
import { Document } from '#lib/models/Document';
import { MelakartaRaaga } from '#lib/models/Raaga';
import { SuladiSaptaTaala } from '#lib/models/Taala';
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
  history: PatchState;
  hovered?: Block['key'];
  useDikshitarNames: boolean;
}

const INITIAL_TAALA = SuladiSaptaTaala.TriputaChatusra;
const INITIAL_AVARTAN = taalaToAvartan(INITIAL_TAALA);
const INITIAL_ROW_SIZE = avartanLength(INITIAL_AVARTAN);
const INITIAL_DOCUMENT = createBlank(INITIAL_ROW_SIZE);

const INITIAL_STATE: CompositionState = {
  blocks: groupBlocksByAvartan(INITIAL_DOCUMENT, INITIAL_ROW_SIZE),
  composer: '',
  cursorPosition: [INITIAL_DOCUMENT.head],
  document: INITIAL_DOCUMENT,
  history: {
    cursor: 0,
    stack: [],
  },
  hovered: undefined,
  raaga: MelakartaRaaga.Mayamalavagowla,
  taala: INITIAL_TAALA,
  title: '',
  transcriber: '',
  useDikshitarNames: false,
};

function modify(
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
      return modify(state, draft => {
        draft.composer = action.payload;
      });
    },
    setRaaga(state, action: PayloadAction<CompositionState['raaga']>) {
      return modify(state, draft => {
        draft.raaga = action.payload;
      });
    },
    setTaala(state, action: PayloadAction<CompositionState['taala']>) {
      return modify(state, draft => {
        const avartan = taalaToAvartan(action.payload);
        const rowSize = avartanLength(avartan);

        draft.taala = action.payload;
        draft.blocks = groupBlocksByAvartan(draft.document, rowSize);
      });
    },
    setTitle(state, action: PayloadAction<CompositionState['title']>) {
      return modify(state, draft => {
        draft.title = action.payload;
      });
    },
    setTranscriber(
      state,
      action: PayloadAction<CompositionState['transcriber']>,
    ) {
      return modify(state, draft => {
        draft.transcriber = action.payload;
      });
    },
    toggleHovered(state, action: PayloadAction<CompositionState['hovered']>) {
      if (state.hovered === action.payload) {
        state.hovered = undefined;
      } else {
        state.hovered = action.payload;
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
