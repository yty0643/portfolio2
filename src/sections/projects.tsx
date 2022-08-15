import React from 'react';
import styled from 'styled-components';
import Sidebar from '../components/sidebar';

const Section = styled.section`
display: flex;
width: 100%;
height 100vh;
background-color: rgb(230, 233, 238);
`
const Projects = () => {
    return (
        <Section>
            <Sidebar />
        </Section>
    );
};

export default Projects;