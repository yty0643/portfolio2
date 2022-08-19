import React, { useState } from 'react';
import styled from 'styled-components';
import { useAppSelector } from '../app/hooks';
import { selectFocus } from '../features/focus/focusSlice';
import { selectTheme } from '../features/theme/themeSlice';

const Div = styled.div`
position: relative;
width: 15rem;
height: 20rem;
& + &{
    margin-left: 3rem;
}
`

const Card = styled.div`
z-index: 2;
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
border: 1px solid rgba(255,255,255,0.1);
border-radius: 1rem;
background-color: rgba(255,255,255,0.05);
backdrop-filter: blur(1rem);
box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
`

interface ILight{
    isActive: boolean,
}
const Light = styled.div<ILight>`
font-size: 1rem;
font-weight: 500;
white-space: nowrap;
z-index: 1;
position: absolute;
bottom: -2.5rem;
left: 50%;
padding: 2.5rem 2rem 0.5rem;
border-radius: 5px;
background-color: rgb(60, 118, 233);
text-transform: uppercase;
transform: translateX(-50%);
transition: bottom 0.4s, z-index 0.4s, transform 0.4s, padding 0.4s;
transition-delay: 0.4s, 0.4s, 0s, 0.4s;
${({ isActive }) => isActive && `
transition-delay: 0s, 0.4s, 0.4s, 0s;
bottom: -4.5rem;
z-index: 2;
padding: 0.5rem 2rem 0.5rem;
transform: translateX(-50%) translateY(-3.25rem);
`}
`

const Title = styled.p`
position: absolute;
right: 1rem;
top: 1rem;
font-weight: 500;
font-size: 1rem;
color: rgb(39, 112, 190);
`

interface IDesc{
    isLight:boolean,
}
const Desc = styled.p<IDesc>`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%,-50%);
color: black;
font-weight: 700;
font-size: 3rem;
white-space: nowrap;
${({ theme, isLight }) => {
    const color = isLight ? "light" : "dark";
    return `
    color: ${theme[color].color};
    `
}}
`

const Svg = styled.svg`
position: relative;
width: 13rem;
height: 13rem;
`

const Circle = styled.circle`
width: 100%;
height: 100%;
fill: none;
stroke-width: 10;
stroke: rgba(39, 112, 190, 0.1);
stroke-linecap: round;
`

interface ICircle{
    isActive: boolean,
    value: number,
}
const Circle2 = styled(Circle)<ICircle>`
stroke: rgba(39, 112, 190, 1);
stroke-dasharray: 440px;
stroke-dashoffset: 440px;
transition: all ease 2s;
${({ isActive, value }) => {
    const per = (value > 4.5 ? 4.5 : value) / 4.5 * 100;
    if (isActive)
        return `stroke-dashoffset: calc(440px - (440px * ${per}) / 100);`
}}
`


const EduCard = ({ value, title, children }: { value: number, title: string, children: string }) => {
    const [isActive, setIsActive] = useState<boolean>(false);
    const theme = useAppSelector(selectTheme);
    const focus = useAppSelector(selectFocus);

    return (
        <Div>
            <Card
                onMouseEnter={() => { setIsActive(true) }}
                onMouseLeave={() => { setIsActive(false) }}>
                <Title>
                    {title}
                </Title>
                <Desc isLight={theme}>
                    {value}
                </Desc>
                <Svg>
                    <Circle cx="50%" cy="50%" r="70" />
                    <Circle2 isActive={focus==2} value={value} cx="50%" cy="50%" r="70" />
                </Svg>
            </Card>
            <Light isActive={isActive}>
                {children}
            </Light>
        </Div>
    );
};

export default EduCard;