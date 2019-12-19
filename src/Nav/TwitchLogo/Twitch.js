import React from 'react';
import TwitchLogo from '../../Assets/icons/twitch.png';
import styled from 'styled-components';

const TwitchIcon = () => {
    return (
        <TwitchBtn type="image" src={TwitchLogo} alt="Twitch"></TwitchBtn>
    )
}

export default TwitchIcon;

const TwitchBtn = styled.input`
    height: 40px;
    margin: 0 10px 0 10px;
    @media (max-width: 425px) {
        height: 30px;
        
    }
`;