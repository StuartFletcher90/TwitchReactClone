import React, { Component } from 'react';
import styled from 'styled-components';
import './App.css';
import NavBar from './Nav/Nav';
import SideBar from './SideBar/Sidebar';
import Headings from './Body/Titles/Titles';
import Cards from './Body/Cards/Card';

import dota2 from './Assets/img/TotesMeDotes.jpg';
import CoD from './Assets/img/CoD.jpg';
import csgo from './Assets/img/csgo.jpeg';
import Fortnite from './Assets/img/Fortnite.jpg';
import justChat from './Assets/img/justChat.jpg';
import league from './Assets/img/league.jpg';
import Minecraft from './Assets/img/Minecraft.jpg';
import wow from './Assets/img/wow.jpg';
import Pokemans from './Assets/img/PokémonSwordShield.jpg';
import Halo from './Assets/img/Halo.jpg';
import Fifa from './Assets/img/Fifa20.jpg';
import ApexLego from './Assets/img/ApexLego.jpg';
import CupHead from './Assets/img/Cuphead.jpg';
import Doom from './Assets/img/Doom.jpg';
import FF3 from './Assets/img/FF3.jpg';
import Mixer from './Assets/img/Mixer.jpg';
import Smite from './Assets/img/Schmite.jpg';
import Smsh from './Assets/img/Smsh.jpg';
import StrWz from './Assets/img/Stwrz.jpg';
import Zelda from './Assets/img/Zelda.jpg';
import Special from './Assets/img/Special.jpg';
import Hearth from './Assets/img/HS.jpg';
import Music from './Assets/img/Music.jpg';
import GtaV from './Assets/img/GtaV.jpg';
import BenCN from './Assets/SideReelIcons/benCN.jpg';
import DanCN from './Assets/SideReelIcons/DanCN.jpg';
import Memes from './Assets/img/Marshh.jpg';
import CodeNation from './Assets/img/CodeNation.jpg';
import BabyYoda from './Assets/img/babyYoda.jpg';
import MomoQuestion from './Assets/img/questionsWithMo.jpg';

class App extends Component {
  state = {
    cards: [
      {id: 0, image: dota2, text: "Dota 2", viewers: "326,314 viewers"},
      {id: 1, image: Halo, text: "Halo: The Master Chief Collection", viewers: "102,983 viewers"},
      {id: 2, image: csgo, text: "Counter-strike: Global Offensive", viewers: "76,902 viewers"},
      {id: 3, image: Fortnite, text: "Fortnite", viewers: "70,547 viewers"},
      {id: 4, image: justChat, text: "Just Chatting", viewers: "66,093 viewers"},
      {id: 5, image: wow, text: "World of Warcraft", viewers: "63,233 viewers"},
      {id: 6, image: Smsh, text: "Smash Bros: Ultimate", viewers: "50,233 viewers"},
      {id: 7, image: StrWz, text: "Star Wars Jedi: Fallen Order", viewers: "43,782 viewers"},
      {id: 8, image: Pokemans, text: "PokéMon Sword & Shield", viewers: "43,337 viewers"},
      {id: 9, image: CupHead, text: "CupHead", viewers: "39,998 viewers"},
      {id: 10, image: Smite, text: "Smite", viewers: "36,456 viewers"},
      {id: 11, image: Doom, text: "Doom", viewers: "34,244 viewers"},
      {id: 12, image: FF3, text: "Final Fantasy III", viewers: "30,277 viewers"},
      {id: 13, image: Mixer, text: "Mixer", viewers: "28,341 viewers"},
      {id: 14, image: Fifa, text: "FIFA20", viewers: "26,883 viewers"},
      {id: 15, image: ApexLego, text: "Apex Legends", viewers: "26,660 viewers"},
      {id: 16, image: Zelda, text: "The Legend of Zelda: Ocarina of Time", viewers: "25,221 viewers"},
      {id: 17, image: Minecraft, text: "Minecraft", viewers: "24,676 viewers"},
      {id: 18, image: CoD, text: "Call of Duty: Modern Warefare", viewers: "23,554 viewers"},
      {id: 19, image: Special, text: "Special Events", viewers: "22,110 viewers"},
      {id: 20, image: Hearth, text: "HearthStone", viewers: "15,014 viewers"},
      {id: 21, image: Music, text: "Music & Performing Arts", viewers: "12,790 viewers"},
      {id: 22, image: GtaV, text: "Grand Theft Auto: V", viewers: "7,460 viewers"},
      {id: 23, image: league, text: "League of Legends", viewers: "-1 viewers"},
      {id: 24, image: DanCN, text: "0-2-Hero Coding with Dan", viewers: "25 viewers"},
      {id: 25, image: BenCN, text: "Surviving with Ben", viewers: "25 viewers"},
      {id: 26, image: CodeNation, text: "We are CodeNation", viewers: "10 viewers"},
      {id: 27, image: Memes, text: "living the meme", viewers: "1 viewers"},
      {id: 28, image: BabyYoda, text: "Alex Uncovered", viewers: "0.5 viewers"},
      {id: 29, image: MomoQuestion, text: "Questions with Mo", viewers: "0.000 viewers"},

    ]
  }
  render () {
    return (
      <AppDiv>
        <NavBar/>
        <SideBar/>
        <PlaceHolderDiv>
        <Headings/>
        <CardGrid>
        {this.state.cards.map((card)=> {
          return(
            <Cards image={card.image} text={card.text} viewers={card.viewers}/>
          )
        })}
        </CardGrid>
        </PlaceHolderDiv>
      </AppDiv>
    )
  }
}

export default App;

const AppDiv = styled.div`
  display: grid;
  grid-template-columns: 50px 1fr;
  grid-template-rows: 60px;
  grid-template-areas: "Nav Nav"
  "side body";
  gap: 5px 30px;
  height: 100vh;
  width: 100vw;
  background-color: #0e0e10;
`;

const CardGrid = styled.div`
  grid-area: body;
  display: flex;
  flex-direction: row;
  text-overflow: ellipsis;
  flex-wrap: wrap;
  margin-top: 50px;
`;

const PlaceHolderDiv = styled.div`
  display: flex;
  grid-area: body;
  flex-direction: column;
  overflow: scroll;
`;
