import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { useAppSelector } from '../app/hooks';
import NavBtn from '../components/nav_btn';
import ThemeToggle from '../components/theme_toggle';
import { selectTheme } from '../features/theme/themeSlice';


interface INav{
    isLight: boolean,
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
${({ theme, isLight }) => {
    const color = isLight ? "light" : "dark";
    return `
    background-color: ${theme[color].bgColor};
    color: ${theme[color].color};
    `
}}
${({ isLight }) => !isLight && `border-bottom: 1px solid rgb(100,100,100);`}
box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
transition: all ease-in 100ms;
`

const Logo = styled.div`
font-weight: 500;
font-size: 1.2rem;
padding: 2px 10px;
@media screen and (max-width: 700px) {
    font-size: 0.8rem;
}
`
const Btns = styled.div`
display:flex;
align-items: center;
`

const Navbar = () => {
    const theme = useSelector(selectTheme);;
    const ref = useRef<HTMLElement>(null);
    const [isActive, setIsActive] = useState<boolean>(true);
    
    const onClick = (index: number) => {
        const sections = ref.current!.parentNode!.children;
        sections[index + 1].scrollIntoView({
            behavior: 'smooth'
          });
    }

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
            isLight={theme}
            ref={ref}
            isActive={isActive}>
            <Logo>
                Yun Taeyoung
            </Logo>
            <Btns>
                <NavBtn onClick={() => { onClick(0) }} index={0}>Intro</NavBtn>
                <NavBtn onClick={() => { onClick(1) }} index={1}>Projects</NavBtn>
                <NavBtn onClick={() => { onClick(2) }} index={2}>Contact</NavBtn>
            </Btns>
            <Btns>
                <ThemeToggle />
            </Btns>
        </Nav>
    );
};

export default Navbar;