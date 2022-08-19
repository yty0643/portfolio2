import React from 'react';
import styled from 'styled-components';
import logo1 from '../images/logo/ts.png';
import logo2 from '../images/logo/react.png';
import logo3 from '../images/logo/redux.png';
import logo4 from '../images/logo/sc.png';
import DevTool from './dev_tool';

const Div = styled.div`
display:flex;
flex-direction: column;
align-items: center;
justify-content: center;
color: rgb(180, 183, 188);
font-size: 2rem;
font-weight: 500;
margin-bottom: 1rem;
`
const Tools = styled.div`
display:flex;
align-items: center;
justify-content: center;
margin-bottom: 1.5rem;
`

const Dev = () => {
    const tools = [logo1, logo2, logo3, logo4];
    return (
        <Div>
            <Tools>
                {tools.map((tool, index) =>
                    <DevTool key={index} tool={tool} />
                )}
            </Tools>
            Developed by
        </Div>
    );
};

export default Dev;