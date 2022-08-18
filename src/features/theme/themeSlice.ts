import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';

export interface IThemeState {
  value: boolean;
}

const initialState: IThemeState = {
  value: true,
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggle: (state) => {
      state.value = !state.value;
    },
  }
});

export const { toggle } = themeSlice.actions;
export const selectTheme = (state: RootState) => state.theme.value;

export default themeSlice.reducer;
