import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { upperCase } from '../helpers';

const Container = styled.div`
    background-color: rgb(251, 251, 251);
    border: 1px solid rgb(218, 218, 218); 
    border-radius: 5px;
    color: #000;
    margin-top: 1rem;
    margin-bottom: 1rem;
    font-size: .9rem;
    font-family: 'Century Gothic';
`;

const HeaderSummary = styled.div`
    background-color: rgba(117, 7, 219, 0.986);
    color: #FFF;
    padding: .1rem;
    margin-bottom: 1rem;
    text-align: center;
`;

const SummaryTitle = styled.div`
    height: 40px;
    font-size: 1.3rem;
    padding-top: 1rem;
    margin-left: .5rem;
`;

const List = styled.ul`
    margin-left: .5rem;
    margin-bottom: 15px;
    color: #333;
`;

const Li = styled.li`
    border-bottom: 1px solid rgb(218,218,218);
    padding-bottom: .5rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
    margin-right: .5rem;
`;

const Div = styled.div`
    font-size: 1.1rem;
    font-weight: 600;
    text-transform: uppercase;
`;

const Span = styled.span`
    float: right;
    margin-right: .5rem;
`;

const Message = styled.p`
    font-size: .65rem;
    font-weight: 600;
    text-align: center;
    color: rgb(100, 100, 100);
    margin: 5px;
`;

const Summary = ({ data }) => {

    // Extract data
    const { address, numberAddress, postalCode, province, weight, plan } = data;

    if(address === '' || numberAddress === '' || postalCode === '' || 
       province === '' || weight === '' || plan === '') return null;

    return ( 
        <Container>
            <HeaderSummary>
                <SummaryTitle>Resumen de Envío</SummaryTitle>
            </HeaderSummary>
            <List>

                <Div>Origen</Div>
                    <Li>
                        <img src="assets/img/pin.png" alt="" />
                            <b> Dirección</b> <Span>{ upperCase(address) }</Span>
                    </Li>
                    <Li>
                        <img src="assets/img/pin.png" alt="" />
                        <b> Altura</b> <Span>{numberAddress}</Span>
                    </Li>
                    <Li>
                        <img src="assets/img/mailbox.png" alt="" />
                        <b> Código Postal</b> <Span>{postalCode}</Span>
                    </Li>

                <Div>Destino</Div>
                    <Li>
                        <img src="assets/img/province.png" alt="" />
                        <b> Provincia</b> <Span>{province}</Span>
                        </Li>
                    <Li>
                        <img src="assets/img/weight.png" alt="" />
                        <b> Peso aproximado</b> <Span>Entre {weight} Kg</Span>
                    </Li>
                    <Li>
                        <img src="assets/img/shipping.png" alt="" />
                        <b> Tipo de Envío</b> <Span>{ upperCase(plan) }</Span>
                    </Li>

                    <Message>El resultado de "Calculá tu envío" se basa exclusivamente en la información que ingresaste en el formulario</Message>
            
            </List>
        </Container>
     );
}

Summary.propTypes = {
    data: PropTypes.object.isRequired
}
 
export default Summary;