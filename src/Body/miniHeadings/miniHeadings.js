import React from 'react';
import styled from 'styled-components';



const MiniHeadings = (props) => {
    return (
        <MiniContainer>
            <SubHeadings>Filter by</SubHeadings>
            <FilterBtn onClick={props.clicked}>Add Filter +</FilterBtn>
            {props.myState &&
                <FilterModal>
                <ul>Cheese</ul>
                <ul>milk</ul>
                <ul>eggs</ul>
            </FilterModal>
        }
        </MiniContainer>
    )
    }


export default MiniHeadings;

const MiniContainer = styled.div`
   display: flex;
   grid-area: body;
   @media (max-width: 425px) {
        margin: 0 0 0 25px;
    }
    @media (max-width: 320px) {
        margin: 0 0 0 15px;
    }
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
    position: absolute;
    background-color: black;
    grid-area: body;
    color: white;
`;

// !this.state.modalDisplay

// <MiniContainer>
// <SubHeadings>Filter by</SubHeadings>
// <FilterBtn onClick={this.showFilterModal}>Add Filter +</FilterBtn>
//      {this.state.modalDisplay ? 
// <FilterModal>
//     <ul>Cheese</ul>
//     <ul>milk</ul>
//     <ul>eggs</ul>
// </FilterModal> : null};
// </MiniContainer>