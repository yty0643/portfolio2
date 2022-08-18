import React from 'react';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { selectFocus } from '../features/focus/focusSlice';
import { selectTheme } from '../features/theme/themeSlice';

interface IBtn{
    isLight: boolean,
    focus: boolean,
}

const Btn = styled.button<IBtn>`
font-size: 1.2rem;
font-weight: 500;
padding: 2px 10px;
${({ theme, isLight }) => {
    const color = isLight ? "light" : "dark";
    return `
    color: ${theme[color].color};
    `
}}
border-radius: 2rem;
background-color: transparent;
:hover{
    background-color: rgb(230, 233, 238);
}
:active{
    color: white;
    background-color: rgb(60, 118, 233);
}
& + &{
    margin-left: 3rem;
}
${({ focus }) => focus && `
color: white;
background-color: rgb(60, 118, 233);
`}
@media screen and (max-width: 900px) {
    width: 2rem;
    overflow: hidden;
    font-size: 1rem;
    padding: 2px 0;
    & + &{
        margin-left: 0.5rem;
    }
}

`

const NavBtn = ({ index, onClick, children }: { index: number, onClick: () => void, children: string }) => {
    const focus = useAppSelector(selectFocus);
    const theme = useAppSelector(selectTheme);

    return (
        <Btn isLight={theme} focus={index == focus}
            onClick={onClick}>
            {children}
        </Btn>
    );
};

export default NavBtn;