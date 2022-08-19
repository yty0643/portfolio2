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
height 70vh;
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
height: 100%;
flex-direction: column;
align-items:center;
justify-content: center;
background-color: rgb(42, 45, 50);
`

const Title = styled.p`
margin-bottom: 1.5rem;
font-size: 2rem;
font-weight: 700;
color: rgb(157, 161, 173);
`
const Desc = styled.p`
margin-bottom: 1.5rem;
font-size: 1rem;
font-weight: 700;
color: rgb(157, 161, 173);
`

const InfoBox = styled.div`
width: auto;
margin-left:auto;
`
const Cate = styled.div`
display:flex;
`
const Info = styled.p`
font-size: 1rem;
font-weight: 700;
color: rgb(157, 161, 173);
`
const Info2 = styled(Info)`
margin-left: auto;
padding-left: 1rem;
`


const Outro = () => {
    const theme = useAppSelector(selectTheme);
    return (
        <Section isLight={theme}>
            <Dev />
            <Box>
                <Title>Contact me</Title>
                <Desc>
                    유지 보수하기 좋은 코드, 확장성 있는 설계가 가능한 개발자로 성장하고 싶습니다.
                    초기에 설계방식을 충분히 고려하지 않으면 여러 사이드 이펙트가 발생하고,
                    확장시 많은 비용이 든다는 것을 경험하였습니다. 작게는 변수의 이름부터 코드 중복,
                    크게는 디자인 패턴 등 확장성 있는 개발에 신경 쓰고 있습니다.
                </Desc>
                <InfoBox>
                    <Cate><Info>Tel :</Info><Info2>010-3773-0967</Info2></Cate>
                    <Cate><Info>Place :</Info><Info2>경남 창원시 진해구</Info2></Cate>
                    <Cate><Info>GitHub :</Info><Info2>https://github.com/yty0643</Info2></Cate>
                </InfoBox>
            </Box>
        </Section>
    );
};

export default Outro;