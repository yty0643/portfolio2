import { darken, lighten } from 'polished';
import React, { useState } from 'react';
import styled from 'styled-components';
import { useAppSelector } from '../app/hooks';
import { selectTheme } from '../features/theme/themeSlice';


const Div = styled.div`
position: relative;
background-color: transparent;
transform-styld: preserve-3d;
transform: rotate(-25deg) skew(25deg);
& + &{
    margin-left: 4rem;
}
`

interface IImg{
    isLight: boolean,
    isActive: boolean,
}
const Img = styled.div<IImg>`
display:flex;
justify-content: center;
align-items: center;
width: 3rem;
height: 3rem;
${({ isLight })=>isLight?`background-color: white;`:`background-color: rgb(48, 51, 57);`}

transition: all ease 200ms;
${({ isActive })=>isActive && `transform: translate(2rem, -2rem); background-color: rgb(60, 118, 233);`}
}

::after{
    content: '';
    position: absolute;
    top: 0;
    left: -9px;
    width: 9px;
    height: 100%;
    ${({ isLight }) => isLight ?
    `background-color: ${darken(0.15, "white")};`
    :
    `background-color: ${darken(0.1, "rgb(48, 51, 57)")};`
    }
    transform-origin: right;
    transform: skewY(-47deg);
    transition: all ease 200ms;
    ${({ isActive })=>isActive && `background-color: ${darken(0.15, "rgb(60, 118, 233)")};`}
}
::before{
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 100%;
    height: 10px;
    ${({ isLight }) => isLight ?
    `background-color: ${darken(0.3, "white")};`
    :
    `background-color: ${darken(0.15, "rgb(48, 51, 57)")};`
    }
    transform-origin: top;
    transform: skewX(-43deg);
    transition: all ease 200ms;
    ${({ isActive })=>isActive && `background-color: ${darken(0.3, "rgb(60, 118, 233)")};`}
}
opacity: 1;
`

interface I{
    isActive: boolean,
}
const Shadow = styled.div<I>`
position: absolute;
z-index: -1;
top: 50%;
left: 50%;
width: 0px;
height: 0px;
box-shadow: -10px 12px 5px 25px rgba(0,0,0,0.5);
transition: all ease 200ms;
${({ isActive }) => isActive && `
box-shadow: -10px 12px 10px 15px rgba(0,0,0,0.5);
`}
`

const DevTool = ({ tool }: { tool: string }) => {
    const [isActive, setIsActive] = useState<boolean>(false);
    const theme = useAppSelector(selectTheme);

    return (
        <Div
            onMouseEnter={() => { setIsActive(true) }}
            onMouseLeave={() => { setIsActive(false) }}>
            <Shadow isActive={isActive} />
            <Img isLight={theme} isActive={isActive}>
                <img src={tool} width="70%" alt="" />
            </Img>
        </Div>
    );
};

export default DevTool;