import React, { useEffect, useRef } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { useAppDispatch, useAppSelector } from './app/hooks';
import { selectFocus, setFocus } from './features/focus/focusSlice';
import Intro from './sections/intro';
import Navbar from './sections/navbar';
import Outro from './sections/outro';
import Projects from './sections/projects';
import { GlobalStyle } from './styles/global';
import { theme } from './styles/theme';

const Div = styled.div`
display: flex;
flex-direction: column;
width: calc(100vw - (100vw - 100%));
`

const App = () => {
  const focus = useAppSelector(selectFocus);
  const dispatch = useAppDispatch();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const div = ref.current!;
    let cmpY = -10;
    for (let i = 1; i < 4; i++) {
      const height = div.children[i].scrollHeight;
      const y = window.scrollY;
      if (y >= cmpY && y <= cmpY + height) {
        dispatch(setFocus(i));
        break;
      }
      cmpY += height;
    };
  }, []);

  useEffect(() => {
    const div = ref.current!;
    let isActive: (NodeJS.Timeout | null) = null;
    let idx = focus;
    const wheel = (e: WheelEvent) => {
      e.preventDefault();
      if (isActive) return;
      isActive = setTimeout(() => {
        isActive = null;
      }, 500);
      if (e.deltaY < 0) {
        if (idx > 1) idx--;
      } else {
        if (idx < 3) idx++;
      }
      dispatch(setFocus(idx));
      div.children[idx].scrollIntoView({
        behavior: 'smooth'
      });
    };
    document.addEventListener('wheel', wheel, { passive: false });
    return () => {
      document.removeEventListener('wheel', wheel);
    }
  }, [focus]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle isDark={false} />
      <Div ref={ref}>
        <Navbar />
        <Intro />
        <Projects />
        <Outro />
      </Div>
    </ThemeProvider>
  );
};

export default App;