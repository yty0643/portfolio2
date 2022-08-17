import React, { useEffect, useRef, useState } from 'react';
import styled, { css, keyframes } from 'styled-components';
import { useAppSelector } from '../app/hooks';
import SkillIcon from '../components/skill_icon';
import { selectTheme } from '../features/theme/themeSlice';
import logo1 from '../images/logo/ts.png';
import logo2 from '../images/logo/js.png';
import logo3 from '../images/logo/react.png';
import logo4 from '../images/logo/redux.png';
import logo5 from '../images/logo/sc.png';
import logo6 from '../images/logo/github.png';
import logo7 from '../images/logo/fb.png';
import logo8 from '../images/logo/aws.png';
import logo9 from '../images/logo/c.png';

interface ISection{
    isLight: boolean,
}
const Section = styled.section<ISection>`
position: relative;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 100%;
height: 100vh;
padding: 3rem 10%;
${({ theme, isLight }) => {
    const bgColor = isLight ? "light" : "dark";
    const color = isLight ? "light" : "dark";
    return `
    background-color: ${theme[bgColor].bgColor};
    color: ${theme[color].color};
    `
}}
transition: all ease-in 100ms;
`

interface IDiv{
    isLight: boolean,
}
const Div = styled.div<IDiv>`
position: relative;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 80%;
height: 100%;
margin-bottom: 3rem;
background-color: rgb(240, 245, 250);
border-radius: 1rem;
overflow: hidden;
${({ theme, isLight }) => {
    const bgColor = isLight ? "rgb(240, 245, 250)" : "rgb(35, 36, 37)";
    return `
    background-color: ${bgColor};
    `
}}
`
const Title = styled.div`
position: absolute;
top: 2rem;
left: 2rem;
font-size: 3rem;
font-weight: 700;
`

const Desc = styled.p`
width: 50%;
font-size: 2rem;
font-weight: 700;
color: rgb(116, 119, 130);
`

const slide = (x: number) => keyframes`
0%{
    transform: rotateZ(-10deg) translate(${-x}%, -10px);
}
100%{
    transform: rotateZ(-10deg) translate(${x}%, -10px);
}
`;

interface IBox{
    x: number,
}
const Skbox = styled.div<IBox>`
display: flex;
background-color: transparent;
${({ x })=> css`animation: ${slide(x)} 15s infinite alternate;`}
:hover{
    animation-play-state: paused;
}
`

const Skill = () => {
    const theme = useAppSelector(selectTheme);
    const iconArr = [
        logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9,
        logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9,
    ];
    const titles = [
        "Typescript", "Javascript", "React", "Redux", "Styled Component", "Github", "Firebase", "AWS", "C++",
        "Typescript", "Javascript", "React", "Redux", "Styled Component", "Github", "Firebase", "AWS", "C++"
    ];

    const [xArr, setXArr] = useState<number[]>([-50, 50, -50]);

    return (
        <Section
            isLight={theme}>
            <Div isLight={theme}>
                <Title>
                    기술 스택
                </Title>
                <Skbox x={xArr[0]}>
                    {iconArr.map((icon, index) =>
                        <SkillIcon key={index} icon={icon}>
                            {titles[index]}
                        </SkillIcon>
                    )}
                </Skbox>
                <Skbox x={xArr[1]}>
                    {iconArr.map((icon, index) =>
                        <SkillIcon key={index} icon={icon}>
                            {titles[index]}
                        </SkillIcon>
                    )}
                </Skbox>
                <Skbox x={xArr[2]}>
                    {iconArr.map((icon, index) =>
                        <SkillIcon key={index} icon={icon}>
                            {titles[index]}
                        </SkillIcon>
                    )}
                </Skbox>
            </Div>
            <Desc>
                실무에서 주로 사용하는 프레임워크, 라이브러리 위주로 꾸준히 공부하고 있습니다.
            </Desc>
        </Section>
    );
};

export default Skill;