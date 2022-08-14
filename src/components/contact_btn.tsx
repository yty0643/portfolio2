import { faArrowLeftLong, faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { lighten } from 'polished';
import React from 'react';
import styled from 'styled-components';

const Btn = styled.button`
display: flex;
align-items: center;
justify-content: space-between;
width: 5.5rem;
height: 3rem;
margin-right: 1rem;
border-radius: 3rem;
background-color: transparent;
font-weight: 600;
color: rgb(60, 118, 233);
font-size: 1rem;
transition: all ease-in 100ms;
:hover{
    color: ${lighten(0.1, `rgb(60, 118, 233)`)};
    width: 6.5rem;
}
`

const Icon = styled.div`
width: 1rem;
height: 1rem;
line-height: 1rem;
`

const ContactBtn = () => {
    return (
        <Btn>
            <Icon>
                <FontAwesomeIcon icon={faArrowLeftLong} />
            </Icon>
            Contact
        </Btn>
    );
};

export default ContactBtn;