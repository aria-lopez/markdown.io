import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const NavBar = styled.div`
    display: flex;
    align-items: center;
    justify-content: left;
    border-bottom: 1px solid #9AA0A6;
    width: 100%;
`;

const NavSpacer = styled.div`
    min-width: ${props => props.width || null};
    min-height: 1px;
`;

export default function App() {
    return (
        <Container>
            <NavBar>
                <NavSpacer width={'50px'}/>
                <h1>Markdown.io</h1>
            </NavBar>
        </Container>
    )
}
