import React, { useState } from 'react';
import styled from 'styled-components';
import NavBtn from '../components/nav_btn';


interface INav{
    isActive: boolean,
}
const Nav = styled.nav<INav>`
z-index: 4;
position: fixed;
top: 0;
left: 0;
display:flex;
align-items: center;
justify-content: space-between;
width: 100%;
height: 2rem;
padding: 0 20%;
${({ isActive })=>isActive && `height: 5rem;`}
background-color: white;
box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
transition: all ease-in 100ms;
`

const Btns = styled.div`
display:flex;
align-items: center;
`

const Navbar = () => {
    const [isActive, setIsActive] = useState<boolean>(false);
    return (
        <Nav
            isActive={isActive}
            onMouseEnter={() => { setIsActive(true) }}
            onMouseLeave={() => { setIsActive(false) }}>
            <p>Logo</p>
            <Btns>
                <NavBtn>Intro</NavBtn>
                <NavBtn>Projects</NavBtn>
            </Btns>
        </Nav>
    );
};

export default Navbar;