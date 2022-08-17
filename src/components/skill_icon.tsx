import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 5rem;
height: 5rem;
border-radius: 0.5rem;
background-color: rgb(232, 243, 255);
box-shadow: white 3px 3px 6px 0px inset, rgba(0,0,0,0.1) -3px -3px 6px 1px inset,
rgba(0, 0, 0, 0.4) 5px 5px 5px -5px;


& + &{
    margin-left: 1rem;
}
`

const Img = styled.img`
`

const SkillIcon = ({ icon }: { icon: string }) => {
    return (
        <Div>
            <Img src={icon} width="70%" height="70%" alt="" /> 
        </Div>
    );
};

export default SkillIcon;