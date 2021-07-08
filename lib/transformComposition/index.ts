import { avartanLength } from '#lib/avartanLength';
import { groupBlocksByAvartan } from '#lib/groupBlocksByAvartan';
import { Block } from '#lib/models/Block';
import { Composition } from '#lib/models/Composition';
import { Document } from '#lib/models/Document';
import { Sthayi } from '#lib/models/Sthayi';
import { raagaToKeyMap } from '#lib/raagaToKeyMap';
import type { CompositionState } from '#lib/redux/slices/composition';
import { taalaToAvartan } from '#lib/taalaToAvartan';

export function compositionToState(composition: Composition): CompositionState {
  const initialDocument: Document = {
    allBlocks: {},
    head: composition.blocks[0].key,
  };

  for (const block of composition.blocks) {
    initialDocument.allBlocks[block.key] = block;
  }

  const avartan = taalaToAvartan(composition.taala);
  const rowSize = avartanLength(avartan);
  const { blocks, document } = groupBlocksByAvartan(initialDocument, rowSize);

  return {
    blocks,
    document,
    composer: composition.composer,
    cursorPosition: [document.head],
    defaultSthayi: Sthayi.Mid,
    dragInProgress: false,
    history: {
      cursor: 0,
      stack: [],
    },
    hovered: undefined,
    key: composition.key,
    keyMap: raagaToKeyMap(composition.raaga),
    raaga: composition.raaga,
    sectionTitles: composition.sectionTitles,
    taala: composition.taala,
    title: composition.title,
    useDikshitarNames: composition.useDikshitarNames,
  };
}

export function stateToComposition(
  state: Pick<
    CompositionState,
    | 'blocks'
    | 'composer'
    | 'document'
    | 'key'
    | 'raaga'
    | 'sectionTitles'
    | 'taala'
    | 'title'
    | 'useDikshitarNames'
  >,
): Composition {
  const blocks: Block[] = [];

  for (const row of state.blocks) {
    for (const blockKey of row) {
      const block = state.document.allBlocks[blockKey];
      blocks.push(block);
    }
  }

  return {
    blocks,
    composer: state.composer,
    key: state.key,
    raaga: state.raaga,
    sectionTitles: state.sectionTitles,
    taala: state.taala,
    title: state.title,
    useDikshitarNames: state.useDikshitarNames,
  };
}
