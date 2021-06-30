import produce, { applyPatches, enablePatches, Patch } from 'immer';
import React, { createContext, useState } from 'react';

import { Composition as BaseComposition } from '#lib/models/Composition';
import { NoteBlock } from '#lib/models/NoteBlock';
import { Swara as BaseSwara } from '#lib/models/Swara';

enablePatches();

interface Swara extends BaseSwara {
  key: string;
  blocks: NoteBlock[];
}

interface Composition extends BaseComposition {
  swara: Swara[];
}

const DEFAULT_COMPOSITION: Composition = {
  composer: undefined,
  raaga: undefined,
  swara: [],
  taala: undefined,
  title: undefined,
  transcriber: undefined,
};

interface Props {
  children?: React.ReactNode;
}

interface EditorState {
  composition: Composition;
  highlightStartIndex?: number;
  highlightEndIndex?: number;
  selectionIndex?: number;
}

interface PatchState {
  cursor: number;
  inversePatches: Patch[];
  patches: Patch[];
  size: number;
}

interface EditorStateDetails extends EditorState {
  redoEnabled: boolean;
  undoEnabled: boolean;
  endHighlight(end: number): void;
  redo(): void;
  select(index: number): void;
  setComposer(composer: Composition['composer']): void;
  setRaaga(raaga: Composition['raaga']): void;
  setTaala(taala: Composition['taala']): void;
  setTitle(title: Composition['title']): void;
  setTranscriber(transcriber: Composition['transcriber']): void;
  undo(): void;
}

export const EditorStateContext = createContext<EditorStateDetails>({
  composition: DEFAULT_COMPOSITION,
  highlightStartIndex: undefined,
  highlightEndIndex: undefined,
  redoEnabled: false,
  selectionIndex: undefined,
  undoEnabled: false,
  endHighlight: () => {},
  redo: () => {},
  select: () => {},
  setComposer: () => {},
  setRaaga: () => {},
  setTaala: () => {},
  setTitle: () => {},
  setTranscriber: () => {},
  undo: () => {},
});

export function EditorStateProvider(props: Props) {
  const [state, setState] = useState<EditorState>({
    composition: DEFAULT_COMPOSITION,
    highlightEndIndex: undefined,
    highlightStartIndex: undefined,
    selectionIndex: undefined,
  });

  const [patchState, setPatchState] = useState<PatchState>({
    cursor: 0,
    inversePatches: [],
    patches: [],
    size: 0,
  });

  const redoEnabled = patchState.cursor + 1 < patchState.size;
  const undoEnabled = patchState.cursor > 0;

  const savePatches = (patches: Patch[], inversePatches: Patch[]) => {
    setPatchState(state =>
      produce(state, draft => {
        for (let i = 0; i < patches.length; i++) {
          draft.patches[draft.cursor] = patches[i];
          draft.inversePatches[draft.cursor] = inversePatches[i];
          draft.cursor++;
        }
      }),
    );
  };

  return (
    <EditorStateContext.Provider
      value={{
        redoEnabled,
        undoEnabled,
        composition: state.composition,
        highlightEndIndex: state.highlightStartIndex,
        highlightStartIndex: state.highlightEndIndex,
        selectionIndex: state.selectionIndex,
        endHighlight: end => {
          if (state.highlightStartIndex === undefined) {
            setState(state =>
              produce(state, draft => {
                draft.highlightEndIndex = end;
                draft.highlightStartIndex = end;
              }),
            );
            return;
          }

          if (end < state.highlightStartIndex) {
            return;
          }

          setState(state =>
            produce(state, draft => {
              draft.highlightEndIndex = end;
            }),
          );
        },
        redo: () => {
          if (!redoEnabled) {
            return;
          }

          const patch = patchState.patches[patchState.cursor];

          if (!patch) {
            return;
          }

          setState(state => applyPatches(state, [patch]));
          setPatchState(state =>
            produce(state, draft => {
              draft.cursor++;
            }),
          );
        },
        select: index => {
          setState(state =>
            produce(state, draft => {
              draft.highlightEndIndex = index;
              draft.highlightStartIndex = index;
              draft.selectionIndex = index;
            }),
          );
        },
        setComposer: composer => {
          setState(state =>
            produce(
              state,
              draft => {
                draft.composition.composer = composer;
              },
              savePatches,
            ),
          );
        },
        setRaaga: raaga => {
          setState(state =>
            produce(
              state,
              draft => {
                draft.composition.raaga = raaga;
              },
              savePatches,
            ),
          );
        },
        setTaala: taala => {
          setState(state =>
            produce(
              state,
              draft => {
                draft.composition.taala = taala;
              },
              savePatches,
            ),
          );
        },
        setTitle: title => {
          setState(state =>
            produce(
              state,
              draft => {
                draft.composition.title = title;
              },
              savePatches,
            ),
          );
        },
        setTranscriber: transcriber => {
          setState(state =>
            produce(
              state,
              draft => {
                draft.composition.transcriber = transcriber;
              },
              savePatches,
            ),
          );
        },
        undo: () => {
          if (!undoEnabled) {
            return;
          }

          const patch = patchState.inversePatches[patchState.cursor - 1];

          if (!patch) {
            return;
          }

          setState(state => applyPatches(state, [patch]));
          setPatchState(state =>
            produce(state, draft => {
              draft.cursor--;
            }),
          );
        },
      }}
    >
      {props.children}
    </EditorStateContext.Provider>
  );
}
