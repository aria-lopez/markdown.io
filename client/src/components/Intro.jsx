import React, { useState, useEffect } from 'react';
import styled from 'styled-components';


const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    transition: opacity 1s;
    flex-direction: column;
`;

const Title = styled.h1`
`;

const Or = styled.h1`
    opacity: ${props => props.opacity ? '1' : '0'};
    transition: opacity 1s;
`;

const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
    min-height: 400px;
`;

const IntroButton = styled.button`
    opacity: ${props => props.opacity ? '1' : '0'};
    transition: opacity 1s;
    pointer-events: ${props => props.opacity ? 'auto' : 'none' };
    font-size: 30px;
    background-color: transparent;
    border-top: transparent;
    border-right: transparent;
    border-left: transparent;
    border-bottom: 2px solid whitesmoke; 
    color: inherit;
    cursor: pointer;
    &:hover {
        color: #f5a142; 
        border-bottom: 2px solid #f5a142; 
    }
`;

const LoginButton = styled.button`
    opacity: ${props => props.opacity ? '1' : '0'};
    margin-top: 5px;
    transition: opacity 1s;
    pointer-events: ${props => props.opacity ? 'auto' : 'none' };
    font-size: 15px;
    background-color: transparent;
    border: transparent;
    color: inherit;
    cursor: pointer;
    &:hover {
        color: #f5a142; 
    }
`;

const Column = styled.div`
    display: flex;
    flex-direction: column;
`;

export default function Intro() {
    const [title, setTitle] = useState('');
    useEffect(() => {
        const result = `Let's get started...`;
        if (title === result) return setTimeout(() => setDisplayButtons(true), 250);
        const newTitle = title + result[title.length];
        setTimeout(() => {
            setTitle(newTitle);
        }, 100);
    }, [title]);

    const [displayButtons, setDisplayButtons] = useState(false);
    
    

    return (
        <Container>
            <Title>{title}</Title>
            <ButtonContainer>
                <Column>
                    <IntroButton opacity={displayButtons}>1. Create an account</IntroButton>
                    <LoginButton opacity={displayButtons}>Already have an account?</LoginButton>
                </Column>

                <IntroButton opacity={displayButtons}>2. Check out our feature guide!</IntroButton>
                <IntroButton opacity={displayButtons}>3. Create your first doc!</IntroButton>

            
                <Or opacity={displayButtons}> OR </Or>

                <IntroButton opacity={displayButtons}>Check out an example document</IntroButton>
            </ButtonContainer>
        </Container>
    );
}
