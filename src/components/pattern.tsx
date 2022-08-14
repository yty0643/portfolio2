import React from 'react';
import styled from 'styled-components';
import { useAppSelector } from '../app/hooks';
import { selectX, selectY } from '../features/coord/coordSlice';
import { selectScale } from '../features/scale/scaleSlice';


const Pattern = ({ }) => {
    const x = useAppSelector(selectX);
    const y = useAppSelector(selectY);
    const scale = useAppSelector(selectScale);
    
    return (
        <svg width="100%" height="100%">
            <pattern id="Pattern" x={x % (15 * scale)} y={y % (15 * scale)} width={15 * scale} height={15 * scale} patternUnits='userSpaceOnUse'>
                <circle cx={0.4 * scale} cy={0.4 * scale} r={0.4 * scale} fill="black" />
            </pattern>
            <rect fill="url(#Pattern)" width="100%" height="100%" />
        </svg>
    );
};

export default Pattern;