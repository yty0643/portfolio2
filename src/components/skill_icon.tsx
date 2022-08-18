import React from 'react';
import styled from 'styled-components';


interface IDiv{
    content: string,
}
const Div = styled.div<IDiv>`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
:hover{
    ::after{
        opacity: 1;
    }
}
::after{
    display: flex;
    justify-content: center;
    width: 1rem;
    opacity: 0;
    color: rgb(124, 124, 127);
    font-size: 0.8rem;
    font-weight: 700;
    ${({ content })=>`content: "${content}";`}
    margin-top: 5px;
    margin-right: 1rem;
    white-space: nowrap;
}
`
const Icon = styled.div`
position: relative;
overflow: hidden;
display: flex;
align-items: center;
justify-content: center;
width: 5rem;
height: 5rem;
border-radius: 0.5rem;
background-color: rgb(232, 243, 255);
box-shadow: white 3px 3px 6px 0px inset, rgba(0,0,0,0.1) -3px -3px 6px 1px inset,
rgba(0, 0, 0, 0.4) 5px 5px 5px -5px;

:hover{
    transform: scale(1.1);
}
margin-right: 1rem;
`

const Img = styled.img`
position: absolute;
border-radius: 0.5rem;
`

const Effect = styled.div`
transform: rotateZ(-20deg)
`

const E1 = styled.div`
width: 10rem;
height: 5rem;
background-color: white;
opacity: 0.3;
`
const E2 = styled(E1)`
background-color: grey;
opacity: 0.05;
`

const SkillIcon = ({ icon, children }: { icon: string, children: string }) => {
    return (
        <Div content={children}>
            <Icon>
                <Img src={icon} width="70%" alt="" />
                <Effect>
                    <E1 />
                    <E2 />
                </Effect>
            </Icon>
        </Div>
    );
};

export default SkillIcon;