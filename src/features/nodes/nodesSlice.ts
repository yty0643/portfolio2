import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

interface INode{
    x: number,
    y: number,
    ipX: number,
    ipY: number,
    opX: number,
    opY: number,
    width: number,
    height: number,
    name: string,
}

export interface INodesState {
    list: INode[],
};

const initialState: INodesState = {
    list: [
        {
            x: 100,
            y: 100,
            ipX: 0,
            ipY: 0,
            opX: 0,
            opY: 0,
            width: 160,
            height: 48,
            name: "React",
        },
        {
            x: 200,
            y: 200,
            ipX: 0,
            ipY: 0,
            opX: 0,
            opY: 0,
            width: 160,
            height: 48,
            name: "Typescript",
        },
        {
            x: 300,
            y: 300,
            ipX: 0,
            ipY: 0,
            opX: 0,
            opY: 0,
            width: 160,
            height: 48,
            name: "Javascript",
        }
    ],
};

export const nodesSlice = createSlice({
    name: 'nodes',
    initialState,
    reducers: {
        setNodes: (state, action) => {
            state.list[action.payload.index] = {
                ...state.list[action.payload.index],
                ipX: action.payload.ipX,
                ipY: action.payload.ipY,
                opX: action.payload.opX,
                opY: action.payload.opY,
            };
        },
        addNode: (state) => {
            // const temp = [...state.list];
            // temp.push({
            //     x: 0,
            //     y: 0,
            // });
            // console.log(temp);
            // state.list = temp;
        },
    }
});

export const { setNodes, addNode } = nodesSlice.actions;
export const selectNodes = (state: RootState) => state.nodes.list;

export default nodesSlice.reducer;
