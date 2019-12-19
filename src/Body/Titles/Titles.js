import React from 'react';
import styled from 'styled-components';

const Headings = (props) => {
    return (
        <ContainerDiv>
            <BrowseSub>Browse</BrowseSub>
            {props.myHideState && <SubSubDiv >
                <SubSubHeadingOne href="https://www.twitch.tv/directory">Categories</SubSubHeadingOne>
                <SubSubHeadingTwo href="https://www.twitch.tv/directory/all">Live Channels</SubSubHeadingTwo>
            </SubSubDiv>}
        </ContainerDiv>
    )
}

export default Headings;

const ContainerDiv = styled.div`
    grid-area: body;
    @media (max-width: 480px) {
    margin-top: 0;
}
`;
const BrowseSub = styled.h1`
    color:white;
    font-size: 4em;
    margin: 25px 0 25px 0;
    @media (max-width: 425px) {
        margin: 0px 0 10px 5px;
        font-size: 40px;
    }
    @media (max-width: 320px) {
        margin: 0px 0 10px 5px;
    }
`;

const SubSubDiv = styled.div`
    display: flex;
    flex-direction: row;
    @media (max-width: 425px) {
        margin: 0 0 0 25px;
    }
    @media (max-width: 320px) {
        margin: 0 0 0 15px;
    }
`;

const SubSubHeadingOne = styled.a`
    color: #a970ff;
    text-decoration: none;
    font-weight: bold;
    font-size: 20px;
    border-bottom: 3px solid #a970ff;
    line-height: 60px;
    margin-top: -1em;
    @media (max-width: 320px) {
        height: 50px;
        margin-top: -10px;
    }
`;

const SubSubHeadingTwo = styled.a`
    color: white;
    margin: -2px 0 0 2em;
    text-decoration: none;
    font-weight: bold;
    font-size: 20px;
    &:hover {
        color: #a970ff;
    }
`;