import { produce } from 'immer';
import { ulid } from 'ulid';

import { blockListArray } from '#lib/document/blockList';
import { Block, BlockType } from '#lib/models/Block';
import { Document } from '#lib/models/Document';

export function beatLength(block: Block) {
  return 1 / block.style;
}

export function groupBlocksByAvartan(document: Document, groupBy: number) {
  let blocks = blockListArray(document);
  let trueSize = blocks.length;
  let newDocument = document;

  for (let i = blocks.length - 1; i >= 0; i--) {
    const block = blocks[i];

    if (block.type !== BlockType.Undefined) {
      break;
    } else {
      trueSize = i;
    }
  }

  const minSize = 2 * groupBy;
  const expectedSize =
    trueSize + groupBy > minSize
      ? (Math.ceil(trueSize / groupBy) + 1) * groupBy
      : minSize;

  if (blocks.length < expectedSize) {
    newDocument = produce(newDocument, draft => {
      let prev = Object.assign({}, blocks[blocks.length - 1]);
      blocks[blocks.length - 1] = prev;
      draft.allBlocks[prev.key] = prev;
      let curLength = blocks.length;

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
      blocks.slice(expectedSize).forEach(block => {
        delete draft.allBlocks[block.key];
      });

      blocks = blocks.slice(0, expectedSize);
      const lastBlock = Object.assign({}, blocks[blocks.length - 1]);
      blocks[blocks.length - 1] = lastBlock;
      lastBlock.next = '';
      draft.allBlocks[lastBlock.key] = lastBlock;
    });
  }

  const rows: Block['key'][][] = [];
  let currentSize = 0;
  let currentRow: Block['key'][] = [];

  for (const block of blocks) {
    const length = beatLength(block);

    if (currentSize + length > groupBy) {
      rows.push(currentRow);
      currentSize = 0;
      currentRow = [];
    }

    currentSize += length;
    currentRow.push(block.key);
  }

  rows.push(currentRow);

  return {
    blocks: rows,
    document: newDocument,
  };
}
