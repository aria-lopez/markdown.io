import React, { useState, useEffect } from 'react';
import styled from 'styled-components';


const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    transition: opacity 1s;
    flex-direction: column;
    border-bottom: 1px solid #9AA0A6;
    width: 100%;
    background-color: #35165c;
`;

const Title = styled.h1`
`;


const ButtonContainer = styled.div`
    display: flex;
    align-items: left;
    justify-content: space-evenly;
    flex-direction: column;
    min-height: 400px;
    min-width: 400px;
    text-align: left;
`;

const IntroButton = styled.button`
    opacity: ${props => props.opacity ? '1' : '0'};
    transition: opacity 1s;
    pointer-events: ${props => props.opacity ? 'auto' : 'none' };
    font-size: 30px;
    padding-left: 15px;
    background-color: transparent;
    border-top: transparent;
    border-right: transparent;
    border-left: 2px solid #whitesmoke;
    border-bottom: transparent;
    text-align: left;
    color: inherit;
    cursor: pointer;
    &:hover {
        color: #f5a142; 
        border-left: 4px solid #f5a142; 
        background-color: #454545;
    }
`;

const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: left;
    justify-content: left;
    text-align: left;
    margin: 20px 0px 20px 0px;
`;

const Spacer = styled.div`
    min-height: ${props => props.height || '0' }px;
    min-width: 1px;
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
            <ButtonContainer>
                <Spacer height={'25'}/>
            <Title>{title}</Title>
                <Row>
                    <IntroButton opacity={displayButtons}> Create an account</IntroButton>
                </Row>
   
                <Row>
                    <IntroButton opacity={displayButtons}> Feature guide</IntroButton>
                </Row>

                <Row>
                    <IntroButton opacity={displayButtons}> Create your first doc</IntroButton>
                </Row>

            
                <Row>
                    <IntroButton opacity={displayButtons}> Check out an example doc</IntroButton>
                </Row>
                <Spacer height={'50'}/>
            </ButtonContainer>
        </Container>
    );
}
