import { faLock, faUnlock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { selectIsLock, toggleLock } from '../features/isLock/isLockSlice';

const Btn = styled.button`
width: 2rem;
height: 2rem;
background-color: white;
border-bottom: 1px solid rgb(214, 216, 221);
font-size: 1rem;
:hover{
    background-color: rgb(214, 216, 221);
}
`

const LockBtn = () => {
    const dispatch = useAppDispatch();
    const isLock = useAppSelector(selectIsLock);

    const onClick = () => {
        dispatch(toggleLock());    
    };

    return (
        <Btn onClick={onClick}>
            {isLock ? <FontAwesomeIcon icon={faLock} /> : <FontAwesomeIcon icon={faUnlock} />}
        </Btn>
    );
};

export default LockBtn;