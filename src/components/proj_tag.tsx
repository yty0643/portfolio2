import { darken, lighten } from 'polished';
import React from 'react';
import styled from 'styled-components';
import { useAppSelector } from '../app/hooks';
import { selectTheme } from '../features/theme/themeSlice';

interface IDiv{
    isLight: boolean,
}
const Div = styled.div<IDiv>`
margin: 0 0.5rem 0.5rem 0;
padding: 0.5rem 1rem;
border-radius: 3rem;
font-weight: 500;
font-size 1rem;
box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
:hover{
    transform: translateY(-0.5rem);
}
transition: all ease-in 100ms;

${({ theme, isLight }) => {
    const color = isLight ? "light" : "dark";
    const css = isLight ?
        `:hover{background-color: ${darken(0.1, `${theme[color].bgColor}`)};}`
        :
        `:hover{background-color: ${lighten(0.1, `${theme[color].bgColor}`)};}`
    return css + 
        `
        background-color: ${lighten(0.05, `${theme[color].bgColor}`)};
        color: ${theme[color].color};
        `
}}
`

const ProjTag = ({ children }: { children: string }) => {
    const theme = useAppSelector(selectTheme);
    return (
        <Div isLight={theme}>
            #{children}
        </Div>
    );
};

export default ProjTag;