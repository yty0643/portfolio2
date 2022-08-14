import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useAppSelector } from '../app/hooks';
import LockBtn from '../components/lock_btn';
import Palette from '../components/palette';
import ZoomBtn from '../components/zoom_btn';
import { selectIsLock } from '../features/isLock/isLockSlice';

const Section = styled.section`
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
padding: 1rem;
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

const Intro = () => {
    const isLock = useAppSelector(selectIsLock);
    return (
        <Section>
            <Palette />
            <BtnBox>
                <LockBtn />
                <ZoomBtn />
                <ZoomBtn minus/>
            </BtnBox>
            <Lock isLock={isLock} />
        </Section>
    );
};

export default Intro;