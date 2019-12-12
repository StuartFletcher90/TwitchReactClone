import React from 'react';
import styled from 'styled-components';

const Headings = () => {
    return (
        <ContainerDiv>
            <BrowseSub>Browse</BrowseSub>
            <SubSubDiv>
                <SubSubHeadingOne href="https://www.twitch.tv/directory">Categories</SubSubHeadingOne>
                <SubSubHeadingTwo href="https://www.twitch.tv/directory/all">Live Channels</SubSubHeadingTwo>
            </SubSubDiv>
        </ContainerDiv>
    )
}

export default Headings;

const ContainerDiv = styled.div`
    grid-area: body;
`;
const BrowseSub = styled.h1`
    color:white;
    font-size: 4em;
    margin: 25px 0 25px 0;
`;

const SubSubDiv = styled.div`
    display: flex;
    flex-direction: row;
`;

const SubSubHeadingOne = styled.a`
    color: #a970ff;
    text-decoration: none;
    font-weight: bold;
    font-size: 20px;
    border-bottom: 3px solid #a970ff;
    line-height: 60px;
    margin-top: -1em;
`;

const SubSubHeadingTwo = styled.a`
    color: white;
    margin: -2px 0 0 2em;
    text-decoration: none;
    font-weight: bold;
    font-size: 20px;
`;