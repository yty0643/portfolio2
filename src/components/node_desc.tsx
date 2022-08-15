import React from 'react';
import styled from 'styled-components';
import { faArrowsLeftRight, faReply, faShare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface IDesc{
    top: number,
    left: number,
    rotate: number,
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
font-weight: 700;
color: rgb(29, 30, 33);
opacity: 0.3;
touch-action: none;
pointer-events: none;
`

interface IIcon{
    rotate:number,
}
const Icon = styled.div<IIcon>`
margin-left: 5px;
font-size: 2rem;
${({ rotate }) => `
transform: rotate(${rotate}deg);
`}
`

const NodeDesc = () => {
    return (
        <div>
            <Desc top={-400} left={0} rotate={0}>
                Move Palette!
                <Icon rotate={0}>
                    <FontAwesomeIcon icon={faArrowsLeftRight} />
                </Icon>
            </Desc>
            <Desc top={-100} left={-35} rotate={-10}>
                Drag and Drop!
                <Icon rotate={90}>
                    <FontAwesomeIcon icon={faShare} />
                </Icon>
            </Desc>
            <Desc top={100} left={70} rotate={-20}>
                Add Edge!
                <Icon rotate={70}>
                    <FontAwesomeIcon icon={faReply} />
                </Icon>
            </Desc>
            <Desc top={-90} left={90} rotate={10}>
                Delete Edge!
                <Icon rotate={0}>
                    <FontAwesomeIcon icon={faShare} />
                </Icon>
            </Desc>
            
        </div>
    );
};

export default NodeDesc;