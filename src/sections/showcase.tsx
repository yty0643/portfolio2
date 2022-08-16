import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useAppSelector } from '../app/hooks';
import ProjMain from '../components/proj_main';
import ProjSub from '../components/proj_sub';
import { selectFocus } from '../features/focus/focusSlice';
import img1 from '../images/project1/img1.png';
import img2 from '../images/project1/img2.png';
import img3 from '../images/project1/img3.png';
import img4 from '../images/project1/img4.png';
import img5 from '../images/project1/img5.png';
import img6 from '../images/project1/img6.png';



const Section = styled.section`
position: relative;
display: flex;
width: 100%;
padding: 0rem 10%;
background-color: rgb(230, 233, 238);
`
const Showcase = () => {
    const ref = useRef<HTMLElement>(null);
    const focus = useAppSelector(selectFocus);
    const images = [img1, img2, img3, img4, img5, img6, img1];
    const titles = [
        "Redux, RTK를 활용한 상태 관리",
        "Axios를 활용한 REST API 사용",
        "AWS-Amplify를 활용한 웹 호스팅",
        "금융결제원 API를 활용한 계좌 조회",
        "Proxy server를 활용한 CORS 정책 문제 해결",
        "라이브러리 없이 다양한 Chart component 개발",
        "GitHub를 통한 소스코드 관리"
    ];
    
    useEffect(() => {
        // const wheel = (e: WheelEvent) => {
        //     const sec = ref.current!;
        //     const y = sec.getBoundingClientRect().y;
        //     if (y >= 0)
        //         e.stopPropagation();
        // };
        // document.addEventListener('wheel', wheel);
        // return () => {
        //     document.removeEventListener('wheel', wheel);
        // }
    }, []);

    return (
        <Section
            ref={ref}>
            <ProjMain isActive={focus == 1} image={images[0]} />
            <ProjSub isActive={focus == 1} titles={titles} images={images} />
        </Section>
    );
};

export default Showcase;