import React, { useState } from "react";
import styled from 'styled-components/';
import '../styles/bio.css';
import Card from './Card'
import SignUp from './SignUp'
import ThankYou from './ThankYou'



export const Home = ()=> {
    
    const [isSubmitted, setIsSubmitted] = useState(false)

    function onSubmit(){
        setIsSubmitted(true);
        
    }
    return (
        <Div>
            <Title>About us</Title>
            <Main>
                <Card />
                {!isSubmitted ?
                    <SignUp onSubmit={onSubmit}/> :
                    <ThankYou />
                }
            </Main>
        </Div>
    )
};
const Div = styled.div`
    display:flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`;
const Main = styled.div`
    display:relative;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    `;

const Title = styled.h1`
display:flex;
color:white;
padding-top:10px;
justify-content: center;
align-items: center;
font-family: Roboto Slab;
font-size: 50px;
`;

