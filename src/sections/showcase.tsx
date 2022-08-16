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
import img21 from '../images/project2/img1.png';
import img22 from '../images/project2/img2.png';
import img23 from '../images/project2/img3.png';
import img24 from '../images/project2/img4.png';
import img25 from '../images/project2/img5.png';
import img26 from '../images/project2/img6.png';
import img31 from '../images/project3/img1.png';
import img32 from '../images/project3/img2.png';
import img33 from '../images/project3/img3.png';
import img34 from '../images/project3/img4.png';



const Section = styled.section`
position: relative;
display: flex;
flex-direction: column;
width: 100%;
padding: 0rem 10%;
background-color: rgb(230, 233, 238);
`
const Box = styled.div`
position: relative;
display: flex;
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
    const images2 = [img21, img22, img23, img24, img25, img26];
    const titles2 = [
        "VAC Pattern을 적용한 코드 설계",
        "Firebase를 활용한 로그인 및 회원 관리",
        "Firebase의 RTDB를 활용한 DB 관리",
        "React-Router-dom을 활용한 페이지 분리",
        "라이브러리 없이 다양한 Chart component 개발",
        "Dark/Light theme 구현",
        "GitHub를 통한 소스코드 관리"
    ];
    const images3 = [img31, img32, img33, img34];
    const titles3 = [
        "Firebase를 활용한 DB 및 인증 관리",
        "Github API를 활용한 repository 접근",
        "Github API를 활용한 커밋 등록",
        "GitHub를 통한 소스코드 관리",
    ];

    const tags = [
        {
            title: "React",
            color: "rgb(99, 221, 255)",
        },
        {
            title: "Typescript",
            color: "rgb(72, 136, 225)",
        },
        {
            title: "Redux",
            color: "rgb(120, 79, 123)",
        },
        {
            title: "Axios",
            color: "rgb(81, 78, 131)",
        },
        {
            title: "AWS-Amplify",
            color: "rgb(233, 145, 21)",
        },
        {
            title: "REST API",
            color: "rgb(96, 174, 63)",
        },
        {
            title: "GitHub",
            color: "rgb(8, 29, 74)",
        },
    ];
    const tags2 = [
        {
            title: "React",
            color: "rgb(99, 221, 255)",
        },
        {
            title: "Typescript",
            color: "rgb(72, 136, 225)",
        },
        {
            title: "Firebase",
            color: "rgb(246, 198, 24)",
        },
        {
            title: "GitHub",
            color: "rgb(8, 29, 74)",
        },
        {
            title: "VAC Pattern",
            color: "rgb(76, 84, 87)",
        },
        {
            title: "REST API",
            color: "rgb(96, 174, 63)",
        }
    ];
    const tags3 = [
        {
            title: "React",
            color: "rgb(99, 221, 255)",
        },
        {
            title: "Javascript",
            color: "rgb(247, 223, 43)",
        },
        {
            title: "Firebase",
            color: "rgb(246, 198, 24)",
        },
        {
            title: "GitHub",
            color: "rgb(8, 29, 74)",
        },
        {
            title: "REST API",
            color: "rgb(96, 174, 63)",
        }
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
            <Box>
                <ProjMain isActive={focus == 1} image={images[0]} tags={tags} />
                <ProjSub isActive={focus == 1} titles={titles} images={images} />
            </Box>
            <Box>
                <ProjSub reverse isActive={focus == 1} titles={titles2} images={images2} />
                <ProjMain reverse isActive={focus == 1} image={images[0]} tags={tags2} />
            </Box>
            <Box>
                <ProjMain isActive={focus == 1} image={images[0]} tags={tags3} />
                <ProjSub isActive={focus == 1} titles={titles3} images={images3} />
            </Box>
        </Section>
    );
};

export default Showcase;