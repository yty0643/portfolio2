import React, { RefObject } from 'react';
import styled from 'styled-components';

const Btn = styled.button`
font-size: 1rem;
font-weight: 500;
color: color: rgb(39, 40, 43);
background-color: transparent;
& + &{
    margin-left: 3rem;
}
`

const NavBtn = ({ navRef, index, children }: { navRef: RefObject<HTMLElement>, index: number, children: string }) => {
    const onClick = (e: React.MouseEvent ) => {
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
        <Btn onClick={onClick}>
            {children}
        </Btn>
    );
};

export default NavBtn;