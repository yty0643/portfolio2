import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { useAppDispatch } from '../app/hooks';
import { setTempNode } from '../features/nodes/nodesSlice';

const Btn = styled.button`
background-color: white;
text-align: start;
width: 100%;
height: 3rem;
padding-left: 0.5rem;
font-size: 0.8rem;
font-weight: 500;
:hover{
    background-color: rgb(230, 233, 238);
}
:active{
    background-color: rgb(200, 203, 208);
}
& + &{
    border-top: 0.5px solid rgb(200,200,200);
}
`


const Tool = ({ children }: { children: string }) => {
    const dispatch = useAppDispatch();

    const onDragStart = (event: React.MouseEvent) => {
        dispatch(setTempNode({
            name: children,
        }));
    };
    
    return (
        <Btn
            draggable
            onDragStart={onDragStart}>
            {children}
        </Btn>
    );
};

export default Tool;