import React from 'react';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { selectIsLock, toggleLock } from '../features/isLock/isLockSlice';

const Btn = styled.button`
width: 2rem;
height: 2rem;
`

const LockBtn = () => {
    const dispatch = useAppDispatch();
    const isLock = useAppSelector(selectIsLock);

    const onClick = () => {
        dispatch(toggleLock());    
    };

    return (
        <Btn onClick={onClick}>
            {isLock ? "Lock" : "Unlock"}
        </Btn>
    );
};

export default LockBtn;