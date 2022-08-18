import React from 'react';
import styled from 'styled-components';
import { useAppSelector } from '../app/hooks';
import { selectTheme } from '../features/theme/themeSlice';
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
height: 100vh;
padding: 3rem 1.5rem;
${({ isActive, reverse }) => {
    const x:number = reverse ? 5 : -5;
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
const Tagbox = styled.div`
display: flex;
width: 100%;
flex-wrap: wrap;
align-content: flex-start;
`

interface IImgbox{
    isLight: boolean,
}
const Imgbox = styled.div<IImgbox>`
display: flex;
height: 100%;
padding: 3rem;
border-radius: 1rem;
box-shadow: rgba(0, 0, 0, 0.2) 0px 8px 24px;
:hover{
    transform: translateY(-0.5rem);
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px; 
}
transition: all ease-in 100ms;
${({ theme, isLight }) => {
    const color = isLight ? "light" : "dark";
    return `
    background-color: ${theme[color].bgColor};
    color: ${theme[color].color};
    `
}}
`

const Img = styled.img`
max-height: 50%;
`

const Emoji = styled.p`
font-weight: 700;
font-size: 1.5rem;
padding-right: 1.5rem;
`

const ProjMain = ({ reverse, isActive, image, tags }: { reverse?: boolean, isActive: boolean, image: string, tags: string[] }) => {
    const theme = useAppSelector(selectTheme);
    return (
        <Div
            reverse={reverse}
            isActive={isActive}>
            <Imgbox isLight={theme}>
                <Tagbox>
                    <Emoji>
                    📌 태그
                    </Emoji>
                    {tags.map((tag, index) =>
                        <ProjTag key={index}>{tag}</ProjTag>
                    )}
                </Tagbox>
                {/* <Img src={image} alt="" /> */}
            </Imgbox>
        </Div>
    );
};

export default ProjMain;