import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const Message = styled.div`
    text-align: center;
    font-size: .8rem;
    font-weight: 600;
    color: rgb(100, 100, 100);
    margin-top: 20px;
`;

const Cost = styled.p`
    margin: 0 auto;
    padding: 1rem;
    border: 1px solid rgba(117, 7, 219, 0.986);
    color: rgb(140, 140, 140);
    text-align: center;
    font-size: 1rem;
    font-weight: 600;
    border-radius: 3rem;
    width: 220px;
    cursor: pointer;
    transition: ease .3s;
    &:hover{
        background-color: rgba(74, 26, 163, 0.849);
        color: #FFF;
    }
`;

const Result = ({ cost }) => {

    return(
        (cost === 0)
        ? <Message>Complete el formulario y calcule el costo de envio</Message>
        : 
        <Cost>Precio final: ${cost}</Cost>
    );
}

Result.propTypes = {
    cost: PropTypes.number.isRequired
}
 
export default Result;