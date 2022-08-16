import React from 'react';
import styled from 'styled-components';


interface IDiv{
    color: string,
}
const Div = styled.div<IDiv>`
padding: 0.5rem 1rem;
border-radius: 3rem;
font-weight: 500;
font-size 1rem;
color: white;
box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
:hover{
    transform: translateY(-0.5rem);
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px; 
}
transition: all ease-in 100ms;
& + &{
    margin-left: 1rem;
}
${({ color }) => `background-color: ${color}`}
`

const ProjTag = ({ color, children }: { color: string, children: string }) => {
    return (
        <Div
            color={color}>
            #{children}
        </Div>
    );
};

export default ProjTag;