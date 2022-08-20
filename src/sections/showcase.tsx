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
interface IBox{
    reverse: boolean,
}
const Box = styled.div<IBox>`
position: relative;
display: flex;
${({ reverse })=> reverse && `flex-direction: row-reverse;`}
@media screen and (max-width: 1000px) {
    flex-direction: column;
}
`

const Showcase = () => {
    const theme = useAppSelector(selectTheme);
    const focus = useAppSelector(selectFocus);
    const ref = useRef<HTMLElement>(null);

    const imageArr = [[img1, img2, img3, img4, img5, img6, img1],
        [img21, img22, img23, img24, img25, img26],
        [img31, img32, img33, img34]];
    const titleArr = [["Redux, RTK를 활용한 상태 관리",
        "Axios를 활용한 REST API 사용",
        "AWS-Amplify를 활용한 웹 호스팅",
        "금융결제원 API를 활용한 계좌 조회",
        "Proxy server를 활용한 CORS 정책 문제 해결",
        "라이브러리 없이 다양한 Chart component 개발",
        "GitHub를 통한 소스코드 관리"
    ], [
        "VAC Pattern을 적용한 코드 설계",
        "Firebase를 활용한 로그인 및 회원 관리",
        "Firebase의 RTDB를 활용한 DB 관리",
        "React-Router-dom을 활용한 페이지 분리",
        "라이브러리 없이 다양한 Chart component 개발",
        "Dark/Light theme 구현",
        "GitHub를 통한 소스코드 관리"
    ], [
        "Firebase를 활용한 DB 및 인증 관리",
        "Github API를 활용한 repository 접근",
        "Github API를 활용한 커밋 등록",
        "GitHub를 통한 소스코드 관리",
    ]];

    const tagArr = [[
        "React",
        "Typescript",
        "Redux",
        "Axios",
        "AWS-Amplify",
        "REST API",
        "GitHub",
    ], [
        "React",
        "Typescript",
        "Firebase",
        "GitHub",
        "VAC Pattern",
        "REST API"
    ], [
        "React",
        "Javascript",
        "Firebase",
        "GitHub",
        "REST API"
    ]];
    const descArr = [
        "금융결제원 API를 활용한 계좌조회 및 거래내역 통계 웹",
        "Firebase DB, Auth를 활용한 습관 관리 웹",
        "GitHub API를 활용한 커밋 예약 웹"
    ];
    const videos = [video1, video2, video3];
    const urls = ['https://github.com/yty0643/smart-receipt', 'https://github.com/yty0643/habit-manager', 'https://github.com/yty0643/crw'];
    return (
        <Section
            isLight={theme}
            ref={ref}>
            {imageArr.map((images, index) =>
                <Box  key={index} reverse={index == 1}>
                    <ProjMain isActive={focus == 3} video={videos[index]} tags={tagArr[index]} url={urls[index]}>
                        {descArr[index]}
                    </ProjMain>
                    <ProjSub isActive={focus == 3} titles={titleArr[index]} images={images} />
                </Box>
            )}
        </Section>
    );
};

export default Showcase;