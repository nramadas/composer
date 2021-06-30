import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import produce, { applyPatches, Patch, produceWithPatches } from 'immer';

import { Composition as BaseComposition } from '#lib/models/Composition';
import { NoteBlock } from '#lib/models/NoteBlock';
import { MelakartaRaaga } from '#lib/models/Raaga';
import { Swara as BaseSwara } from '#lib/models/Swara';
import { Taala } from '#lib/models/Taala';

interface Swara extends BaseSwara {
  key: string;
  blocks: NoteBlock[];
}

interface Composition extends BaseComposition {
  swara: Swara[];
}

interface PatchState {
  cursor: number;
  stack: {
    inversePatches: Patch[];
    patches: Patch[];
  }[];
}

interface CompositionState extends Composition {
  history: PatchState;
}

const INITIAL_STATE: CompositionState = {
  composer: undefined,
  history: {
    cursor: 0,
    stack: [],
  },
  raaga: MelakartaRaaga.Mayamalavagowla,
  swara: [],
  taala: Taala.TriputaChatusra,
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
    setComposer(state, action: PayloadAction<Composition['composer']>) {
      return modify(state, draft => {
        draft.composer = action.payload;
      });
    },
    setRaaga(state, action: PayloadAction<Composition['raaga']>) {
      return modify(state, draft => {
        draft.raaga = action.payload;
      });
    },
    setTaala(state, action: PayloadAction<Composition['taala']>) {
      return modify(state, draft => {
        draft.taala = action.payload;
      });
    },
    setTitle(state, action: PayloadAction<Composition['title']>) {
      return modify(state, draft => {
        draft.title = action.payload;
      });
    },
    setTranscriber(state, action: PayloadAction<Composition['transcriber']>) {
      return modify(state, draft => {
        draft.transcriber = action.payload;
      });
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
