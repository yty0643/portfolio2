import React, { useEffect, useRef, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import WheelBtn from '../components/wheel_btn';
import { useAppSelector } from '../app/hooks';
import { selectTheme } from '../features/theme/themeSlice';
import WaveBg from '../components/wave_bg';
import logo1 from '../images/donga.png';
import EduCard from '../components/edu_card';

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
position: relative;
overflow: hidden;
${({ theme, isLight }) => {
    const bgColor = isLight ? "dark" : "light";
    const color = isLight ? "dark" : "dark";
    return `
    background-color: ${theme[bgColor].color};
    color: ${theme[color].color};
    `
}}
`

const Edu = () => {
    const theme = useAppSelector(selectTheme);

    return (
        <Section
            isLight={theme}>
            <EduCard value={4.41}>부산경상대학교</EduCard>
            <EduCard value={631}>육군 병장</EduCard>
            <EduCard value={3.3}>동아대학교</EduCard>
            <WaveBg />
            <WheelBtn />
        </Section>
    );
};

export default Edu;