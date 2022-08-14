import React, { useRef, useState } from 'react';
import styled from 'styled-components';

const Btn = styled.button`
z-index: 1;
background-color: white;
text-align: start;
width: 100%;
height: 3rem;
padding-left: 0.5rem;
font-size: 0.8rem;
font-weight: 500;
:hover{
    background-color: rgb(230, 233, 238);
}
:active{
    background-color: rgb(200, 203, 208);
}
& + &{
    border-top: 0.5px solid rgb(200,200,200);
}
`

const Tool = ({ children }: { children: string }) => {
    const [x, setX] = useState<number>(0);
    const [y, setY] = useState<number>(0);
    const ref = useRef<HTMLButtonElement>(null);

    const onMouseDown = (event: React.MouseEvent) => {
        event.stopPropagation();
        const btn = ref.current!;
        btn.style.position = "absolute";
        const sx = event.pageX;
        const sy = event.pageY;
        const move = (e:MouseEvent) => {
            const ex = x + (e.pageX - sx);
            const ey = y + (e.pageY - sy);
            setX(ex);
            setY(ey);
        };
        window.addEventListener('mousemove', move);
        window.onmouseup = () => {
            window.removeEventListener('mousemove', move);
            btn.style.position = "static";
            setX(0);
            setY(0);
            window.onmouseup = null;
        };
    };
    
    return (
        <Btn ref={ref}
            onMouseDown={onMouseDown} style={{
                transform: `translate(${x}px, ${y}px)`
            }}>
            {children}
        </Btn>
    );
};

export default Tool;