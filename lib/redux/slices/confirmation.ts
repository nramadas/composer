import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Entry {
  title: string;
  prompt: string;
}

interface ConfirmationState {
  answer: boolean;
  entry?: Entry;
}

const INITIAL_STATE: ConfirmationState = {
  answer: false,
};

export const confirmation = createSlice({
  name: 'confirmation',
  initialState: INITIAL_STATE,
  reducers: {
    clear(state) {
      state.answer = false;
      state.entry = undefined;
    },
    setAnswer(state, action: PayloadAction<boolean>) {
      state.answer = action.payload;
    },
    setQuestion(state, action: PayloadAction<Entry>) {
      state.answer = false;
      state.entry = action.payload;
    },
  },
});
