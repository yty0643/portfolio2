import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface IFocusState {
    index: number,
};

const initialState: IFocusState = {
    index: 0,
};

export const focusSlice = createSlice({
    name: 'focus',
    initialState,
    reducers: {
        setFocus: (state, action) => {
            state.index = action.payload;
        },
    }
});

export const { setFocus } = focusSlice.actions;
export const selectFocus = (state: RootState) => state.focus.index;

export default focusSlice.reducer;
