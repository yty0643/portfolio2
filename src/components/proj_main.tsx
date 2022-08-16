import React from 'react';
import styled from 'styled-components';

interface IDiv{
    isActive: boolean,
}
const Div = styled.div<IDiv>`
position: sticky;
top: 0;
left: 0;
flex: 1 1 65%;
display: flex;
height: 100%;
${({ isActive }) => isActive ?
    `
    opacity: 1;
    transform: translateX(0rem);
    `
    :
    `
    opacity: 0;
    transform: translateX(-10rem);
    `
}
transition: all ease-in 800ms;
`

const Imgbox = styled.div`
width: 100%;
height: calc(100vh - 6rem);
margin: 3rem 1.5rem;
padding: 3rem;
border-radius: 1rem;
box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
:hover{
    transform: translateY(-0.5rem);
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px; 
}
transition: all ease-in 100ms;
background-color: white;
`

const Img = styled.img`
max-width: 100%;
max-height: 100%;
`

const ProjMain = ({ isActive, image }: { isActive: boolean, image: string }) => {
    return (
        <Div isActive={isActive}>
            <Imgbox>
                <Img src={image} alt="" />
            </Imgbox>

        </Div>
    );
};

export default ProjMain;