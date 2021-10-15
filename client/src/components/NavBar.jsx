import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const NavContainer = styled.div`
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

const Logo = styled.h1`
    cursor: pointer;
`;

export default function NavBar() {
    return (
        <NavContainer>
            <NavSpacer width={'50px'}/>
            <Logo>Markdown.io</Logo>
        </NavContainer>
    )
}
