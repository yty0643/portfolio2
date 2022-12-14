import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface IEdgesState {
    list: number[][],
    tempEdge: {
        ipX:number,
        ipY:number,
        opX:number,
        opY:number,
    }|null,
};

const initialState: IEdgesState = {
    list: [[0,1],[0,2],[0,3],[4,0]],
    tempEdge: null,
};

export const edgesSlice = createSlice({
    name: 'edges',
    initialState,
    reducers: {
        setEdges: (state, action) => {
            state.list.push(action.payload);
        },
        popEdges: (state, action) => {
            state.list = action.payload;
        },
        setTempEdge: (state, action) => {
            state.tempEdge = action.payload;
        }
    }
});

export const { setEdges, popEdges, setTempEdge } = edgesSlice.actions;
export const selectEdges = (state: RootState) => state.edges.list;
export const selecTempEdge = (state: RootState) => state.edges.tempEdge;

export default edgesSlice.reducer;
