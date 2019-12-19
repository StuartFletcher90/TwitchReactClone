import React from 'react';
import styled from 'styled-components';
import searchGlassOne from '../../Assets/icons/searchGlassOne.png';

const Search = () => {
    return (
    <React.Fragment>
        <SearchInput type="text" placeholder="Search"/>
        <SearchBtn type="image" src={searchGlassOne} alt="Enter"></SearchBtn>
    </React.Fragment>
    )
}

export default Search;

const SearchInput = styled.input`
    height: 30px;
    width: 300px;
    background-color: #434347;
    border: 2px solid #434347;
    color: white;
    font-size: 10px;
    border-radius: 8px 0 0 8px;
    margin-left: 10em;
    
    ::-webkit-input-placeholder {
        color: white;
        padding: 5px;
        font-size: 15px;
        
    }
    @media (max-width: 1024px) {
            margin-left: 5px;
            width: 200px;
        }
    @media (max-width: 831px) {
        width: 150px;
        margin: 0 0;
    }
    @media (max-width: 425px) {
        display: none;
    }
`;

const SearchBtn = styled.input`
    height: 32px;
    border: 2px solid #434347;
    border-radius: 0 8px 8px 0;
    background-color: #434347;
    margin-left: 1px;
    @media (max-width: 425px) {
        background-color: transparent;
        border: none;
    }
`;