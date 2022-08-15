import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface IFocusState {
    isActive: boolean,
};

const initialState: IFocusState = {
    isActive: true,
};

export const isActiveSlice = createSlice({
    name: 'isActive',
    initialState,
    reducers: {
        setIsActive: (state, action) => {
            state.isActive = action.payload;
        },
    }
});

export const { setIsActive } = isActiveSlice.actions;
export const selectIsActive = (state: RootState) => state.isActive.isActive;

export default isActiveSlice.reducer;
