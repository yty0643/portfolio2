import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { popEdges, selectEdges, selecTempEdge, setEdges } from '../features/edges/edgesSlice';
import { selectNodes } from '../features/nodes/nodesSlice';
import Edge from './edge';

const Svg = styled.svg`
overflow: visible;
z-index: 0;
position: absolute;
top: 0;
left: 0;
`


const Edges = () => {
    const dispatch = useAppDispatch();
    const nodes = useAppSelector(selectNodes);
    const edges = useAppSelector(selectEdges);
    const tempEdge = useAppSelector(selecTempEdge);
    const onClick = (index: number) => {
        dispatch(popEdges(index));
    };

    return (
        <Svg width="100%" height="100%">
            {edges.map((edge, index) => {
                const sx = nodes[edge[0]].ipX;
                const sy = nodes[edge[0]].ipY;
                const ex = nodes[edge[1]].opX;
                const ey = nodes[edge[1]].opY;
                let x1 = ex;
                let y1 = sy;
                let x2 = sx;
                let y2 = ey;
                if (sx <= ex) {
                    x1 = sx - 150;
                    x2 = ex + 150;
                }
                return <Edge
                    key={index}
                    sx={sx} sy={sy} x1={x1} y1={y1} x2={x2} y2={y2} ex={ex} ey={ey}
                    onClick={() => onClick(index)} />
            })}
            {tempEdge &&
                <Edge
                
                sx={tempEdge.ipX} sy={tempEdge.ipY} x1={tempEdge.opX} y1={tempEdge.ipY} x2={tempEdge.ipX} y2={tempEdge.opY} ex={tempEdge.opX} ey={tempEdge.opY}
                onClick={() => { }} temp={true} />
            }
        </Svg>
    );
};

export default Edges;