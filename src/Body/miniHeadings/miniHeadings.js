import React, { Component } from 'react';
import styled from 'styled-components';


class MiniHeadings extends Component {
    state = {
        modalDisplay: false
    };

    showFilterModal = () => {
        this.setState({modalDisplay: true})
        console.log("hello")
    };

    render () {
    return (
        <MiniContainer>
            <SubHeadings>Filter by</SubHeadings>
            <FilterBtn onClick={this.showFilterModal}>Add Filter +</FilterBtn>
            {this.state.modalDisplay ? <FilterModal/> : null};
        </MiniContainer>
    )
    }
}

export default MiniHeadings;

const MiniContainer = styled.div`
   display: flex;
   grid-area: body;
`;

const SubHeadings = styled.h6`
    font-weight: 600;
    font-size: 12px;
    color: white;
    
`;

const FilterBtn = styled.button`
    height: 30px;
    margin-top: 20px;
    margin-left: 10px;
    border: 2px #434347;
    border-radius: 14px;
    color: white;
    border-style: dashed;
    background-color: transparent;
`;

const FilterModal = styled.div`
    height: 200px;
    width: 150px;
    background-color: black;
    grid-area: body;

`;