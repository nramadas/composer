import { NoteBlock, BlockType } from '#lib/models/NoteBlock';
import { NoteLength } from '#lib/models/NoteLength';
import { Swara } from '#lib/models/Swara';

function* single(): Generator<NoteBlock> {
  yield {
    type: BlockType.Continuation,
    length: 1,
  };
}

function* double(): Generator<NoteBlock> {
  yield {
    type: BlockType.Continuation,
    length: 2,
  };
  yield {
    type: BlockType.Skip,
  };
}

function* length1(swara: Swara): Generator<NoteBlock> {
  yield {
    type: BlockType.Shruti,
    shruti: swara.shruti,
    sthayi: swara.sthayi,
  };
}

function* length2(swara: Swara): Generator<NoteBlock> {
  yield* length1(swara);
  yield* single();
}

function* length3(swara: Swara): Generator<NoteBlock> {
  yield* length1(swara);
  yield* double();
}

function* length4(swara: Swara): Generator<NoteBlock> {
  yield* length2(swara);
  yield* double();
}

function* length5(swara: Swara): Generator<NoteBlock> {
  yield* length1(swara);
  yield* double();
  yield* double();
}

function* length6(swara: Swara): Generator<NoteBlock> {
  yield* length2(swara);
  yield* double();
  yield* double();
}

function* length7(swara: Swara): Generator<NoteBlock> {
  yield* length1(swara);
  yield* double();
  yield* double();
  yield* double();
}

function* length8(swara: Swara): Generator<NoteBlock> {
  yield* length2(swara);
  yield* double();
  yield* double();
  yield* double();
}

function* generateBlocks(swara: Swara): Generator<NoteBlock> {
  switch (swara.length) {
    case NoteLength.L2: {
      yield* length2(swara);
      break;
    }
    case NoteLength.L3: {
      yield* length3(swara);
      break;
    }
    case NoteLength.L4: {
      yield* length4(swara);
      break;
    }
    case NoteLength.L5: {
      yield* length5(swara);
      break;
    }
    case NoteLength.L6: {
      yield* length6(swara);
      break;
    }
    case NoteLength.L7: {
      yield* length7(swara);
      break;
    }
    case NoteLength.L8: {
      yield* length8(swara);
      break;
    }
  }
}

function* generateExtra(num: number): Generator<NoteBlock> {
  for (let i = 0; i < num; i++) {
    yield {
      type: BlockType.Undefined,
    };
  }
}

function* _generate(swara: Swara[]) {
  let subblock: NoteBlock = {
    type: BlockType.Multiple,
    children: [],
  };

  for (const s of swara) {
    if (
      s.length === NoteLength.L1 ||
      s.length === NoteLength.L2 ||
      s.length === NoteLength.L3 ||
      s.length === NoteLength.L4 ||
      s.length === NoteLength.L5 ||
      s.length === NoteLength.L6 ||
      s.length === NoteLength.L7 ||
      s.length === NoteLength.L8
    ) {
      if (subblock.children.length) {
        yield subblock;
        subblock = {
          type: BlockType.Multiple,
          children: [],
        };
      }

      yield* generateBlocks(s);
    } else {
      if (subblock.children.length) {
        const prevChild = subblock.children[subblock.children.length - 1];

        if (prevChild && prevChild.length !== s.length) {
          throw new Error('whoops!');
        }
      }

      subblock.children.push({
        length: s.length,
        shruti: s.shruti,
        sthayi: s.sthayi,
      });
    }
  }
}

function* generate(swara: Swara[], groupBy: number) {
  let count = 0;

  for (const block of _generate(swara)) {
    yield block;
    count++;
  }

  if (count < 2 * groupBy) {
    yield* generateExtra(groupBy * 2 - count);
  } else {
    let extra = groupBy;

    if (count % groupBy !== 0) {
      extra += groupBy - (count % groupBy);
    }

    yield* generateExtra(extra);
  }
}

export function swaraToNoteBlocks(swara: Swara[], groupBy: number) {
  const noteBlocks: NoteBlock[][] = [];
  let count = 0;
  let row: NoteBlock[] = [];

  for (const block of generate(swara, groupBy)) {
    row.push(block);
    count++;

    if (count === groupBy) {
      noteBlocks.push(row);
      count = 0;
      row = [];
    }
  }

  return noteBlocks;
}
