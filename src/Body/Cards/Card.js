import React from 'react';
import styled from 'styled-components';

const Card = (props) => {
    return (
        <TwitchCards>
            <Image src={props.image}/>
            <Game>{props.text}</Game>
            <ViewerCount>{props.viewers}</ViewerCount>
        </TwitchCards>
    )
}

export default Card;

const TwitchCards = styled.div`
text-overflow: ellipsis;
grid-area: body;
height: 300px;
width: 220px;
display: flex;
flex-direction: column;
margin: 15px 0 15px 0;
`;

const Image = styled.img`
width: 200px;
height: 240px;
margin-bottom: 5px;
`;

const Game = styled.h6`
    text-overflow: ellipsis;
    width: 200px;
    color: white;
    font-weight: 600;
    font-size: 15px;
    text-shadow: 0.7px 0.7px #E3E2E1;
    margin: 2px;

    overflow: hidden;
white-space: nowrap;
`;

const ViewerCount = styled.h6`
    color: #C9C8C7;
    font-size: 13px;
    margin: 1px;
    font-weight: 300;
    text-shadow: 0.7px 0.7px grey;
`;