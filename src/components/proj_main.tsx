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
@media screen and (max-width: 1000px) {
    position: static;
}
`
const Tagbox = styled.div`
display: flex;
width: 100%;
padding: 3rem 3rem 1.5rem 3rem;
flex-wrap: wrap;
align-content: flex-start;
`

interface IImgbox{
    isLight: boolean,
}
const Imgbox = styled.div<IImgbox>`
overflow: hidden;
display: flex;
flex-direction: column;
height: 100%;
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

const Emoji = styled.p`
font-weight: 700;
font-size: 1.5rem;
padding-right: 1.5rem;
`

const Desc = styled.p`
font-size: 2rem;
font-weight: 700;
padding: 0 3rem 3rem 3rem;
`
const Video = styled.video`

`

const ProjMain = ({ reverse, isActive, video, tags,url, children }: { reverse?: boolean, isActive: boolean, video: string, tags: string[], url: string,children: string }) => {
    const theme = useAppSelector(selectTheme);
    const onClick = () => {
        window.open(url);
    }
    return (
        <Div
            reverse={reverse}
            isActive={isActive}
            onClick={onClick}>
            <Imgbox isLight={theme}>
                <Tagbox>
                    <Emoji>
                        📌 태그
                    </Emoji>
                    {tags.map((tag, index) =>
                        <ProjTag key={index}>{tag}</ProjTag>
                    )}
                </Tagbox>
                <Desc>
                    {children}
                </Desc>
                <Video src={video} width="100%" height="100%" loop controls muted />
            </Imgbox>
        </Div>
    );
};

export default ProjMain;