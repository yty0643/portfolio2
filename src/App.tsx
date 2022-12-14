import React, { useEffect, useRef } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { useAppDispatch } from './app/hooks';
import { setFocus } from './features/focus/focusSlice';
import Edu from './sections/edu';
import Intro from './sections/intro';
import Navbar from './sections/navbar';
import Outro from './sections/outro';
import Showcase from './sections/showcase';
import Skills from './sections/skills';
import { GlobalStyle } from './styles/global';
import { theme } from './styles/theme';

const Div = styled.div`
display: flex;
flex-direction: column;
width: calc(100vw - (100vw - 100%));
`

const App = () => {
  const dispatch = useAppDispatch();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const secCnt = 5;
    const sections = ref.current!.children;
    const observer = new IntersectionObserver((ev) => {
      let isfined = false;
      ev.forEach((e: IntersectionObserverEntry, index) => {
        if (e.isIntersecting) {
          for (let i = 0; i < secCnt; i++) {
            if (e.target == sections[i + 1]) {
              dispatch(setFocus(i));
              isfined = true;
            }
          }
        }
      });
      if (!isfined) dispatch(setFocus(3)); // projects Section
    }, {
      root: document,
      rootMargin: '0px',
      threshold: 0.5,
    });

    for (let i = 0; i < secCnt; i++) {
      if (i == 3) continue; // projects Section
      observer.observe(sections[i + 1]);
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle isDark={false} />
      <Div ref={ref}>
        <Navbar />
        <Intro />
        <Skills />
        <Edu />
        <Showcase />
        <Outro />
      </Div>
    </ThemeProvider>
  );
};

export default App;