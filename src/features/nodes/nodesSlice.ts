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

interface ITempNode{
    x: number,
    y: number,
    name: string,
}

export interface INodesState {
    list: INode[],
    tempNode: ITempNode,
};

const initialState: INodesState = {
    tempNode: {
        x: 100,
        y: 100,
        name: "error",
    },
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
        addNode: (state, action) => {
            state.list.push({
                x: action.payload.x-80,
                y: action.payload.y-24,
                ipX: 0,
                ipY: 0,
                opX: 0,
                opY: 0,
                width: 160,
                height: 48,
                name: state.tempNode.name,
            },)
        },
        setTempNode: (state, action) => { 
            state.tempNode = action.payload;
        },
    }
});

export const { setNodes, addNode, setTempNode } = nodesSlice.actions;
export const selectNodes = (state: RootState) => state.nodes.list;

export default nodesSlice.reducer;
