import { faCode } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { lighten } from 'polished';
import React from 'react';
import styled from 'styled-components';

const Btn = styled.button`
display: flex;
align-items: center;
justify-content: center;
height: 3rem;
padding: 0 1rem;

border-radius: 3rem;
background-color: rgb(60, 118, 233);
font-weight: 600;
color: white;
font-size: 1rem;
:hover{
    background-color: ${lighten(0.1,`rgb(60, 118, 233)`)};
}
`

const Icon = styled.div`
width: 1rem;
height: 1rem;
margin-right: 1rem;
line-height: 1rem;
`

const DocBtn = () => {

    const onClick = () => {
        window.open( "https://github.com/yty0643", "_blank");
    }

    return (
        <Btn onClick={onClick}>
            <Icon>
                <FontAwesomeIcon icon={faCode} />
            </Icon>
            Documentation
        </Btn>
    );
};

export default DocBtn;