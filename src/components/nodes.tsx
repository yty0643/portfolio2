import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { selectX, selectY } from '../features/coord/coordSlice';
import { setEdges, setTempEdge } from '../features/edges/edgesSlice';
import { selectNodes } from '../features/nodes/nodesSlice';
import { selectScale } from '../features/scale/scaleSlice';
import Edges from './edges';
import Node from './node';

const Div = styled.div`
z-index: 1;
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
background-color: transparent;
`

const Cover = styled.div`
z-index: 0;
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
`

const Nodes = () => {
    const dispatch = useAppDispatch();
    const x = useAppSelector(selectX);
    const y = useAppSelector(selectY);
    const nodes = useAppSelector(selectNodes);
    const scale = useAppSelector(selectScale);
    const [stIdx, setStIdx] = useState<number>(-1);
    const [endIdx, setEndIdx] = useState<number>(-1);

    const edgeStart = (e: React.MouseEvent, nodeIdx:number, btnIdx: number) => {
        setStIdx(nodeIdx);
    };

    const edgeEnd = (e: React.MouseEvent, nodeIdx:number, btnIdx: number) => {
        setEndIdx(nodeIdx);
    };

    const initStart = () => {
        setStIdx(-1);
    }
    const initEnd = () => {
        setEndIdx(-1);
    }

    useEffect(() => {
        if (stIdx == -1 || endIdx == -1) return; // start-end 연결안된 경우
        if (stIdx == endIdx) return; // 동일노드 연결된 경우
        dispatch(setEdges([stIdx, endIdx]));
        setStIdx(-1);
        setEndIdx(-1);
    }, [stIdx, endIdx]);

    return (
        <Div style={{ transform: `translate(${x}px, ${y}px) scale(${scale})` }}>
            {nodes.map((node, index) =>
                <Node
                    key={index}
                    index={index}
                    initX={node.x}
                    initY={node.y}
                    width={node.width}
                    height={node.height}
                    edgeStart={edgeStart}
                    edgeEnd={edgeEnd}
                    initStart={initStart}
                    initEnd={initEnd}>
                    {node.name}
                </Node>
            )}
            <Edges />
        </Div>
    );
};

export default Nodes;