import { lighten } from 'polished';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { setTempEdge } from '../features/edges/edgesSlice';
import { setNodes } from '../features/nodes/nodesSlice';
import { selectScale } from '../features/scale/scaleSlice';

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
display: flex;
align-items: center;
justify-content: center;
font-size: 1rem;
font-weight: 500;
${({ width, height }) => `
    width: ${width}px;
    height: ${height}px;
`}
border-radius: 5px;
background-color: white;
color: rgb(29, 30, 33);
box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
-webkit-user-select:none;
-moz-user-select:none;
-ms-user-select:none;
user-select:none;
`

const InputEdge = styled.button`
position: absolute;
top: 50%;
left: 0%;
transform: translate(-50%, -50%);
width: 1.2rem;
height: 1rem;
border-radius: 40%;

background-color: rgb(181, 183, 189);
cursor: crosshair;
:hover{
    background-color: ${lighten(0.15, `rgb(181, 183, 189)`)}
    
}
`
const OutputEdge = styled(InputEdge)`
left: 100%;
`

interface IProps{
    index: number,
    children: string,
    initX: number,
    initY: number,
    width: number,
    height: number,
    edgeStart:(e: React.MouseEvent, nodeIdx: number, edgeIdx: number) => void,
    edgeEnd: (e: React.MouseEvent, nodeIdx: number, edgeIdx: number) => void,
    initStart: () => void,
    initEnd: () => void,
};

const Node = ({ index, children, initX, initY, width, height, edgeStart, edgeEnd, initStart, initEnd }: IProps) => {
    const dispatch = useAppDispatch();
    const scale = useAppSelector(selectScale);
    const [x, setX] = useState<number>(initX);
    const [y, setY] = useState<number>(initY);

    const onMouseDown = (event: React.MouseEvent) => {
        event.stopPropagation();
        const sx = event.pageX;
        const sy = event.pageY;
        const move = (e:MouseEvent) => {
            const ex = x + (e.pageX - sx) * (1 / scale);
            const ey = y + (e.pageY - sy) * (1 / scale);
            setX(ex);
            setY(ey);
            dispatch(setNodes({
                index,
                ipX: ex,
                ipY: ey + height / 2,
                opX: ex + width,
                opY: ey + height / 2,
            }));
        };
        window.addEventListener('mousemove', move);
        window.onmouseup = () => {
            window.removeEventListener('mousemove', move);
            window.onmouseup = null;
        };
    };

    const tempEdge = (event: React.MouseEvent, nodeIdx: number, btnIdx: number) => {
        event.stopPropagation();
        const ipX = btnIdx == 0 ? x : x + width;
        const ipY = y + height / 2;
        const sx = event.pageX;
        const sy = event.pageY;
        const move = (e: MouseEvent) => {
            const opX = x + (e.pageX - sx) * (1 / scale) + (btnIdx == 0 ? 0 : width);
            const opY = y + (e.pageY - sy) * (1 / scale) + height / 2;
            dispatch(setTempEdge({
                ipX,
                ipY,
                opX, 
                opY,
            }));
        }
        window.addEventListener('mousemove', move);
        window.onmouseup = () => {
            window.removeEventListener('mousemove', move);
            dispatch(setTempEdge(null));
            window.onmouseup = null;
        };
    }

    useEffect(() => { 
        dispatch(setNodes({
            index,
            ipX: x,
            ipY: y + height / 2,
            opX: x + width,
            opY: y + height / 2,
        }));
    },[scale])

    return (
        <Div
            width={width}
            height={height}
            onMouseDown={onMouseDown}
            style={{ transform: `translate(${x}px, ${y}px)` }}>
            {children}
            <InputEdge
                onMouseDown={(e) => { edgeStart(e, index, 0); initEnd(); tempEdge(e, index, 0); }}
                onMouseUp={(e) => edgeStart(e, index, 0)} />
            <OutputEdge
                onMouseDown={(e) => { edgeEnd(e, index, 1); initStart(); tempEdge(e, index, 1); }}
                onMouseUp={(e) => edgeEnd(e, index, 1)} />
        </Div>
    );
};

export default Node;