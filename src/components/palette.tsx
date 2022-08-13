import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { selectX, selectY, setCoord } from '../features/coord/coordSlice';
import Nodes from './nodes';
import Pattern from './pattern';

const Div = styled.div`
position: relative;
width: 100%;
height: 100%;
overflow: hidden;
`

const Palette = () => {
    const dispatch = useAppDispatch();
    const x = useAppSelector(selectX);
    const y = useAppSelector(selectY);
    
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

    return (
        <Div
            onMouseDown={onMouseDown}>
            <Pattern />
            <Nodes />
        </Div>
    );
};

export default Palette;