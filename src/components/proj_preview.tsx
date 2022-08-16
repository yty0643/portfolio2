import React from 'react';
import styled from 'styled-components';

const Preview = styled.div`
display: flex;
flex-direction: column;
padding: 3rem;
margin: 0 1.5rem;
border-radius: 1rem;
box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
:hover{
    transform: translateY(-0.5rem);
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px; 
}
transition: all ease-in 100ms;
background-color: white;
& + &{
    margin-top: 3rem;
}
`

const Desc = styled.p`
height: 35%;
font-size: 2rem;
font-weight: 700;
color: rgb(24, 24, 27);
`
const Imgbox = styled.div`
display:flex;
align-items: center;
justify-content: center;
width: 100%;
height: 65%;
margin-top: 2rem;
`
const Img = styled.img`
max-width: 100%;
max-height: 20rem;
`

const ProjPreview = ({ img, children }: { img: string, children: string }) => {
    return (
        <Preview>
            <Desc>
                {children}
            </Desc>
            <Imgbox>
                <Img src={img} alt="" />
            </Imgbox>
        </Preview>
    );
};

export default ProjPreview;