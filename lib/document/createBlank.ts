import { ulid } from 'ulid';

import { BlockType, Block } from '#lib/models/Block';
import { Document } from '#lib/models/Document';

export function createBlank(numTotalBeats: number): Document {
  const document: Document = {
    allBlocks: {},
    head: '',
    numBeats: numTotalBeats,
  };

  let prev: Block['key'] = '';

  for (let i = 0; i < numTotalBeats; i++) {
    const newBlock: Block = {
      prev,
      key: ulid(),
      next: '',
      type: BlockType.Undefined,
      style: 1,
    };

    if (prev) {
      document.allBlocks[prev].next = newBlock.key;
    } else {
      document.head = newBlock.key;
    }

    document.allBlocks[newBlock.key] = newBlock;
    prev = newBlock.key;
  }

  return document;
}
