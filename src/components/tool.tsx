import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { setTempNode } from '../features/nodes/nodesSlice';
import { selectTheme } from '../features/theme/themeSlice';

interface IBtn{
    isLight: boolean,
}
const Btn = styled.button<IBtn>`
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

${({ theme, isLight }) => {
    const color = isLight ? "light" : "dark";
    return `
    background-color: ${theme[color].bgColor};
    color: ${theme[color].color};
    
    `
}}
border: 0.5px solid rgb(200,200,200);
border-bottom: none;
& + &{
    border-top: 0.5px solid rgb(200,200,200);
}
`


const Tool = ({ children }: { children: string }) => {
    const dispatch = useAppDispatch();
    const theme = useAppSelector(selectTheme);
    const onDragStart = (event: React.MouseEvent) => {
        dispatch(setTempNode({
            name: children,
        }));
    };
    
    return (
        <Btn
            isLight={theme}
            draggable
            onDragStart={onDragStart}>
            {children}
        </Btn>
    );
};

export default Tool;