import React from 'react';
import styled from 'styled-components';
import ProjPreview from './proj_preview';

interface IDiv{
    isActive: boolean,
}
const Div = styled.div<IDiv>`
flex: 1 1 35%;
display: flex;
flex-direction: column;
height: 100%;
padding: 3rem 0;
${({ isActive }) => isActive ?
    `
    opacity: 1;
    transform: translateX(0rem);
    `
    :
    `
    opacity: 0;
    transform: translateX(10rem);
    `
}
transition: all ease-in 800ms;
::-webkit-scrollbar {
    width: 5px;
}
::-webkit-scrollbar-thumb {
    background-color: rgb(150,150,150);
    border-radius: 5px;
}
::-webkit-scrollbar-track {
    background-color: translate;
}
`

const ProjSub = ({ isActive, titles, images }: { isActive: boolean, titles: string[], images: string[] }) => {
    return (
        <Div isActive={isActive}>
            {titles.map((title, index) =>
                <ProjPreview
                    key={index}
                    img={images[index]}>
                    {title}
                </ProjPreview>
            )}
        </Div>
    );
};

export default ProjSub;