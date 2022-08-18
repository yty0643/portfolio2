import { faReply } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import styled from 'styled-components';
import { useAppSelector } from '../app/hooks';
import { selectTheme } from '../features/theme/themeSlice';
import Tool from './tool';

const Div = styled.div`
z-index: 2;
top: 0;
right: 0;
position: absolute;
display: flex;
flex-direction: column;
width: 8rem;
margin: 6rem 1rem 0 0;
box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
background-color: translate
`

const Title = styled.p`
display: flex;
align-items: center;
justify-content: center;
width: 8rem;
height: 1rem;
border: 1px solid rgb(60, 118, 233);
font-size: 0.8rem;
font-weight: 300;
color: white;
background-color: rgb(60, 118, 233);
`
interface IBtn{
    isLight: boolean,
}
const Btn = styled.button<IBtn>`
flex: 0 0 auto;
width: 8rem;
height: 2rem;
color: rgb(60, 118, 233);
border: 1px solid rgb(60, 118, 233);
background-color: white;
${({ theme, isLight }) => {
    const color = isLight ? "light" : "dark";
    return `
    background-color: ${theme[color].bgColor};
    color: ${theme[color].color};
    `
}}
`

interface ITools{
    isActive: boolean,
}
const Tools = styled.div<ITools>`
overflow-y: scroll;
overflow-x: visible;
max-height: 10rem;
${({ isActive })=> !isActive && `height: 0rem;`}

::-webkit-scrollbar {
    width: 8px;
}
::-webkit-scrollbar-thumb {
    background-color: rgb(150,150,150);
    border-radius: 8px;
}
::-webkit-scrollbar-track {
    background-color: translate;
}
`

interface IDesc{
    isLight: boolean,
}
const Desc = styled.div<IDesc>`
position: absolute;
bottom: 30%;
left: -80%;
display: flex;
flex-direction: column;
align-items:center;
width: 5rem;
background-color: transparent;
font-weight: 700;
transform: rotate(-10deg);
opacity: 0.3;
${({ theme, isLight }) => {
    const color = isLight ? "light" : "dark";
    return `
    color: ${theme[color].color};
    
    `
}}
`

const Icon = styled.div`
margin-left: 5px;
font-size: 2rem;
transform: rotate(170deg);
`

const Toolbar = () => {
    const theme = useAppSelector(selectTheme);
    const [activeArr, setActiveArr] = useState<boolean[]>([false,false,false]);

    const onClick = (index: number) => {
        setActiveArr(prev => {
            const temp = prev.map((value, idx) => {
                if (index == idx)
                    return !value;
                else
                    return false;
            });
            return temp;
        });
    }; 

    const onWheel = (e: React.WheelEvent) => {
        e.stopPropagation();
    };

    return (
        <Div onWheel={onWheel}>
            <Title>More tag</Title>
            <Btn isLight={theme} onClick={() => { onClick(0) }}>Skill</Btn>
            <Tools isActive={activeArr[0]}>
                <Tool>C++</Tool>
                <Tool>CSS</Tool>
                <Tool>HTML</Tool>
                <Tool>Git</Tool>
            </Tools>
            <Btn isLight={theme} onClick={() => { onClick(1) }}>Library</Btn>
            <Tools isActive={activeArr[1]}>
                <Tool>VAC-Pattern</Tool>
                <Tool>styled-component</Tool>
                <Tool>Redux</Tool>
                <Tool>RTK</Tool>
                <Tool>REST API</Tool>
                <Tool>Axios</Tool>
            </Tools>
            <Btn isLight={theme} onClick={() => { onClick(2) }}>Cloud</Btn>
            <Tools isActive={activeArr[2]}>
                <Tool>AWS-Amplify</Tool>
                <Tool>Firebase</Tool>
            </Tools>

            <Desc isLight={theme}>
                Click and Open / Drag and Drop
                <Icon>
                    <FontAwesomeIcon icon={faReply} />
                </Icon>
            </Desc>
        </Div>
    );
};

export default Toolbar;