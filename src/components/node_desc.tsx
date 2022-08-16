import React from 'react';
import styled from 'styled-components';
import { faArrowsLeftRight, faReply, faShare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useAppSelector } from '../app/hooks';
import { selectTheme } from '../features/theme/themeSlice';

interface IDesc{
    top: number,
    left: number,
    rotate: number,
    isLight: boolean,
}

const Desc = styled.div<IDesc>`
position: absolute;
${({ top, left, rotate }) => `
top: ${top}%;
left: ${left}%;
transform: rotate(${rotate}deg);
`}
display: flex;
align-items:center;
width: 5rem;
background-color: transparent;
font-size: 0.8rem;
font-weight: 700;
${({ theme, isLight }) => {
    const color = isLight ? "light" : "dark";
    return `
    color: ${theme[color].color};
    
    `
}}
opacity: 0.3;
touch-action: none;
pointer-events: none;
`

interface IIcon{
    rotate:number,
}
const Icon = styled.div<IIcon>`
margin-left: 5px;
font-size: 1.5rem;
${({ rotate }) => `
transform: rotate(${rotate}deg);
`}
`

const NodeDesc = () => {
    const theme = useAppSelector(selectTheme);
    return (
        <div>
            <Desc isLight={theme} top={-400} left={0} rotate={0}>
                Move Palette!
                <Icon rotate={0}>
                    <FontAwesomeIcon icon={faArrowsLeftRight} />
                </Icon>
            </Desc>
            <Desc isLight={theme} top={-100} left={-35} rotate={-10}>
                Drag and Drop!
                <Icon rotate={90}>
                    <FontAwesomeIcon icon={faShare} />
                </Icon>
            </Desc>
            <Desc isLight={theme} top={100} left={70} rotate={-20}>
                Add Edge!
                <Icon rotate={70}>
                    <FontAwesomeIcon icon={faReply} />
                </Icon>
            </Desc>
            <Desc isLight={theme} top={-90} left={90} rotate={10}>
                Delete Edge!
                <Icon rotate={0}>
                    <FontAwesomeIcon icon={faShare} />
                </Icon>
            </Desc>
            
        </div>
    );
};

export default NodeDesc;