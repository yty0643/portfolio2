import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

interface INode{
    reverse:boolean,
    x: number,
    y: number,
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
            reverse: true,
            x: 0,
            y: 0,
            width: 160,
            height: 160,
            name: "Skills",
        },
        {
            reverse: false,
            x: 0,
            y: 0,
            width: 160,
            height: 48,
            name: "React",
        },
        {
            reverse: false,
            x: 0,
            y: 0,
            width: 160,
            height: 48,
            name: "Typescript",
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
                x: action.payload.x,
                y: action.payload.y,
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
