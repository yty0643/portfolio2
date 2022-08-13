import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface IEdgesState {
    list: number[],
};

const initialState: IEdgesState = {
    list: [],

};

export const edgesSlice = createSlice({
    name: 'edges',
    initialState,
    reducers: {
        setEdges: (state, action) => {
            state.list[action.payload.index] = action.payload.e;
        },
    }
});

export const { setEdges } = edgesSlice.actions;
export const selectEdges = (state: RootState) => state.edges.list;

export default edgesSlice.reducer;
