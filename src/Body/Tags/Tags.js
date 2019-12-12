import React from 'react';
import styled from 'styled-components';


const TagComp = (props) => (
    <GenreBtns>
        {props.tags && props.tags.map(tag => (

            <Tag>{tag}</Tag>

        ))}
    </GenreBtns>
)
export default TagComp;

const GenreBtns = styled.div`
`;

const Tag = styled.button`
    padding: 5px;
    margin: 3px 3px 3px 0;
    border-radius: 14px;
    min-width: 50px;
    min-height: 25px;
    background-color: #26262c;
    border: 1px solid #26262c;
    color: #C2C1C0;
    font-weight: bold;
    font-size: 12px;
    text-shadow: 0.5px 0.5px #A6A5A4;
`