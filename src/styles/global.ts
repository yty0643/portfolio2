import { useAppSelector } from './../app/hooks';
import { createGlobalStyle } from 'styled-components'

interface IGS{
    isDark: boolean;
}

// ${({ theme, isDark }) => {
//     const color = theme.textColor[isDark ? "light" : "dark"];
//     return `
//         color: ${color}
//     `
//     }}

export const GlobalStyle = createGlobalStyle<IGS>`
    *{
        box-sizing: border-box;
    }

    body {
        margin: 0;
        font-family: 'Mulish', sans-serif;
    }
      
    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
        monospace;
    }

    button{
        margin: 0;
        padding: 0;
        border: none;
        outline: none;
        cursor: pointer;
        font-family: 'Mulish', sans-serif;
    }

    input{
        margin: 0;
        padding: 0;
        border: none;
        outline: none;
        background-color: transparent;
        cursor: pointer;
        font-family: 'Mulish', sans-serif;        
    }

    p{
        margin: 0;
        padding: 0;
    }

`
