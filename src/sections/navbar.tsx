import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { useAppSelector } from '../app/hooks';
import NavBtn from '../components/nav_btn';
import { selectIsActive } from '../features/isActive/isActiveSlice';


interface INav{
    isActive: boolean,
}
const Nav = styled.nav<INav>`
z-index: 5;
position: fixed;
top: 0;
left: 0;
display:flex;
align-items: center;
justify-content: space-between;
width: 100%;
height: 3rem;
${({ isActive }) => !isActive && `height: 0rem;`}
overflow: hidden;
padding: 0 20%;
background-color: white;
box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
transition: all ease-in 100ms;
`

const Logo = styled.div`
color: rgb(24, 24, 27);
font-weight: 500;
@media screen and (max-width: 700px) {
    font-size: 0.8rem;
}
`
const Desc = styled.p`
margin-top: 5px;
font-size: 0.8rem;
font-weight: 300;
`
const Btns = styled.div`
display:flex;
align-items: center;
`

const Navbar = () => {
    const ref = useRef<HTMLElement>(null);
    const [isActive, setIsActive] = useState<boolean>(true);
    
    useEffect(() => {
        const wheel = (e: WheelEvent) => {
            if (e.deltaY < 0) setIsActive(true);
            else setIsActive(false);
        };
        window.addEventListener('wheel', wheel);
        return () => {
            window.removeEventListener('wheel', wheel);
        }
    }, []);

    return (
        <Nav
            ref={ref}
            isActive={isActive}>
            <Logo>
                Yun Taeyoung
                <Desc>Portfolio</Desc>
            </Logo>
            <Btns>
                <NavBtn navRef={ref} index={0}>Intro</NavBtn>
                <NavBtn navRef={ref} index={1}>Projects</NavBtn>
                <NavBtn navRef={ref} index={2}>Contact</NavBtn>
            </Btns>
        </Nav>
    );
};

export default Navbar;