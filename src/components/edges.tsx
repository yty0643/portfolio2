import React from 'react';
import styled from 'styled-components';
import { useAppSelector } from '../app/hooks';
import { selectEdges } from '../features/edges/edgesSlice';
import { selectNodes } from '../features/nodes/nodesSlice';

const Svg = styled.svg`
overflow: visible;
z-index: 0;
position: absolute;
top: 0;
left: 0;
`

const Edges = () => {
    const nodes = useAppSelector(selectNodes);
    const edges = useAppSelector(selectEdges);

    return (
        <Svg width="100%" height="100%">
            {edges.map((edge, index) => {
                let sx = nodes[index].x;
                let sy = nodes[index].y;
                let ex = nodes[edge].x;
                let ey = nodes[edge].y;
                let value = 150;
                if (ex - sx < 150)
                    value = 0;
                let ax = ex - value;
                let ay = sy;
                let bx = sx + value;
                let by = ey;
                if (sx >= ex) {
                    ax = sx + 150;
                    bx = ex - 150;
                }
                return <path key={index} d={`M${sx} ${sy} C${ax} ${ay} ${bx} ${by} ${ex} ${ey}`} stroke="blue " strokeWidth="3" fill="none" markerEnd='url(#)' />
            })}
        </Svg>
    );
};

export default Edges;