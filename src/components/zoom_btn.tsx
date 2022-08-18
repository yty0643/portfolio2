import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { decrement, increment } from '../features/scale/scaleSlice';
import { selectTheme } from '../features/theme/themeSlice';


interface IBtn{
    isLight: boolean,
}
const Btn = styled.button<IBtn>`
width: 3rem;
height: 3rem;
font-size: 1.5rem;
background-color: white;
${({ theme, isLight }) => {
    const color = isLight ? "light" : "dark";
    return `
    color: ${theme[color].color};
    background-color: ${theme[color].bgColor};
    `
}}
:hover{
    background-color: rgb(214, 216, 221);
}
& + &{
    border-top: 1px solid rgb(214, 216, 221);
}
`

const ZoomBtn = ({ minus }: { minus?: boolean }) => {
    const dispatch = useAppDispatch();
    const theme = useAppSelector(selectTheme);
    const onClick = () => {
        if (minus)
            dispatch(decrement());
        else
            dispatch(increment());
    };

    return (
        <Btn isLight={theme} onClick={onClick}>
            {minus ? <FontAwesomeIcon icon={faMinus} /> : <FontAwesomeIcon icon={faPlus} />}
        </Btn>
    );
};

export default ZoomBtn;