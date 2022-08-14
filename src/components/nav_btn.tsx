import React from 'react';
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

const NavBtn = ({ children }: { children: string }) => {
    return (
        <Btn>
            {children}
        </Btn>
    );
};

export default NavBtn;