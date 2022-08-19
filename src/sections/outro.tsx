import React from 'react';
import styled from 'styled-components';
import { useAppSelector } from '../app/hooks';
import Dev from '../components/dev';
import { selectTheme } from '../features/theme/themeSlice';

interface ISections{
    isLight: boolean,
}
const Section = styled.section<ISections>`
display:flex;
flex-direction: column;
align-items:center;
justify-content: center;
width: 100%;
transition: all ease-in 100ms;
${({ theme, isLight }) => {
    const color = isLight ? "light" : "dark";
    return `
    background-color: ${theme[color].bgColor2};
    `
}}
`
const Box = styled.div`
display:flex;
flex-direction: column;
align-items: flex-start;
justify-content: center;
background-color: rgb(42, 45, 50);
width: 100%;
padding: 3rem 20%;
color: grey;
`

const Info = styled.p`
color: rgb(180, 183, 188);
padding: 5px 0;
`

const Outro = () => {
    const theme = useAppSelector(selectTheme);
    return (
        <Section isLight={theme}>
            <Dev />
            <Box>
                <Info>
                    유지 보수하기 좋은 코드, 확장성 있는 설계가 가능한 개발자로 성장하고 싶습니다.<br/>
                    초기에 설계방식을 충분히 고려하지 않으면 여러 사이드 이펙트가 발생하고,
                    확장시 많은 비용이 든다는 것을 경험하였습니다.<br/>
                    작게는 변수의 이름부터 코드 중복,
                    크게는 디자인 패턴이나 적절한 라이브러리 사용으로 확장성 있는 개발에 신경 쓰고 있습니다.<br/><br/>
                </Info>
                <Info>연락처 : 010-3773-0967 </Info>
                <Info>거주지 : 경남 창원시 진해구</Info>
                <Info>E-mail : yty0643@naver.com</Info>
                <Info>GitHub : https://github.com/yty0643</Info>
            </Box>
        </Section>
    );
}; 

export default Outro;