import React, { useEffect, useRef } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { useAppDispatch, useAppSelector } from './app/hooks';
import { selectFocus, setFocus } from './features/focus/focusSlice';
import Intro from './sections/intro';
import Navbar from './sections/navbar';
import Outro from './sections/outro';
import Showcase from './sections/showcase';
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
    const secCnt = 3;
    const sections = ref.current!.children;
    const observer = new IntersectionObserver((ev) => {
      let isfined = false;
      ev.forEach((e: IntersectionObserverEntry, index) => {
        if (e.isIntersecting) {
          for (let i = 0; i < secCnt; i++){
            if (e.target == sections[i + 1]) {
              dispatch(setFocus(i));
              isfined = true;
            }
          }
        }
      });
      if (!isfined) dispatch(setFocus(1)); // projects Section
    }, {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    });

    for (let i = 0; i < secCnt; i++) {
      if (i == 1) continue; // projects Section
      observer.observe(sections[i+1]);
    }   
  }, []);

  useEffect(() => {
    const sections = ref.current!.children;
    let isActive: (NodeJS.Timeout | null) = null;
    let idx = focus;
    const wheel = (e: WheelEvent) => {
      e.preventDefault();
      if (isActive) return;
      isActive = setTimeout(() => {
        isActive = null;
      }, 500);
      if (e.deltaY < 0) {
        if (idx > 0) idx--;
      } else {
        if (idx < 2) idx++;
      }
      dispatch(setFocus(idx));
      sections[idx + 1].scrollIntoView({
        behavior: 'smooth'
      });
    };
    if (focus != 1) {
      window.addEventListener('wheel', wheel, { passive: false });
    }
    return () => {
      window.removeEventListener('wheel', wheel);
    }
  }, [focus]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle isDark={false} />
      <Div ref={ref}>
        <Navbar />
        <Intro />
        <Showcase />
        <Outro />
      </Div>
    </ThemeProvider>
  );
};

export default App;