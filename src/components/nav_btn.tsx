import React, { RefObject, useEffect } from 'react';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { selectFocus, setFocus } from '../features/focus/focusSlice';
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
    @media screen and (max-height: 600px) {
        margin-left: 1rem;
    }
}
${({ focus }) => focus && `
color: white;
background-color: rgb(60, 118, 233);
`}


`

const NavBtn = ({ index, onClick, children }: { index: number, onClick: () => void, children: string }) => {
    const dispatch = useAppDispatch();
    const focus = useAppSelector(selectFocus);
    const theme = useAppSelector(selectTheme);
    
    // const onClick = (e: React.MouseEvent) => {
    //     dispatch(setFocus(index));
    //     let nav: Element = navRef.current!;
    //     let i = index + 1;
    //     while (i--) {
    //         nav = nav.nextSibling as Element;
    //     }
    //     nav.scrollIntoView({
    //         behavior: 'smooth',
    //     })
    // }

    return (
        <Btn isLight={theme} focus={index == focus}
            onClick={onClick}>
            {children}
        </Btn>
    );
};

export default NavBtn;