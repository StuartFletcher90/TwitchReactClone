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
    height: 2em;
`;