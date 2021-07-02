import { ulid } from 'ulid';

import { blockList } from '#lib/document/blockList';
import { Block, BlockType } from '#lib/models/Block';
import { Document } from '#lib/models/Document';

function beatLength(block: Block) {
  switch (block.type) {
    case BlockType.Continue:
    case BlockType.Skip: {
      return 1;
    }
    case BlockType.Note:
    case BlockType.Undefined: {
      return 1 / block.style;
    }
  }
}

function* createRows(document: Document, groupBy: number, minSize?: number) {
  let currentSize = 0;
  let totalSize = 0;
  let currentRow: Block['key'][] = [];
  let lastBlock: Block | undefined = undefined;

  for (const block of blockList(document)) {
    const length = beatLength(block);

    if (currentSize + length > groupBy) {
      yield currentRow;
      currentSize = 0;
      currentRow = [];
    }

    currentSize += length;
    totalSize += length;
    lastBlock = block;
    currentRow.push(block.key);
  }

  if (lastBlock && minSize && totalSize < minSize) {
    let prev = Object.assign({}, lastBlock);
    document.allBlocks[prev.key] = prev;
    currentRow[currentRow.length - 1] = prev.key;

    while (totalSize < minSize) {
      const newBlock: Block = {
        key: ulid(),
        next: '',
        prev: prev.key,
        style: 1,
        type: BlockType.Undefined,
      };

      prev.next = newBlock.key;

      const length = beatLength(newBlock);

      if (currentSize + length > groupBy) {
        yield currentRow;
        currentSize = 0;
        currentRow = [];
      }

      document.allBlocks[newBlock.key] = newBlock;
      currentSize += length;
      totalSize += length;
      prev = newBlock;
      currentRow.push(newBlock.key);
    }
  }

  if (currentSize) {
    yield currentRow;
  }
}

export function groupBlocksByAvartan(
  document: Document,
  groupBy: number,
  minSize?: number,
) {
  return Array.from(createRows(document, groupBy, minSize));
}
