import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface EditorState {
  cursorPosition: number;
}

const INITIAL_STATE: EditorState = {
  cursorPosition: 0,
};

export const editor = createSlice({
  name: 'editor',
  initialState: INITIAL_STATE,
  reducers: {
    cursorNext(state) {
      state.cursorPosition++;
    },
    cursorPrev(state) {
      state.cursorPosition--;
    },
    cursorSet(state, action: PayloadAction<number>) {
      state.cursorPosition = action.payload;
    },
  },
});
