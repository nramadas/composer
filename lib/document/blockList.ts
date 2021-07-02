import { Document } from '#lib/models/Document';

export function* blockList(document: Document) {
  let cur: string | undefined = document.head;

  while (cur) {
    yield document.allBlocks[cur];
    cur = document.allBlocks[cur].next;
  }
}

export function blockListArray(document: Document) {
  return Array.from(blockList(document));
}
