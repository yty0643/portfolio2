import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';

export interface IScaleState {
  value: number;
}

const initialState: IScaleState = {
  value: 0.5,
};

export const scaleSlice = createSlice({
  name: 'scale',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 0.1;
    },
    decrement: (state) => {
      state.value -= 0.1;
    },
  }
});

export const { increment, decrement } = scaleSlice.actions;
export const selectScale = (state: RootState) => state.scale.value;

export default scaleSlice.reducer;
