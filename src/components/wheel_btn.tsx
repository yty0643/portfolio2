import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import { useAppSelector } from '../app/hooks';
import { selectFocus } from '../features/focus/focusSlice';
import { selectTheme } from '../features/theme/themeSlice';

const slide = keyframes`
0%{
    opacity: 0;
    bottom: 2.5rem;
}
25%{
    opacity: 0.7;
    bottom: 1rem;
}
50%{
    opacity: 0.4;
    bottom: 2.5rem;
}
75%{
    opacity: 0.7;
    bottom: 1rem;
}
100%{
    opacity: 0;
    bottom: 2.5rem;
}
`;

interface IBtn{
    isLight: boolean,
}
const Btn = styled.button<IBtn>`
z-index: 2;
position: absolute;
left: 50%;
font-size: 2.5rem;
width: 2.5rem;
height: 2.5rem;
background-color: transparent;
transform: translateX(-50%) scaleX(1.8);
animation: ${slide} 4s infinite ease-in-out;
cursor: pointer;
${({ theme, isLight }) => {
    const color = isLight ? "light" : "dark";
    return `
    color: ${theme[color].color};
    `
}}
opacity: 0.7;
`

const WheelBtn = () => {
    const focus = useAppSelector(selectFocus);
    const theme = useAppSelector(selectTheme);
    const ref = useRef<HTMLButtonElement>(null);
    const onClick = () => {
        const target = ref.current!.parentNode!.nextSibling! as Element;
        target.scrollIntoView({
            behavior: 'smooth',
        });
    };

    return (
        <Btn
            ref={ref}
            isLight={theme}
            onClick={onClick}>
            <FontAwesomeIcon icon={faAngleDown} />
        </Btn>
    );
};

export default WheelBtn;