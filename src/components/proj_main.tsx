import React from 'react';
import styled from 'styled-components';
import ProjTag from './proj_tag';

interface IDiv{
    reverse?: boolean,
    isActive: boolean,
}
const Div = styled.div<IDiv>`
position: sticky;
top: 0;
left: 0;
flex: 1 1 65%;
display: flex;
flex-direction: column;
height: 100%;
padding: 3rem 1.5rem;
${({ isActive, reverse }) => {
    const x = reverse ? 10 : -10;
    return isActive ?
    `
    opacity: 1;
    transform: translateX(0rem);
    `
    :
    `
    opacity: 0;
    transform: translateX(${x}rem);
    `
}
}}
transition: all ease-in 800ms;
`
const Tabbox = styled.div`
flex: 1 1 15%;
display: flex;
width: 100%;
height: 15%;
flex-wrap: wrap;
`

const Imgbox = styled.div`
padding: 1rem;
flex: 1 1 85%;
display: flex;
width: 100%;
min-height: 100%;
margin: 1.5rem 0;
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
max-height: 50%;
`

const ProjMain = ({ reverse, isActive, image, tags }: { reverse?: boolean, isActive: boolean, image: string, tags:{title: string, color: string}[] }) => {
    return (
        <Div
            reverse={reverse}
            isActive={isActive}>
            <Tabbox>
                {tags.map((tag, index) =>
                    <ProjTag key={index} color={tag.color}>{tag.title}</ProjTag>
                )}
            </Tabbox>
            <Imgbox>
                {/* <Img src={image} alt="" /> */}
            </Imgbox>
        </Div>
    );
};

export default ProjMain;