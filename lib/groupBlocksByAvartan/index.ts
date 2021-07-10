import { produce } from 'immer';
import { ulid } from 'ulid';

import { blockListArray } from '#lib/document/blockList';
import { Block, BlockType } from '#lib/models/Block';
import { Document } from '#lib/models/Document';
import { totalBeatLength } from '#lib/totalBeatLength';

export function beatLength(block: Block) {
  return 1 / block.style;
}

export function multiplier(groupBy: number) {
  if (groupBy <= 4) {
    return 4;
  }

  if (groupBy < 9) {
    return 2;
  }

  return 1;
}

export function groupBlocksByAvartan(document: Document, groupBy: number) {
  let sizes: number[] = [];
  let undefineds: number[] = [];
  let blocks = blockListArray(document);
  let newDocument = document;

  for (let i = 0; i < blocks.length; i++) {
    const block = blocks[i];

    if (block.type === BlockType.Undefined && block.style === 1) {
      undefineds.push(block.style);
    } else {
      sizes = sizes.concat(undefineds);
      undefineds = [];
      sizes.push(block.style);
    }
  }

  const undefinedsSize = totalBeatLength(undefineds);
  const trueSize = totalBeatLength(sizes);
  const blocksSize = trueSize + undefinedsSize;
  const rowSize = multiplier(groupBy) * groupBy;
  const minSize = 2 * rowSize;
  const expectedSize =
    trueSize + rowSize > minSize
      ? (Math.ceil(trueSize / rowSize) + 1) * rowSize
      : minSize;

  if (blocksSize < expectedSize) {
    newDocument = produce(newDocument, draft => {
      let prev = Object.assign({}, blocks[blocks.length - 1]);
      blocks[blocks.length - 1] = prev;
      draft.allBlocks[prev.key] = prev;
      let curLength = blocksSize;

      while (curLength < expectedSize) {
        const newBlock: Block = {
          type: BlockType.Undefined,
          prev: prev.key,
          next: '',
          key: ulid(),
          style: 1,
        };

        prev.next = newBlock.key;
        blocks.push(newBlock);
        draft.allBlocks[newBlock.key] = newBlock;
        curLength += 1;
        prev = newBlock;
      }
    });
  } else {
    newDocument = produce(newDocument, draft => {
      const excess = blocksSize - expectedSize;

      blocks.slice(blocks.length - excess).forEach(block => {
        delete draft.allBlocks[block.key];
      });

      blocks = blocks.slice(0, blocks.length - excess);
      const lastBlock = Object.assign({}, blocks[blocks.length - 1]);
      blocks[blocks.length - 1] = lastBlock;
      lastBlock.next = '';
      draft.allBlocks[lastBlock.key] = lastBlock;
    });
  }

  const rows: Block['key'][][] = [];
  let currentRow: Block['key'][] = [];
  let currentRowSizes: number[] = [];

  for (const block of blocks) {
    const newRowSizes = currentRowSizes.concat(block.style);
    const newSize = totalBeatLength(newRowSizes);

    if (newSize > groupBy) {
      rows.push(currentRow);
      currentRow = [];
      currentRowSizes = [];
    }

    currentRow.push(block.key);
    currentRowSizes.push(block.style);
  }

  rows.push(currentRow);

  return {
    blocks: rows,
    document: newDocument,
  };
}
