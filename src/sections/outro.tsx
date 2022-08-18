import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
display:flex;
align-items:center;
justify-content: center;
width: 100%;
height 50vh;
min-height: 25rem;
padding: 0 10%;
background-color: rgb(34, 34, 47);
@media screen and (max-height: 600px) {
    flex-direction: column;
}
@media screen and (max-width: 1000px) {
    flex-direction: column;
    height auto;
    padding: 3rem 10%;
}
`

const Box = styled.div`
flex: 1 1 40%;
display:flex;
flex-direction: column;
align-items:center;
justify-content: center;
`
const Box2 = styled(Box)`
flex: 1 1 60%;
`

const Title = styled.p`
margin-bottom: 1.5rem;
font-size: 2rem;
font-weight: 700;
color: rgb(157, 161, 173);
@media screen and (max-width: 1200px) {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
}
`
const Desc = styled.p`
margin-bottom: 1.5rem;
font-size: 1rem;
font-weight: 700;
color: rgb(157, 161, 173);
@media screen and (max-width: 1200px) {
    font-size: 0.8rem;
    margin-bottom: 0.5rem;
}
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


const Tags = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-wrap: wrap;
margin: 1rem 0 0 1rem;
`

const Tag = styled.div`
display:flex;
align-items: center;
justify-content: center;
width: 10rem;
height: 4rem;
margin: 0 1rem 1rem 0;
padding: 1rem 3rem;
border-radius: 10px;
background-color: rgb(15, 15, 21);
font-size: 1rem;
font-weight: 700;
color: rgb(91, 91, 124);
@media screen and (max-width: 1200px) {
    width: 8rem;
    height: 3rem;
    font-size: 0.8rem;
}
`

const Outro = () => {
    return (
        <Section>
            <Box>
                <Title>Developed by</Title>
                <Tags>
                    <Tag>React</Tag>
                    <Tag>Typescript</Tag>
                    <Tag>Redux</Tag>
                    <Tag>styled component</Tag>
                </Tags>
            </Box>
            <Box2>
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
            </Box2>
        </Section>
    );
};

export default Outro;