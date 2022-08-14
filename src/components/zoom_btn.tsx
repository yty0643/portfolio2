import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';
import { useAppDispatch } from '../app/hooks';
import { decrement, increment } from '../features/scale/scaleSlice';

const Btn = styled.button`
width: 2rem;
height: 2rem;
font-size: 1rem;
background-color: white;
:hover{
    background-color: rgb(214, 216, 221);
}
& + &{
    border-top: 1px solid rgb(214, 216, 221);
}
`

const ZoomBtn = ({ minus }: { minus?: boolean }) => {
    const dispatch = useAppDispatch();
    
    const onClick = () => {
        if (minus)
            dispatch(decrement());
        else
            dispatch(increment());
    };

    return (
        <Btn onClick={onClick}>
            {minus ? <FontAwesomeIcon icon={faMinus} /> : <FontAwesomeIcon icon={faPlus} />}
        </Btn>
    );
};

export default ZoomBtn;