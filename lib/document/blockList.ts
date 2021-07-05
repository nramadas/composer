import { Document } from '#lib/models/Document';

export function* blockList(document: Document) {
  let cur: string = document.head;

  while (cur) {
    const block = document.allBlocks[cur];
    yield block;
    cur = block.next;
  }
}

export function blockListArray(document: Document) {
  return Array.from(blockList(document));
}
