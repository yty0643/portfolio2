import React from 'react';
import styled, { keyframes } from 'styled-components';
import { useAppSelector } from '../app/hooks';
import { selectTheme } from '../features/theme/themeSlice';
import bg from '../images/wave.svg';
import bg2 from '../images/wave2.svg';

const wave = keyframes`
0% {
    margin-left: 0px;
}
100% {
    margin-left: -1600px;
}
`
const swell = keyframes`
0%, 100% {
    transform: translate3d(0,-25px,0);
}
50% {
    transform: translate3d(0,5px,0);
}`


interface IOcean{
    isLight: boolean,
}
const Ocean = styled.div<IOcean>`
height: 5%;
width:100%;
position:absolute;
bottom:0;
left:0;
${({ isLight })=> isLight? `background: rgb(230, 233, 238);`: `background: rgb(24, 24, 27);`}
`

interface IWave{
    isLight: boolean,
}
const Wave = styled.div<IWave>`
${({ isLight }) => isLight ?
    `background: url(${bg}) repeat-x; `
    :
    `background: url(${bg2}) repeat-x; `
}

position: absolute;
top: -198px;
width: 6400px;
height: 198px;
animation: ${wave} 7s cubic-bezier( 0.36, 0.45, 0.63, 0.53) infinite;
transform: translate3d(0, 0, 0);
`
const Wave2 = styled(Wave)<IWave>`
top: -175px;
animation: ${wave} 7s cubic-bezier( 0.36, 0.45, 0.63, 0.53) -.125s infinite, ${swell} 7s ease -1.25s infinite;
opacity: 1;
`

const WaveBg = () => {
    const theme = useAppSelector(selectTheme);
    return (
        <Ocean isLight={theme}>
            <Wave isLight={theme} />
            <Wave2 isLight={theme} />
        </Ocean>
    );
};

export default WaveBg;