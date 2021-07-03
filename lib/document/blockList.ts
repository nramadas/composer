import { BlockType } from '#lib/models/Block';
import { Document } from '#lib/models/Document';

export function* blockList(document: Document) {
  let cur: string = document.head;
  let lastNotUndefined: string = document.head;

  while (cur) {
    const block = document.allBlocks[cur];

    if (block.type !== BlockType.Undefined) {
      while (lastNotUndefined !== cur) {
        yield document.allBlocks[lastNotUndefined];
        lastNotUndefined = document.allBlocks[lastNotUndefined].next;
      }

      lastNotUndefined = cur;
    }

    cur = document.allBlocks[cur].next;
  }

  yield document.allBlocks[lastNotUndefined];
}

export function blockListArray(document: Document) {
  return Array.from(blockList(document));
}
