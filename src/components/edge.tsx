import React from 'react';
import styled, { keyframes } from 'styled-components';
import { useAppSelector } from '../app/hooks';
import { selectScale } from '../features/scale/scaleSlice';

const dash = (scale: number) => keyframes`
to {
    stroke-dashoffset: ${5 * scale * 2};
}
`
interface IPath{
    scale: number,
}
const Path = styled.path<IPath>`
animation: ${({ scale }) => dash(scale)} 500ms linear infinite;
cursor: pointer;
`

interface IProps{
    sx: number,
    sy: number,
    x1: number,
    y1: number,
    x2: number,
    y2: number,
    ex: number,
    ey: number,
    temp?: boolean,
    onClick: () => void,
};

const Edge = ({ sx, sy, x1, y1, x2, y2, ex, ey, temp, onClick }: IProps) => {
    const scale = useAppSelector(selectScale);

    return (
        <Path d={`M${sx} ${sy} C${x1} ${y1} ${x2} ${y2} ${ex} ${ey}`}
            stroke={temp ? "grey" : "blue"}
            strokeWidth="3"
            fill="none"
            markerEnd='url(#)'
            strokeDasharray={5 * scale}
            scale={scale}
            onClick={onClick} />
    );
};

export default Edge;