import React, { RefObject, useEffect } from 'react';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { selectFocus, setFocus } from '../features/focus/focusSlice';

interface IBtn{
    focus: boolean,
}
const Btn = styled.button<IBtn>`
font-size: 1rem;
font-weight: 500;
padding: 2px 10px;
color: rgb(39, 40, 43);
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
`

const NavBtn = ({ navRef, index, children }: { navRef: RefObject<HTMLElement>, index: number, children: string }) => {
    const dispatch = useAppDispatch();
    const focus = useAppSelector(selectFocus);

    const onClick = (e: React.MouseEvent ) => {
        dispatch(setFocus(index + 1));
        let nav: Element = navRef.current!;
        let i = index + 1;
        while (i--) {
            nav = nav.nextSibling as Element;
        }
        nav.scrollIntoView({
            behavior: 'smooth',
        })
    }

    return (
        <Btn focus={index + 1 == focus}
            onClick={onClick}>
            {children}
        </Btn>
    );
};

export default NavBtn;