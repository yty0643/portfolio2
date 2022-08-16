import { darken, lighten } from 'polished';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { setTempEdge } from '../features/edges/edgesSlice';
import { setNodes } from '../features/nodes/nodesSlice';
import { selectScale } from '../features/scale/scaleSlice';
import { selectTheme } from '../features/theme/themeSlice';
import NodeDesc from './node_desc';

interface IDiv{
    width: number,
    height: number,
    isLight: boolean,
}
const Div = styled.div<IDiv>`
z-index: 1;
position: absolute;
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

${({ theme, isLight }) => {
    const color = isLight ? "light" : "dark";
    const css = isLight ?
        `:hover{background-color: ${darken(0.1, `${theme[color].bgColor}`)};}`
        :
        `:hover{background-color: ${lighten(0.1, `${theme[color].bgColor}`)};}`
    return css + 
        `
        background-color: ${lighten(0.05, `${theme[color].bgColor}`)};
        color: ${theme[color].color};
        `
}}
box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
`

const Img = styled.img`
width: 70%;
height: 70%:
`

const InputEdge = styled.button`
position: absolute;
top: 50%;
left: 0%;
transform: translate(0%, -50%);
width: 0.7rem;
height: 1rem;
border-radius: 0 10px 10px 0;
background-color: rgb(181, 183, 189);
cursor: crosshair;
:hover{
    background-color: ${lighten(0.15, `rgb(181, 183, 189)`)}
    
}
`
const OutputEdge = styled(InputEdge)`
left: 100%;
border-radius: 10px 0 0 10px;
transform: translate(-100%, -50%);
`

interface IProps{
    index: number,
    children: string,
    img: string|undefined,
    initX: number,
    initY: number,
    width: number,
    height: number,
    edgeStart:(e: React.MouseEvent, nodeIdx: number, edgeIdx: number) => void,
    edgeEnd: (e: React.MouseEvent, nodeIdx: number, edgeIdx: number) => void,
    initStart: () => void,
    initEnd: () => void,
};

const Node = ({ index, children, img, initX, initY, width, height, edgeStart, edgeEnd, initStart, initEnd }: IProps) => {
    const dispatch = useAppDispatch();
    const theme = useAppSelector(selectTheme);
    const scale = useAppSelector(selectScale);
    const [x, setX] = useState<number>(initX);
    const [y, setY] = useState<number>(initY);

    const onMouseDown = (event: React.MouseEvent) => {
        event.stopPropagation();
        const sx = event.pageX;
        const sy = event.pageY;
        const move = (e: MouseEvent) => {
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
    }, [scale])

    return (
        <Div
            isLight={theme}
            width={width}
            height={height}
            onMouseDown={onMouseDown}
            style={{ transform: `translate(${x}px, ${y}px)` }}>
            {children}
            {index == 1 &&  <NodeDesc />}
            {img && <Img src={img} alt="" draggable={false} />}
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