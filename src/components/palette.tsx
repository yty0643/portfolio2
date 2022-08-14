import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { selectX, selectY, setCoord } from '../features/coord/coordSlice';
import { addNode } from '../features/nodes/nodesSlice';
import { selectScale } from '../features/scale/scaleSlice';
import Nodes from './nodes';
import Pattern from './pattern';

const Div = styled.div`
z-index: 1;
position: relative;
width: 100%;
height: 100%;
overflow: hidden;
`

const Palette = () => {
    const dispatch = useAppDispatch();
    const x = useAppSelector(selectX);
    const y = useAppSelector(selectY);
    const scale = useAppSelector(selectScale);
    const coverRef = useRef<HTMLDivElement>(null);
    const onMouseDown = (e: React.MouseEvent) => {
        const sx = e.pageX;
        const sy = e.pageY;
        const move = (e: MouseEvent) => {
            const ex = x + e.pageX - sx;
            const ey = y + e.pageY - sy;
            dispatch(setCoord({
                x: ex,
                y: ey
            }));
        };
        window.addEventListener('mousemove', move);
        window.onmouseup = () => {
            window.removeEventListener('mousemove', move);
            window.onmouseup = null;
        };
    };

    const onDrop = (e: React.MouseEvent) => {
        const cover = coverRef.current!;
        const cx = cover.getBoundingClientRect().left;
        const cy = cover.getBoundingClientRect().top;
        const ex = (e.pageX - cx) * (1 / scale);
        const ey = (e.clientY - cy) * (1 / scale);
        dispatch(addNode({
            x: ex,
            y: ey,
        }));
    }

    return (
        <Div
            onMouseDown={onMouseDown}
            onDrop={onDrop}
            onDragOver={(e) => { e.preventDefault(); }}>
            <Pattern />
            <Nodes coverRef={coverRef} />
        </Div>
    );
};

export default Palette;