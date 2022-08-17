import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { useAppSelector } from '../app/hooks';
import SkillIcon from '../components/skill_icon';
import { selectTheme } from '../features/theme/themeSlice';
import logo1 from '../images/logo/ts.png';

interface ISection{
    isLight: boolean,
}
const Section = styled.section<ISection>`
position: relative;
display: flex;
align-items: center;
justify-content: center;
width: 100%;
height: 100vh;
${({ theme, isLight }) => {
    const color = isLight ? "light" : "dark";
    return `
    background-color: ${theme[color].bgColor};
    color: ${theme[color].color};
    `
}}
transition: all ease-in 100ms;
`

const Div = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 60%;
height: 60%;
background-color: rgb(240,240,240);
border-radius: 1rem;
overflow: hidden;
`

interface IBox{
    x: number,
}
const Skbox = styled.div<IBox>`
display: flex;
background-color: whte;
${({ x })=> `transform: rotateZ(-10deg) translate(${x}px, -50px);`}
& + &{
    margin-top: 1rem;
}
`

const Skill = () => {
    const theme = useAppSelector(selectTheme);
    const ref = useRef<HTMLElement>(null);
    const iconArr = [logo1, logo1, logo1, logo1];
    const [xArr, setXArr] = useState<number[]>([-300, 300, -300]);

    return (
        <Section
            ref={ref}
            isLight={theme}>
            <Div>
                <Skbox x={xArr[0]}>
                    {iconArr.map((icon, index) =>
                        <SkillIcon key={index} icon={icon} />
                    )}
                </Skbox>
                <Skbox x={xArr[1]}>
                    {iconArr.map((icon, index) =>
                        <SkillIcon key={index} icon={icon} />
                    )}
                </Skbox>
                <Skbox x={xArr[2]}>
                    {iconArr.map((icon, index) =>
                        <SkillIcon key={index} icon={icon} />
                    )}
                </Skbox>
            </Div>
        </Section>
    );
};

export default Skill;