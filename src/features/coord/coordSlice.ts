import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface ICoordState {
  x: number,
  y: number,
}

const initialState: ICoordState = {
  x: 0,
  y: 0,
};

export const coordSlice = createSlice({
  name: 'scale',
  initialState,
  reducers: {
    setCoord: (state, action) => {
      state.x = action.payload.x;
      state.y = action.payload.y;
    }
  }
});

export const { setCoord } = coordSlice.actions;
export const selectX = (state: RootState) => state.coord.x;
export const selectY = (state: RootState) => state.coord.y;

export default coordSlice.reducer;
