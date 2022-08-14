import React, { useState } from 'react';
import styled from 'styled-components';
import Tool from './tool';

const Div = styled.div`
z-index: 3;
top: 0;
right: 0;
position: absolute;
display: flex;
flex-direction: column;
width: 8rem;
margin: 3rem;
box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
background-color: translate;
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
background-color: rgb(60, 118, 233);;
`

const Btn = styled.button`
flex: 0 0 auto;
width: 8rem;
height: 2rem;
color: rgb(60, 118, 233);
border: 1px solid rgb(60, 118, 233);
background-color: white;
`

interface ITools{
    isActive: boolean,
}
const Tools = styled.div<ITools>`
overflow-y: scroll;
overflow-x: visible;
height: calc(100vh - 6rem - 6rem);
${({ isActive })=> !isActive && `height: 0rem;`}
::-webkit-scrollbar {
    width: 2px;
}
::-webkit-scrollbar-thumb {
    background-color: rgb(150,150,150);
    border-radius: 2px;
}
::-webkit-scrollbar-track {
    background-color: translate;
}
background-color: white;
transition: all ease-in 300ms;
`

const Toolbar = () => {
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

    return (
        <Div>
            <Title>More tag</Title>
            <Btn onClick={() => { onClick(0) }}>Skill</Btn>
            <Tools isActive={activeArr[0]}>
                <Tool>C++</Tool>
                <Tool>CSS</Tool>
                <Tool>HTML</Tool>
                <Tool>Git</Tool>
            </Tools>
            <Btn onClick={() => { onClick(1) }}>Library</Btn>
            <Tools isActive={activeArr[1]}>
                <Tool>VAC-Pattern</Tool>
                <Tool>styled-component</Tool>
                <Tool>Redux</Tool>
                <Tool>RTK</Tool>
                <Tool>REST API</Tool>
                <Tool>Axios</Tool>
            </Tools>
            <Btn onClick={() => { onClick(2) }}>Cloud</Btn>
            <Tools isActive={activeArr[2]}>
                <Tool>AWS-Amplify</Tool>
                <Tool>Firebase</Tool>
            </Tools>
        </Div>
    );
};

export default Toolbar;