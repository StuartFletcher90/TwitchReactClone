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
    height: 50%;
    width: 20%;
    background-color: #434347;
    border: 2px solid #434347;
    color: white;
    font-size: 10px;
    border-radius: 4px 0 0 4px;
    margin-left: 14rem;
    
    ::-webkit-input-placeholder {
        color: white;
        padding: 5px;
        font-size: 15px;
    }

`;

const SearchBtn = styled.input`
    height: 53%;
    border: 2px solid #434347;
    border-radius: 0 4px 4px 0;
    background-color: #434347;
    margin-left: 1px;

`;