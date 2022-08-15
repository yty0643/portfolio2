import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useAppSelector } from '../app/hooks';
import LockBtn from '../components/lock_btn';
import Toolbar from '../components/toolbar';
import Palette from '../components/palette';
import ZoomBtn from '../components/zoom_btn';
import { selectIsLock } from '../features/isLock/isLockSlice';
import DocBtn from '../components/doc_btn';
import ContactBtn from '../components/contact_btn';

const Section = styled.section`
position: relative;
display: flex;
width: 100%;
height: 100vh;
`

const BtnBox = styled.div`
z-index: 3;
position: absolute;
bottom: 0;
left: 0;
display:flex;
flex-direction: column;
margin: 1rem;
border: 1px solid rgb(214, 216, 221);
`

interface ILock{
    isLock: boolean,
}
const Lock = styled.div<ILock>`
z-index: 0;
${({ isLock })=>isLock && `z-index: 1;`}
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
`

const Box = styled.div`
z-index: 3;
position: absolute;
top: 50%;
left: 10%;
display: flex;
flex-direction: column;
width: 30%;
transform: translateY(-50%);
-webkit-user-select:none;
-moz-user-select:none;
-ms-user-select:none;
user-select:none;
`

const Title = styled.p`
margin-bottom: 1.5rem;
font-size: 3rem;
font-weight: 700;
color: rgb(16, 16, 17);
@media screen and (max-width: 1000px) {
    font-size: 2rem;
    font-weight: 500;
}
`

const SubTitle = styled.p`
margin-bottom: 1.5rem;
font-size: 1rem;
font-weight: 700;
color: rgb(116, 119, 130);
@media screen and (max-width: 1000px) {
    font-size: 0.8rem;
    font-weight: 300;
}
@media screen and (max-height: 500px) {
    display: none;
}
`
const Btns = styled.div`
display: flex;
align-items: center;
margin-left: auto;
`

const Intro = () => {
    const isLock = useAppSelector(selectIsLock);
    return (
        <Section>
            <Box>
                <Title>
                    안녕하세요.<br/>
                    웹 프론트엔드 개발자 윤태영입니다.
                </Title>
                <SubTitle>
                    주로 사용하는 기술 스택은 Typescript, Javascript, React 입니다.
                    대학을 통해 다양한 언어를 경험 했고, C++을 통해 알고리즘을 공부하고 있습니다.
                    이외에도 실무에서 주로사용하는 라이브러리, 프레임워크 위주로 꾸준히 공부하고 있습니다.
                </SubTitle>
                <Btns>
                    <ContactBtn />
                    <DocBtn />
                </Btns>
            </Box>
            <Palette />
            <BtnBox>
                <LockBtn />
                <ZoomBtn />
                <ZoomBtn minus/>
            </BtnBox>
            <Toolbar />
            <Lock isLock={isLock} />
        </Section>
    );
};

export default Intro;