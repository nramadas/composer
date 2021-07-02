import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import produce, { applyPatches, Patch, produceWithPatches } from 'immer';

import { avartanLength } from '#lib/avartanLength';
import { createBlank } from '#lib/document/createBlank';
import { groupBlocksByAvartan } from '#lib/groupBlocksByAvartan';
import { Block } from '#lib/models/Block';
import { Composition as BaseComposition } from '#lib/models/Composition';
import { Document } from '#lib/models/Document';
import { MelakartaRaaga } from '#lib/models/Raaga';
import { Taala } from '#lib/models/Taala';
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
  cursorPosition: Block['key'];
  document: Document;
  history: PatchState;
  hovered?: Block['key'];
}

const INITIAL_TAALA = Taala.TriputaChatusra;
const INITIAL_AVARTAN = taalaToAvartan(INITIAL_TAALA);
const INITIAL_ROW_SIZE = avartanLength(INITIAL_AVARTAN);
const INITIAL_DOCUMENT = createBlank(INITIAL_ROW_SIZE);

const INITIAL_STATE: CompositionState = {
  blocks: groupBlocksByAvartan(
    INITIAL_DOCUMENT,
    INITIAL_ROW_SIZE,
    INITIAL_ROW_SIZE * 2,
  ),
  composer: undefined,
  cursorPosition: INITIAL_DOCUMENT.head,
  document: INITIAL_DOCUMENT,
  history: {
    cursor: 0,
    stack: [],
  },
  hovered: undefined,
  raaga: MelakartaRaaga.Mayamalavagowla,
  taala: INITIAL_TAALA,
  title: undefined,
  transcriber: undefined,
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
    cursorNext(state) {
      const block = state.document.allBlocks[state.cursorPosition];

      if (block.next) {
        state.cursorPosition = block.next;
      }
    },
    cursorPrev(state) {
      const block = state.document.allBlocks[state.cursorPosition];

      if (block.prev) {
        state.cursorPosition = block.prev;
      }
    },
    cursorSet(state, action: PayloadAction<string>) {
      state.cursorPosition = action.payload;
    },
    redo(state) {
      if (state.history.cursor === state.history.stack.length) {
        return;
      }

      const patches = state.history.stack[state.history.cursor];

      if (!patches) {
        return;
      }

      const nextState = applyPatches<CompositionState>(state, patches.patches);

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
        draft.taala = action.payload;
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

      const patches = state.history.stack[state.history.cursor];

      if (!patches) {
        return;
      }

      const nextState = applyPatches<CompositionState>(
        state,
        patches.inversePatches,
      );

      return produce(nextState, draft => {
        draft.history.cursor--;
      });
    },
  },
});
