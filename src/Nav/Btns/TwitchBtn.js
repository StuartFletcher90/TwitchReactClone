import React from 'react';
import styled from 'styled-components';


const TwitchBtns = (props) => (
        <div>        
            <LogInBtn>Log In</LogInBtn>
            <SignUpBtn>Sign Up</SignUpBtn>
        </div>

);

export default TwitchBtns;

const LogInBtn = styled.button`
    background-color: #434347;
    height: 30px;
    border-radius: 4px;
    border: 2px solid #434347;
    color: white;
    font-size: 12px;
    margin-right: 5px;
    font-weight: bold;
    &:hover {
        background-color: #65656B;
        border-color: #65656B;
    }
    @media (max-width: 425px) {
        width: 45px;
        height: 30px;
        font-size: 10px;
    }
`;

const SignUpBtn = styled.button`
    background-color: #9147ff;
    height: 30px;
    border-radius: 4px;
    border: 2px solid #9147ff;
    color: white;
    font-size: 12px;
    margin-right: 15px;
    font-weight: bold;
    &:hover {
        background-color: #773BD1;
        border-color: #773BD1;
    }
    @media (max-width: 768px) {
        margin-right: 5px;
    }
    @media (max-width: 425px) {
        width: 45px;
        height: 30px;
        font-size: 10px;
    }
`;
