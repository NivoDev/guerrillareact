import React from 'react'
import styled from 'styled-components';


const ThankYouContact = () => {
    return (
        <Div>
            <Message>Thank you! You're message has been sent!</Message>
        </Div>
    )
}

export default ThankYouContact
const Div = styled.div`
  display:flex;
  line-height:2em;
  flex-direction: column;
  justify-content:center;
  align-items:center;
  position: relative;
`;
const Message = styled.h1`
    background-color:rgb (148, 149 ,144);
    font-size:x-large;
    font-style:italic;
    font-family:"Amita", cursive;
    color:black;
    animation: appear 3s linear;animation-fill-mode:forwards;

    @keyframes appear {
        0% {color:black;}
        100% {color:white;}
    }
    `