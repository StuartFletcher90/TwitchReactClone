import React from 'react';
import userInterface from '../../Assets/icons/persona.png';
import styled from 'styled-components';

const Person = () => {
    return (
    <Persona type="image" src={userInterface} alt="profile"/>
    )
};

export default Person;

const Persona = styled.input`
    height: 28px;
    width: 28px;
    padding-top: 4px, 4px, 4px, 4px;
    margin-right: 10px;
    background-color: #18181b;
    &:hover {
        background-color: #434347;
        border-radius: 4px;
    }
    @media (max-width: 768px) {
        margin-right: 3px;
    }
    @media (max-width: 425px) {
        width: 20px;
        height: 20px;
        margin: 0 0;
    }
`;