import React from 'react';
import styled from 'styled-components';
import { useAppDispatch } from '../app/hooks';
import { decrement, increment } from '../features/scale/scaleSlice';

const Btn = styled.button`
width: 2rem;
height: 2rem;
`
const ZoomBtn = ({ minus }: { minus?: boolean }) => {
    const dispatch = useAppDispatch();
    
    const onClick = () => {
        if (minus)
            dispatch(decrement());
        else
            dispatch(increment());
    };

    return (
        <Btn onClick={onClick}>
            +
        </Btn>
    );
};

export default ZoomBtn;