import React from 'react'
import Search from './searchBox/search';
import TwitchBtn from './TwitchLogo/Twitch';
import TwitchBtns from './Btns/TwitchBtn';
import styled from "styled-components";
import TwitchCrownWhite from '../Assets/icons/twitchCrownWhite.png';
import Person from './Profile/profile';


const Nav = () => {
    return (
        <HeadBar>
            <TwitchBtn/>
            <NavLinks href="https://www.twitch.tv/">Discover</NavLinks>    
            <Browse href="https://www.twitch.tv/directory">Browse</Browse>    
            <NavLinks href="https://twitch.amazon.com/tp?ref_=sm_tw_tup_ntp_t_all_exBar&twitchReferral=2d9c8890602d1b1455a2ec1613c8cc8f">Try Prime</NavLinks>    
            <Search/>
            <BtnCrown type="image" src={TwitchCrownWhite} alt="crown"></BtnCrown>
            <TwitchBtns/>
            <Person/>
        </HeadBar>
    )
}

export default Nav;

const HeadBar = styled.div`
    display: flex;
    position: fixed;
    align-items: center;
    height: 60px;
    width: 100vw;
    background-color: #26262c;
    font-size: 20px;
`;

const BtnCrown = styled.input`
    border: 2px transparent solid;
    width: 2em;
    height: 2em; 
    margin: 0 1em 0 20rem;
`;

const NavLinks = styled.a`
    text-decoration: none;
    color: white;
    margin: 0 10px 0 10px;
`;

const Browse = styled.a`
    text-decoration: none;
    color: #a970ff;
    margin-top: 4px;
    border-bottom: 3px solid #a970ff;
    line-height: 54px;
`;