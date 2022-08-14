import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface ILockState {
    value: boolean;
};

const initialState: ILockState = {
    value: false,
};

export const isLockSlice = createSlice({
    name: 'isLock',
    initialState,
    reducers: {
        toggleLock: (state) => {
            state.value = !state.value; 
        },
    }
});

export const { toggleLock } = isLockSlice.actions;
export const selectIsLock = (state: RootState) => state.isLock.value;

export default isLockSlice.reducer;
