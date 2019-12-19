import React from 'react';
import styled from 'styled-components';
import TagComp from '../Tags/Tags';



const Card = (props) => {
    return (
        <TwitchCards>
            <GameLink href={props.url}>
                <Image src={props.image}/>
                <InfoContainer>
                    <Game>{props.text}</Game>
                    <ViewerCount>{props.viewers}</ViewerCount>
                    <TagComp tags={props.tags} />
                </InfoContainer>
            </GameLink>
        </TwitchCards>
            )
        }

export default Card;
const Image = styled.img`
width: 200px;
height: 240px;
margin-bottom: 5px;
overflow: hidden;
@media (max-width: 480px) {
    width: 100px;
    height: 120px;
    }
`;

const TwitchCards = styled.div`
text-overflow: ellipsis;
grid-area: body;
height: 300px;
width: 220px;
display: flex;
flex-direction: row;
margin: 5px 0 30px 0;
justify-content: center;
align-items: center;
    &:hover ${Image} {
    box-shadow: -1px 2px #9147ff,
                -2px 3px #9147ff,
                -3px 4px #9147ff,
                -4px 5px #9147ff,
                -5px 6px #9147ff,
                -6px 7px #9147ff,
                -7px 8px #9147ff,
                -8px 9px #9147ff;
    transform: translate(6px, -5px);
    transition-duration: 0.1s;
    transition-delay: 0.1s;
} 
@media (max-width: 480px) {
    height: 120px;
    margin: 5px 0 5px 0;
    justify-content: flex-start;
    }
`;

const InfoContainer = styled.div`
    
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
    @media (max-width: 480px) {
        margin: 10px 15px 5px 10px; 
    }
`;

const ViewerCount = styled.h6`
    color: #C9C8C7;
    font-size: 13px;
    margin: 1px;
    font-weight: 300;
    text-shadow: 0.7px 0.7px grey;
    @media (max-width: 480px) {
        margin: 10px 15px 5px 10px; 
    }
`;

const GameLink = styled.a`
    text-decoration: none;
    @media (max-width: 480px) {
    display: flex;
    flex-direction: row;
    align-content: center;
    align-items: center;
    }
`;
