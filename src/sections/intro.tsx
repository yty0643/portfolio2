import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Palette from '../components/palette';
import ZoomBtn from '../components/zoom_btn';

const Section = styled.section`
display: flex;
width: 100%;
height: 100vh;
`

const BtnBox = styled.div`
z-index: 1;
position: absolute;
bottom: 0;
left: 0;
display:flex;
flex-direction: column;
padding: 1rem;
`


const Intro = () => {

    return (
        <Section>
            <Palette />
            <BtnBox>
                <ZoomBtn />
                <ZoomBtn minus/>
            </BtnBox>
        </Section>
    );
};

export default Intro;