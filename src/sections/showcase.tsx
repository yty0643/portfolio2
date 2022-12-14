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
    const titleArr = [["Redux, RTK??? ????????? ?????? ??????",
        "Axios??? ????????? REST API ??????",
        "AWS-Amplify??? ????????? ??? ?????????",
        "??????????????? API??? ????????? ?????? ??????",
        "Proxy server??? ????????? CORS ?????? ?????? ??????",
        "??????????????? ?????? ????????? Chart component ??????",
        "GitHub??? ?????? ???????????? ??????"
    ], [
        "VAC Pattern??? ????????? ?????? ??????",
        "Firebase??? ????????? ????????? ??? ?????? ??????",
        "Firebase??? RTDB??? ????????? DB ??????",
        "React-Router-dom??? ????????? ????????? ??????",
        "??????????????? ?????? ????????? Chart component ??????",
        "Dark/Light theme ??????",
        "GitHub??? ?????? ???????????? ??????"
    ], [
        "Firebase??? ????????? DB ??? ?????? ??????",
        "Github API??? ????????? repository ??????",
        "Github API??? ????????? ?????? ??????",
        "GitHub??? ?????? ???????????? ??????",
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
        "??????????????? API??? ????????? ???????????? ??? ???????????? ?????? ???",
        "Firebase DB, Auth??? ????????? ?????? ?????? ???",
        "GitHub API??? ????????? ?????? ?????? ???"
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