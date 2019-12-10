import React from 'react';
import styled from 'styled-components';

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

const SideBar = () => {
    return (
        <BasicBar>
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
    margin-top: 3px;
    background-color: #26262c;
    overflow: hidden;
    img {
        height: 40px;
        margin: 10px 0 10px 0;
        width: 40px;
        border-radius: 50%;

    }
`;
