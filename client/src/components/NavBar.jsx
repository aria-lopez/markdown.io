import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const NavContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: left;
    border-bottom: 1px solid #9AA0A6;
    width: 100%;
    margin-bottom: 10px;
`;

const NavSpacer = styled.div`
    min-width: ${props => props.width || null};
    min-height: 1px;
`;

const Logo = styled.h1`
    cursor: pointer;
`;

const NavButton = styled.button`
    cursor: pointer;
    background-color: transparent;
    font-weight: 500;
    font-size: 18px;
    border: 1px solid whitesmoke;
    border-radius: 7px;
    color: inherit;
    padding: 8px;
    transition-duration: 0.2s;
    &:hover {
        background-color: #f5a142;
        box-shadow: 0px 0px 25px #f5a142;
    }
`;

const MainButton = styled.button`
    cursor: pointer;
    font-weight: 500;
    font-size: 18px;
    border: 1px solid whitesmoke;
    border-radius: 7px;
    color: inherit;
    padding: 8px;
    transition-duration: 0.2s;
    background-color: #7916f2;
    box-shadow: 0px 0px 25px #7916f2;
    &:hover {
        background-color: #f5a142;
        box-shadow: 0px 0px 25px #f5a142;
    }
`;

export default function NavBar() {
    return (
        <NavContainer>
            <NavSpacer width={'50px'}/>
            <Logo>Markdown.io</Logo>
            <NavSpacer width={'50px'}/>
            <MainButton>
               New Document
            </MainButton>
            <NavSpacer width={'20px'}/>
            <NavButton>
                Import Document
            </NavButton>
            <NavSpacer width={'20px'}/>
        </NavContainer>
    )
}
