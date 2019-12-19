import React from 'react';
import styled from 'styled-components';

import expandLight from '../Assets/SideReelIcons/expandLight.png';
import cameraRetake from '../Assets/SideReelIcons/cams.png';
import android from '../Assets/SideReelIcons/android.png';
import digg from '../Assets/SideReelIcons/diggg.png';
import fireBoy from '../Assets/SideReelIcons/fireboy.png';
import memeMail from '../Assets/SideReelIcons/mememail.png';
import vee from '../Assets/SideReelIcons/vee.png';
import benLad from '../Assets/SideReelIcons/benCN.jpg';
import DanLad from '../Assets/SideReelIcons/DanCN.jpg';
import dabDab from '../Assets/SideReelIcons/dab.jpg';

let array = [dabDab, DanLad, benLad, android, digg, fireBoy, memeMail, vee]
let images = array.map((image, index) => {
    return <img src={image} key={index} alt="no streams, reeee!"/>
})

const SideBar = (props) => {
    return (
        <BasicBar >
            <Expand><img src={expandLight} alt="expand"/></Expand>
            <IsLive><img src={cameraRetake} alt="live"/></IsLive>
            {images}
        </BasicBar>    
 
    )
}

export default SideBar;

const BasicBar = styled.div`
    grid-area: side;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: -10px;
    background-color: #26262c;
    overflow: hidden;
    img {
        height: 35px;
        margin: 5px 0 5px 0;
        width: 35px;
        border-radius: 50%;

    }
`;

const IsLive = styled.div`
    margin-bottom: 5px;
    img{
        height: 30px;
        width: 30px;
    }
`;

const Expand = styled.button`
    background: transparent;
    border: none;
    img{
        height: 30px;
        width: 30px;
    }
`;
