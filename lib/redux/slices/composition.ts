import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import produce, {
  applyPatches,
  Patch,
  produceWithPatches,
  original,
} from 'immer';
import { ulid } from 'ulid';

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
import { totalBeatLength } from '#lib/totalBeatLength';

function createSegment(
  headBlock: Block,
  tailBlock: Block,
  number: Block['style'],
  selectionLength: number,
) {
  const blocks: Block[] = [];
  let prev: Block | undefined = undefined;

  for (let i = 0; i < number * selectionLength; i++) {
    const block: Block =
      i === 0
        ? {
            ...headBlock,
            prev: headBlock.prev,
            next: '',
            style: number,
          }
        : {
            type: BlockType.Undefined,
            key: ulid(),
            sthayi: headBlock.sthayi,
            prev: blocks[blocks.length - 1].key,
            next: tailBlock.next,
            style: number,
          };

    if (prev) {
      prev.next = block.key;
    }

    blocks.push(block);
    prev = block;
  }

  blocks[blocks.length - 1].next = tailBlock.next;
  return blocks;
}

interface LyricsPayload {
  key: Block['key'];
  text: string;
}

interface SectionTitlePayload {
  key: number;
  text: string;
}

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
  defaultSthayi: Sthayi;
  document: Document;
  dragInProgress: boolean;
  history: PatchState;
  hovered?: Block['key'];
  id: string;
  keyMap: {
    key: string;
    shruti: Shruti;
  }[];
  sectionTitles: {
    [key: number]: string;
  };
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
  defaultSthayi: Sthayi.Mid,
  dragInProgress: false,
  history: {
    cursor: 0,
    stack: [],
  },
  hovered: undefined,
  id: ulid(),
  keyMap: raagaToKeyMap(MelakartaRaaga.Mayamalavagowla),
  raaga: MelakartaRaaga.Mayamalavagowla,
  sectionTitles: {},
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

      const headBlock = state.document.allBlocks[state.cursorPosition[0]];
      state.defaultSthayi = headBlock.sthayi || state.defaultSthayi;
    },
    cursorPrev(state) {
      const first = state.cursorPosition[0];
      const block = state.document.allBlocks[first];

      if (block.prev) {
        state.cursorPosition = [block.prev];
      } else if (state.cursorPosition.length > 1) {
        state.cursorPosition = [block.key];
      }

      const headBlock = state.document.allBlocks[state.cursorPosition[0]];
      state.defaultSthayi = headBlock.sthayi || state.defaultSthayi;
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
    reset(state) {
      const keys = Object.keys(INITIAL_STATE) as (keyof typeof INITIAL_STATE)[];

      for (const key of keys) {
        const value = INITIAL_STATE[key];

        // @ts-ignore
        state[key] = value;
      }

      state.id = ulid();
    },
    setComposer(state, action: PayloadAction<CompositionState['composer']>) {
      return withUndo(state, draft => {
        draft.composer = action.payload;
      });
    },
    setLyrics(state, action: PayloadAction<LyricsPayload>) {
      return withUndo(state, draft => {
        draft.document.allBlocks[action.payload.key].lyrics =
          action.payload.text;
      });
    },
    setMaatraa(state, action: PayloadAction<Block['style']>) {
      return withUndo(state, draft => {
        const beatLengths = draft.cursorPosition.map(cur => {
          return draft.document.allBlocks[cur].style;
        });

        // selection must not exceed length of 1
        const total = totalBeatLength(beatLengths);

        if (total > 1) {
          return;
        }

        const headBlock = draft.document.allBlocks[draft.cursorPosition[0]];
        const tailBlock =
          draft.document.allBlocks[
            draft.cursorPosition[draft.cursorPosition.length - 1]
          ];
        let newSegment: Block[] = [];

        if (
          draft.cursorPosition.length > 1 &&
          action.payload === 1 &&
          total === 1
        ) {
          newSegment = createSegment(headBlock, tailBlock, 1, total);
        } else if (action.payload === 2 && (total === 1 || total === 0.5)) {
          newSegment = createSegment(headBlock, tailBlock, 2, total);
        } else if (
          action.payload === 3 &&
          (total === 1 || total === 1 / 3 || total === 2 / 3)
        ) {
          newSegment = createSegment(headBlock, tailBlock, 3, total);
        } else if (action.payload === 4 && (total === 1 || total === 0.5)) {
          newSegment = createSegment(headBlock, tailBlock, 4, total);
        } else if (
          action.payload === 6 &&
          (total === 1 || total === 0.5 || total === 1 / 3 || total === 2 / 3)
        ) {
          newSegment = createSegment(headBlock, tailBlock, 6, total);
        }

        if (newSegment.length) {
          const segmentHead = newSegment[0];
          const segmentTail = newSegment[newSegment.length - 1];

          if (segmentHead.prev) {
            draft.document.allBlocks[segmentHead.prev].next = segmentHead.key;
          } else {
            draft.document.head = segmentHead.key;
          }

          if (segmentTail.next) {
            draft.document.allBlocks[segmentTail.next].prev = segmentTail.key;
          }

          for (const key of draft.cursorPosition) {
            delete draft.document.allBlocks[key];
          }

          for (const block of newSegment) {
            draft.document.allBlocks[block.key] = block;
          }

          draft.cursorPosition = [newSegment[0].key];

          const avartan = taalaToAvartan(draft.taala);
          const rowSize = avartanLength(avartan);
          const { blocks, document } = groupBlocksByAvartan(
            draft.document,
            rowSize,
          );
          draft.blocks = blocks;
          draft.document = document;
        }
      });
    },
    setNote(state, action: PayloadAction<Shruti | ',' | 'del'>) {
      return withUndo(state, draft => {
        const head = draft.cursorPosition[0];
        const headBlock = draft.document.allBlocks[head];
        const sthayi = headBlock.sthayi || state.defaultSthayi;
        let goBack = false;

        draft.cursorPosition.forEach((cur, i) => {
          const curBlock = draft.document.allBlocks[cur];

          if (action.payload === 'del') {
            if (draft.document.allBlocks[cur].type === BlockType.Undefined) {
              goBack = true;
            }

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
              sthayi,
              type: BlockType.Note,
              shruti: action.payload,
              style: 'style' in curBlock ? curBlock.style : 1,
            };
          } else {
            draft.document.allBlocks[cur] = {
              sthayi,
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

        if (action.payload === 'del' && goBack) {
          const first = draft.cursorPosition[0];
          const block = draft.document.allBlocks[first];

          if (block.prev) {
            draft.cursorPosition = [block.prev];
          } else if (draft.cursorPosition.length > 1) {
            draft.cursorPosition = [block.key];
          }
        } else if (action.payload !== 'del') {
          const last = draft.cursorPosition[draft.cursorPosition.length - 1];
          const block = draft.document.allBlocks[last];

          if (block.next) {
            draft.cursorPosition = [block.next];
          } else if (draft.cursorPosition.length > 1) {
            draft.cursorPosition = [block.key];
          }
        }
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
    setSectionTitle(state, action: PayloadAction<SectionTitlePayload>) {
      return withUndo(state, draft => {
        draft.sectionTitles[action.payload.key] = action.payload.text;
      });
    },
    setSthayi(state, action: PayloadAction<Sthayi>) {
      return withUndo(state, draft => {
        draft.defaultSthayi = action.payload;

        draft.cursorPosition.forEach(cur => {
          draft.document.allBlocks[cur].sthayi = action.payload;
        });
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
