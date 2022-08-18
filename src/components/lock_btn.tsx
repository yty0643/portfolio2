import { faLock, faUnlock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { selectIsLock, toggleLock } from '../features/isLock/isLockSlice';
import { selectTheme } from '../features/theme/themeSlice';

interface IBtn{
    isLight: boolean,
}
const Btn = styled.button<IBtn>`
width: 3rem;
height: 3rem;
background-color: white;
border-bottom: 1px solid rgb(214, 216, 221);
font-size: 1.5rem;
${({ theme, isLight }) => {
    const color = isLight ? "light" : "dark";
    return `
    color: ${theme[color].color};
    background-color: ${theme[color].bgColor};
    `
}}
:hover{
    background-color: rgb(214, 216, 221);
}
`

const LockBtn = () => {
    const dispatch = useAppDispatch();
    const theme = useAppSelector(selectTheme);
    const isLock = useAppSelector(selectIsLock);

    const onClick = () => {
        dispatch(toggleLock());    
    };

    return (
        <Btn isLight={theme} onClick={onClick}>
            {isLock ? <FontAwesomeIcon icon={faLock} /> : <FontAwesomeIcon icon={faUnlock} />}
        </Btn>
    );
};

export default LockBtn;