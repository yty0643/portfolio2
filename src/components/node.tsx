import { lighten } from 'polished';
import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { useAppDispatch } from '../app/hooks';
import { setEdges } from '../features/edges/edgesSlice';
import { setNodes } from '../features/nodes/nodesSlice';

interface IDiv{
    width: number,
    height: number,
}
const Div = styled.div<IDiv>`
z-index: 1;
position: absolute;
overflow: hidden;
top: 0;
left: 0;
${({ width, height }) => `
    width: ${width}px;
    height: ${height}px;
`}
border-radius: 5px;
background-color: white;
box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
`

interface IEdgeBtn{
    reverse: boolean
}
const EdgeBtn = styled.button<IEdgeBtn>`
position: absolute;
top: 50%;
${({ reverse }) => reverse ?
    `
    left: 0%;
    transform: translate(-50%, -50%);
    `
    :
    `
    right: 0%;
    transform: translate(50%, -50%);
    `
}
width: 1.2rem;
height: 1rem;
border-radius: 40%;

background-color: rgb(181, 183, 189);
cursor: crosshair;
:hover{
    background-color: ${lighten(0.15, `rgb(181, 183, 189)`)}
    
}
`

interface IProps{
    index: number,
    reverse: boolean,
    children: string,
    initX: number,
    initY: number,
    width: number,
    height: number,
    edgeStart:(e: React.MouseEvent, index: number) => void,
    edgeEnd:(e: React.MouseEvent, index: number) => void,
};

const Node = ({ index, reverse, children, initX, initY, width, height, edgeStart, edgeEnd }: IProps) => {
    const dispatch = useAppDispatch();
    const [x, setX] = useState<number>(initX);
    const [y, setY] = useState<number>(initY);

    const onMouseDown = (e: React.MouseEvent) => {
        e.stopPropagation();
        const sx = e.pageX;
        const sy = e.pageY;
        const move = (e: MouseEvent) => {
            const ex = x + e.pageX - sx;
            const ey = y + e.pageY - sy;
            setX(ex);
            setY(ey);
            dispatch(setNodes({
                index,
                x: reverse ? ex : ex + width,
                y: ey + height / 2,
            }));
        };
        window.addEventListener('mousemove', move);
        window.onmouseup = () => {
            window.removeEventListener('mousemove', move);
            window.onmouseup = null;
        };
    }

    useEffect(() => {
        dispatch(setNodes({
            index,
            x: reverse ? x : x + width,
            y: y + height / 2,
        }));
    }, []);

    return (
        <Div
            
            width={width}
            height={height}
            onMouseDown={onMouseDown}
            style={{ transform: `translate(${x}px, ${y}px)` }}>
            <EdgeBtn
                reverse={reverse}
                onMouseDown={(e) => edgeStart(e, index)}
                onMouseUp={(e) => edgeEnd(e, index)} />
        </Div>
    );
};

export default Node;