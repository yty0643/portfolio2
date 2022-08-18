import React, { useEffect, useRef, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import WheelBtn from '../components/wheel_btn';
import { useAppSelector } from '../app/hooks';
import { selectTheme } from '../features/theme/themeSlice';
import WaveBg from '../components/wave_bg';
import logo1 from '../images/donga.png';

interface ISection{
    isLight: boolean,
}
const Section = styled.section<ISection>`
display:flex;
align-items:center;
justify-content: center;
width: 100%;
height: 100vh;
padding: 3rem 10%;
${({ theme, isLight }) => !isLight && `background:;`}
position: relative;
overflow: hidden;
${({ theme, isLight }) => {
    const color = isLight ? "light" : "dark";
    return `
    color: ${theme[color].color};
    `
}}
`

const slide = keyframes`
0%{
    padding-bottom: 0rem;
}
100%{
    padding-bottom: 4rem;
}
`;

const EduIcon = styled.div`
z-index: 1;
position: absolute;
top: 0;
left: 0;
display:flex;
align-items:center;
justify-content:center;
width: 160px;
height: 160px;
white-space: nowrap;
font-size: 1rem;
font-weight: 500;
animation: ${slide} 2s infinite ease-in-out alternate;
& + &{
    margin-left: 5rem;
}
:hover{
    animation-play-state: paused;
}
`
const Img = styled.img`
background-color: rgba(255,255,255,1);
border-radius: 50%;
background-color: rgb(239, 250, 249);
box-shadow: white 3px 3px 6px 0px inset, rgba(0,0,0,0.1) -3px -3px 6px 1px inset,
rgba(0, 0, 0, 0.4) 5px 5px 5px -5px;
`

const Title = styled.div`
z-index:1;
position: relative;
width: 80%;
height: 80%;
font-size: 3rem;
font-weight: 700;
touch-action: none;
pointer-events: none;
`
const Desc = styled.p`
margin-top: 1.5rem;
font-size: 1.5rem;
font-weight: 700;
`

const Edu = () => {
    const theme = useAppSelector(selectTheme);
    const [x, setX] = useState<number>(0);
    const [y, setY] = useState<number>(0);
    const ref = useRef<HTMLDivElement>(null);
    const onMouseDown = (e: React.MouseEvent) => {
        const edu = ref.current!;
        const pageY = edu.parentElement!.offsetTop;
        const sx = e.pageX;
        const sy = e.pageY;
        const move = (e: MouseEvent) => {
            const ex = x + (e.pageX - sx);
            const ey = y + (e.pageY - sy);
            setX(ex);
            setY(ey);
        };
        window.addEventListener('mousemove', move);
        window.onmouseup = () => {
            window.removeEventListener('mousemove', move);
            window.onmouseup = null;
        };
    };

    useEffect(() => {
        const edu = ref.current!;
        setX(window.innerWidth / 2 - edu.offsetWidth / 2);
        setY(window.innerHeight / 2 - edu.offsetHeight / 2);
    }, []);

    return (
        <Section
            isLight={theme}
            style={theme ?
                { background: `radial-gradient(ellipse at ${x + 80}px ${y + 80}px, rgba(255,254,234,1) 0%, rgba(255,254,234,1) 15%, #B7E8EB 50%)` }
                :
                { background: `rgb(24, 24, 27)` }}>
            <EduIcon ref={ref} onMouseDown={onMouseDown} style={{transform: `translate(${x}px, ${y}px)`}}>
                <Img draggable={false} src={logo1} width="100%" alt="" />
            </EduIcon>
            <Title>
                🎓 학력
                <Desc>
                    2015.02 ~ 2017.02 부산경상대학교 스마트앱콘텐츠학과 4.41/4.5<br/>
                    2017.05 ~ 2019.02 23사단 육군 병장 만기 전역<br/>
                    2019.02 ~ 2022.02 동아대학교 컴퓨터공학과 3.3/4.5<br/>
                </Desc>
            </Title>
            <WaveBg />
            <WheelBtn />
        </Section>
    );
};

export default Edu;