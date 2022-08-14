import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Intro from './sections/intro';
import Navbar from './sections/navbar';
import Projects from './sections/projects';
import { GlobalStyle } from './styles/global';
import { theme } from './styles/theme';

const Div = styled.div`
display: flex;
flex-direction: column;
width: calc(100vw - (100vw - 100%));
`

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle isDark={false} />
      <Div>
        <Navbar />
        <Intro />
        <Projects />
      </Div>
    </ThemeProvider>
  );
};

export default App;