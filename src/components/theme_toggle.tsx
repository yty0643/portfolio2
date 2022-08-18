import { faLightbulb } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { selectTheme, toggle } from '../features/theme/themeSlice';


interface IBtn{
    isLight: boolean,
}
const Btn = styled.button<IBtn>`
font-size: 1.5rem;
width: 2.5rem;
height: 2.5rem;
${({ isLight }) => isLight ?
    `color: rgb(255, 222, 37);`
    :
    `color: white;`
}
border-radius: 50%;
background-color: transparent;
:hover{
    background-color: rgb(230, 233, 238);
}
:active{
    color: white;
    background-color: rgb(60, 118, 233);
}
@media screen and (max-width: 900px) {
    width: 2rem;
    height: 2rem;
    font-size: 1.5rem;
    padding: 2px 0;
    margin-left: 1rem;
}
`

const ThemeToggle = () => {
    const theme = useAppSelector(selectTheme);
    const dispatch = useAppDispatch();

    const onClick = () => {
        dispatch(toggle());
    };

    return (
        <Btn
            isLight={theme}
            onClick={onClick}>
            <FontAwesomeIcon icon={faLightbulb} />
        </Btn>
    );
};

export default ThemeToggle;