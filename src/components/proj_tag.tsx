import React from 'react';
import styled from 'styled-components';


const Div = styled.div`
margin: 0 0.5rem 0.5rem 0;
padding: 0.5rem 1rem;
border-radius: 3rem;
font-weight: 500;
font-size 1rem;
color: white;
box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
background-color: rgb(214, 216, 221);
color: rgb(24, 24, 27);
:hover{
    transform: translateY(-0.5rem);
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px; 
}
transition: all ease-in 100ms;
`

const ProjTag = ({ children }: { children: string }) => {
    return (
        <Div>
            #{children}
        </Div>
    );
};

export default ProjTag;