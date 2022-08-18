import React, { useRef } from 'react';
import styled from 'styled-components';
import { useAppSelector } from '../app/hooks';
import ProjMain from '../components/proj_main';
import ProjSub from '../components/proj_sub';
import { selectFocus } from '../features/focus/focusSlice';
import { selectTheme } from '../features/theme/themeSlice';
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
import video1 from '../videos/receipt.mp4';
import video2 from '../videos/habit.mp4';
import video3 from '../videos/crw.mp4';


interface ISection{
    isLight: boolean,
}
const Section = styled.section<ISection>`
position: relative;
display: flex;
flex-direction: column;
width: 100%;
padding: 0rem 10%;
${({ theme, isLight }) => {
    const color = isLight ? "light" : "dark";
    return `
    background-color: ${theme[color].bgColor2};
    
    `
}}
transition: all ease-in 100ms;
`
const Box = styled.div`
position: relative;
display: flex;
`

const Showcase = () => {
    const theme = useAppSelector(selectTheme);
    const focus = useAppSelector(selectFocus);
    const ref = useRef<HTMLElement>(null);
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
        "React",
        "Typescript",
        "Redux",
        "Axios",
        "AWS-Amplify",
        "REST API",
        "GitHub",
    ];
    const tags2 = [
        "React",
        "Typescript",
        "Firebase",
        "GitHub",
        "VAC Pattern",
        "REST API"
    ];
    const tags3 = [
        "React",
        "Javascript",
        "Firebase",
        "GitHub",
        "REST API"
    ];

    const videos = [video1, video2, video3];

    return (
        <Section
            isLight={theme}
            ref={ref}>
            <Box>
                <ProjMain isActive={focus == 2} video={videos[0]} tags={tags}>
                    금융결제원 API를 활용한 계좌조회 및 거래내역 통계 웹
                </ProjMain>
                <ProjSub isActive={focus == 2} titles={titles} images={images} />
            </Box>
            <Box>
                <ProjSub reverse isActive={focus == 2} titles={titles2} images={images2} />
                <ProjMain reverse isActive={focus == 2} video={videos[1]} tags={tags2}>
                    Firebase DB, Auth를 활용한 습관 관리 웹
                </ProjMain>
            </Box>
            <Box>
                <ProjMain isActive={focus == 2} video={videos[2]} tags={tags3}>
                    GitHub API를 활용한 커밋 예약 웹
                </ProjMain>
                <ProjSub isActive={focus == 2} titles={titles3} images={images3} />
            </Box>
        </Section>
    );
};

export default Showcase;