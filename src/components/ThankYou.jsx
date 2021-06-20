import React from 'react'
import styles from 'styled-components';
import '../theme';

const ThankYou = () => {
    return (
        <div align = "center">
            <Message>Thank you! You've been added to the list</Message>
        </div>
    )
}

export default ThankYou

const Message = styles.h1`
    background-color:rgb (148, 149 ,144);
    font-size:x-large;
    font-style:italic;
    font-family:"Amita", cursive;
    color:white;
    animation: appear 3s linear;animation-fill-mode:forwards;

    @keyframes appear {
        0% {color:black;}
        100% {color:white;}
    }
    `