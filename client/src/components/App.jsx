import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import NavBar from './NavBar.jsx';

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
`;

export default function App() {
    return (
        <Container>
            <NavBar/>
        </Container>
    )
}
