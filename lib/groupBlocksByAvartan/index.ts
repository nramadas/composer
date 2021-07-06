import { produce } from 'immer';
import { ulid } from 'ulid';

import { blockListArray } from '#lib/document/blockList';
import { fixPrecision } from '#lib/fixPrecision';
import { Block, BlockType } from '#lib/models/Block';
import { Document } from '#lib/models/Document';

export function beatLength(block: Block) {
  return 1 / block.style;
}

export function multiplier(groupBy: number) {
  if (groupBy <= 3) {
    return 4;
  }

  if (groupBy < 5) {
    return 3;
  }

  if (groupBy < 8) {
    return 2;
  }

  return 1;
}

export function groupBlocksByAvartan(document: Document, groupBy: number) {
  let blocks = blockListArray(document);
  let trueSize = 0;
  let undefinedCount = 0;
  let newDocument = document;

  for (let i = 0; i < blocks.length; i++) {
    const block = blocks[i];

    if (block.type === BlockType.Undefined && block.style === 1) {
      undefinedCount += 1 / block.style;
    } else {
      trueSize += undefinedCount;
      undefinedCount = 0;
      trueSize += 1 / block.style;
    }
  }

  trueSize = fixPrecision(trueSize);
  const blocksSize = trueSize + undefinedCount;
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

  const rows: Block[][] = [];
  let currentSize = 0;
  let currentRow: Block[] = [];

  for (const block of blocks) {
    const length = beatLength(block);
    let newSize = fixPrecision(currentSize + length);

    if (newSize > groupBy) {
      rows.push(currentRow);
      newSize = length;
      currentRow = [];
    }

    currentSize = newSize;
    currentRow.push(block);
  }

  rows.push(currentRow);

  return {
    blocks: rows.map(row => row.map(b => b.key)),
    document: newDocument,
  };
}
