import React from 'react'
import Search from './searchBox/search';
import TwitchBtn from './TwitchLogo/Twitch';
import TwitchBtns from './Btns/TwitchBtn';
import styled from "styled-components";
import TwitchCrownWhite from '../Assets/icons/twitchCrownWhite.png';
import Person from './Profile/profile';
import Compass from '../Assets/icons/compass.png';
import Device from '../Assets/icons/multi.png';


const Nav = (props) => {
    return (
        <HeadBar>
            <NavLinkContainer>
                <TwitchBtn/>            
                <NavLinks href="https://www.twitch.tv/">Discover</NavLinks>
                <Browse href="https://www.twitch.tv/directory">Browse</Browse>  
                <MediaIcons type="image" src={Device} alt="media"></MediaIcons>
                <NavLinks href="https://twitch.amazon.com/tp?ref_=sm_tw_tup_ntp_t_all_exBar&twitchReferral=2d9c8890602d1b1455a2ec1613c8cc8f">Try Prime</NavLinks>    
                {props.myHideState && <MoreBtn>...</MoreBtn>} 
            </NavLinkContainer>
            <SearchCont>
                <AppBtn>Open In App</AppBtn>
                <Search/>
                <DotDotDotBtn>...</DotDotDotBtn>
            </SearchCont>
            {props.myHideState && <BtnContainer>
                <BtnCrown type="image" src={TwitchCrownWhite} alt="crown"></BtnCrown>
                <TwitchBtns/>
                <Person/>
            </BtnContainer>}
        </HeadBar>
    )
}

export default Nav;

const HeadBar = styled.div`
    display: flex;
    position: fixed;
    align-items: center;
    justify-content: space-between;
    height: 50px;
    width: 100vw;
    background-color: #18181b;
    font-size: 20px;
    border-bottom: 1px solid black;
    @media (max-width: 425px) {
    }
`;

const BtnCrown = styled.input`
    border: 2px transparent solid;
    width: 28px;
    height: 28px; 
    margin: 0 1em 0 20rem;
    &:hover {
        background-color: #434347;
        border-radius: 4px;
    }
    @media (max-width: 1024px) {
        margin: 0 1em 0 10px;
    }
    @media (max-width: 831px) {
        margin: 0 5px 0 0;
    }
    @media (max-width: 425px) {
        height: 20px;
        width: 20px;
    }
`;

const NavLinks = styled.a`
    text-decoration: none;
    color: white;
    margin: 0 30px;
    &:hover {
        color: #a970ff;
    }
    @media (max-width: 1024px) {
        margin: 0 10px;
    }
    @media (max-width: 831px) {
        margin: 0 4px;
        font-size: 13px;
        margin: 0 5px 0 5px;
    }
    @media (max-width: 425px) {
        display: none;
    }
`;
const MoreBtn = styled.button`
    margin: 0;
    height: 10px;
    padding-bottom: 1.7em;
    align-items: center;
    color: white;
    background-color: transparent;
    border: none;
    font-size: 20px;
    font-weight: bolder;
    &:hover {
        border: 1px solid #434347;
        background-color: #434347;
        border-radius: 4px;
    }
    @media (max-width: 831px) {
        font-size: 13px;
    }
`;

const Browse = styled.a`
    text-decoration: none;
    color: #a970ff;
    margin-top: 4px;
    border-bottom: 2px solid #a970ff;
    line-height: 45px;
    @media (max-width: 831px) {
        font-size: 14px;
    }
    @media (max-width: 425px) {
        display: none;
    }
`;
const NavLinkContainer = styled.div`
    display: flex;
    align-items: center;
`;

const BtnContainer = styled.div`
    display: flex;
    align-content: flex-end;
    align-items: center;
`;

const SearchCont = styled.div`
    display: flex;
    
`;

const MediaIcons = styled.input`
    display: none;
    @media (max-width: 425px) {
        display: inline-block;
        height: 20px;
        width: 20px;
        margin: 0 5px 0 5px;
    }
`;

const DotDotDotBtn = styled.button`
    display: none;
    @media (max-width: 425px) {
        display: inline-block;
        color: white;
        background-color: transparent;
        border: none;
        font-size: 20px;
        align-items: center;
        margin-bottom: 5px;
    }
`;

const AppBtn = styled.button`
    display: none;
    @media screen {
        display: inline-block;
        background-color: #9147ff;
        border: 1px solid #9147ff;
        border-radius: 4px;
        height: 30px;
        width: 100px;
        color: white;
        text-shadow: .3px .3px white;

    }
`;
