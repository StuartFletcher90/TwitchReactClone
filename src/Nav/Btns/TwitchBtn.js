import React from 'react';
import styled from 'styled-components';


const TwitchBtns = () => (
        <>
        <LogInBtn>Log In</LogInBtn>
        <SignUpBtn>Sign Up</SignUpBtn>
        </>
);

export default TwitchBtns;

const LogInBtn = styled.button`
    background-color: #434347;
    height: 3em;
    border-radius: 4px;
    border: 2px solid #434347;
    color: white;
    font-size: 12px;
    margin-right: 5px;
    font-weight: bold;
`;

const SignUpBtn = styled.button`
    background-color: #772ce8;
    height: 3em;
    border-radius: 4px;
    border: 2px solid #772ce8;
    color: white;
    font-size: 12px;
    margin-right: 2em;
    font-weight: bold;
`;