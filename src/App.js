import React, { Component } from 'react';
import styled from 'styled-components';
import './App.css';
import NavBar from './Nav/Nav';
import SideBar from './SideBar/Sidebar';
import Headings from './Body/Titles/Titles';
import Cards from './Body/Cards/Card';
import MiniHeadings from './Body/miniHeadings/miniHeadings';

// review


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


class App extends Component {
  state = {
    cards: [
      {id: 0, image: dota2, text: "Dota 2", viewers: "326,314 viewers", url: "https://www.twitch.tv/directory/game/Dota%202", tags: ["MOBA"]},
      {id: 1, image: Halo, text: "Halo: The Master Chief Collection", viewers: "102,983 viewers", url: "https://www.twitch.tv/directory/game/Halo: The Master Chief Collection", tags: ["FPS", "Shooter"]},
      {id: 2, image: csgo, text: "Counter-strike: Global Offensive", viewers: "76,902 viewers", url: "https://www.twitch.tv/directory/game/Counter-Strike: Global Offensive", tags: ["FPS", "Shooter"]},
      {id: 3, image: Fortnite, text: "Fortnite", viewers: "70,547 viewers", url: "https://www.twitch.tv/directory/game/Fortnite", tags: ["Shooter"]},
      {id: 4, image: justChat, text: "Just Chatting", viewers: "66,093 viewers", url: "https://www.twitch.tv/directory/game/Just%20Chatting", tags: ["IRL"]},
      {id: 5, image: wow, text: "World of Warcraft", viewers: "63,233 viewers", url: "https://www.twitch.tv/directory/game/World%20of%20Warcraft", tags: ["MMORPG", "RPG"]},
      {id: 6, image: Smsh, text: "Super Smash Bros. Ultimate", viewers: "50,233 viewers", url: "https://www.twitch.tv/directory/game/Super Smash Bros. Ultimate", tags: ["Fighting"]},
      {id: 7, image: StrWz, text: "Star Wars Jedi: Fallen Order", viewers: "43,782 viewers", url: "https://www.twitch.tv/directory/game/Star Wars Jedi: Fallen Order", tags: ["Adventure", "Action"]},
      {id: 8, image: Pokemans, text: "PokéMon Sword & Shield", viewers: "43,337 viewers", url: "https://www.twitch.tv/directory/game/Pokémon Sword/Shield", tags: ["Adventure"]},
      {id: 9, image: CupHead, text: "CupHead", viewers: "39,998 viewers", url: "https://www.twitch.tv/directory/game/Cuphead", tags: ["Arcade", "Difficult"]},
      {id: 10, image: Smite, text: "Smite", viewers: "36,456 viewers", url: "https://www.twitch.tv/directory/game/Smite", tags: ["MOBA", "Third Person"]},
      {id: 11, image: Doom, text: "Doom", viewers: "34,244 viewers", url: "https://www.twitch.tv/directory/game/Doom", tags: ["FPS", "Violent"]},
      {id: 12, image: FF3, text: "Final Fantasy III", viewers: "30,277 viewers", url: "https://www.twitch.tv/directory/game/Final Fantasy III", tags: ["Adventure", "Turn Based"]},
      {id: 13, image: Mixer, text: "Mixer", viewers: "28,341 viewers", url: "https://mixer.com/", tags: ["Memes"]},
      {id: 14, image: Fifa, text: "FIFA20", viewers: "26,883 viewers", url: "https://www.twitch.tv/directory/game/FIFA%2020", tags: ["Sport"]},
      {id: 15, image: ApexLego, text: "Apex Legends", viewers: "26,660 viewers", url: "https://www.twitch.tv/directory/game/Apex Legends", tags: ["FPS", "Shooter"]},
      {id: 16, image: Zelda, text: "The Legend of Zelda: Ocarina of Time", viewers: "25,221 viewers", url: "https://www.twitch.tv/directory/game/The Legend of Zelda: Ocarina of Time", tags: ["Adventure"]},
      {id: 17, image: Minecraft, text: "Minecraft", viewers: "24,676 viewers", url: "https://www.twitch.tv/directory/game/Minecraft", tags: ["Adventure", "Action"]},
      {id: 18, image: CoD, text: "Call of Duty: Modern Warefare", viewers: "23,554 viewers", url: "https://www.twitch.tv/directory/game/Call of Duty: Modern Warfare", tags: ["FPS", "Shooter"]},
      {id: 19, image: Special, text: "Special Events", viewers: "22,110 viewers", url: "https://www.twitch.tv/directory/game/Special%20Events", tags: ["Event", "Community"]},
      {id: 20, image: Hearth, text: "HearthStone", viewers: "15,014 viewers", url: "https://www.twitch.tv/directory/game/Hearthstone", tags: ["Card & Board Game"]},
      {id: 21, image: Music, text: "Music & Performing Arts", viewers: "12,790 viewers", url: "https://www.twitch.tv/directory/game/Music & Performing Arts", tags:["Creative"]},
      {id: 22, image: GtaV, text: "Grand Theft Auto: V", viewers: "7,460 viewers", url: "https://www.twitch.tv/directory/game/Grand Theft Auto V", tags: ["Driving/Racing Game"]},
      {id: 23, image: league, text: "League of Legends", viewers: "-1 viewers", url: "https://www.twitch.tv/directory/game/League of Legends", tags: ["Trash", "MOBA"]},

    ],
    modalDisplay: false,
    screenAdapt: true,
  }

    componentDidMount() {
      if ( window.innerWidth <= 480) {
        this.setState({screenAdapt: false})
      } else {
        if (window.innerWidth >= 481) {
          this.setState({screenAdapt: true})
        }
      }
    }

    setWrapperRef = (node) => {
      this.wrapperRef = node;
    }

    
  render () {
    return (
      <AppDiv ref={this.setWrapperRef}>
        <NavBar myHideState={this.state.screenAdapt}/>
        {this.state.screenAdapt && <SideBar/>} 
        <PlaceHolderDiv>
        <Headings myHideState={this.state.screenAdapt}/>
        {this.state.screenAdapt && <MiniHeadings clicked={this.showFilterModal} myState={this.state.modalDisplay}/>}
        <CardGrid>
        {this.state.cards.map((card)=> {
          return(
            <Cards image={card.image} key={card.id} text={card.text} viewers={card.viewers} url={card.url} tags={card.tags}/>
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
  gap: 5px 45px;
  height: 100vh;
  width: 100vw;
  background-color: #0e0e10;
  cursor: default;
  @media (max-width: 480px) {
    grid-template-columns: 15px 1fr;
    gap: 5px 0;
  }
`;

const CardGrid = styled.div`
  grid-area: body;
  display: flex;
  flex-direction: row;
  text-overflow: ellipsis;
  flex-wrap: wrap;
  @media (max-width: 480px) {
    gap: 0;
    }
`;

const PlaceHolderDiv = styled.div`
  display: flex;
  grid-area: body;
  flex-direction: column;
  overflow: scroll;
`;
