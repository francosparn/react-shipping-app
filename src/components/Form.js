import React, { useState } from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { calculateProvince, calculateWeight, getPlan } from '../helpers';

const HeaderTitle = styled.h2`
    text-transform: uppercase;
    font-size: 1.5rem;
    text-align: center;
    margin-top: .5rem;
    margin-bottom: 1rem;
`;

const Titles = styled.h3`
    text-transform: uppercase;
    font-size: 1.4rem;
`;

const General = styled.label`
    display: inline-block;
    align-content: center;
    font-size: .9rem;
    font-weight: 0;
    text-transform: uppercase;
`;

const Label = styled.label`
    color: rgb(158, 157, 157);
    font-size: .8rem;
`;

const Input = styled.input`
    margin-top: 10px;
    margin-right: 15px;
    padding-left: 10px;
    height: 35px;
    width: 168px;
    border: none;
    border-bottom: 2px solid rgba(117, 7, 219, 0.986);
    border-radius: 2px;
    background-color: rgb(251, 251, 251);
    font-size: .9rem;

    @media(max-width: 649px){
            width: 90%;
            margin-right: 18px;
    }

    @media(max-width: 480px){
            width: 380px;
            margin-bottom: 15px;
    }

    @media(max-width: 460px){
            width: 360px;
    }

    @media(max-width: 440px){
            width: 340px;
    }

    @media(max-width: 420px){
            width: 315px;
    }

    @media(max-width: 380px){
            width: 280px;
    }

    @media(max-width: 360px){
            width: 260px;
    }
`;

const Button = styled.button`
    background-color: rgba(117, 7, 219, 0.986);
    border: none;
    border-radius: 2rem;
    cursor: pointer;
    height: 50px;
    width: 180px;
    font-weight: 600;
    font-size: 1rem;
    display: block;
    margin-left: auto;
    margin-right: auto;
    color: #FFF;
    transition: background-color .3s ease;
    outline: none;
    &:hover{
        background-color: rgba(86, 8, 160, 0.986);
    }
`;

const ShippingDescription = styled.div`
    background-color: rgb(243, 243, 243);
    border: 1px solid rgb(218, 218, 218);
    text-align: center;
    padding: 2px;
    margin-top: 10px;
    margin-bottom: 20px;
    margin-right: 15px;
    border-radius: 4px;
    font-size: .9rem;

    @media(max-width: 420px){
        font-size: .8rem;
    }

    @media(max-width: 380px){
        font-size: .7rem;
    }

    @media(max-width: 360px){
        font-size: .7rem;
    }
`;

const Select = styled.select`
    height: 40px;
    background-color: rgb(251, 251, 251);
    border: none;
    border-bottom: 2px solid rgba(117, 7, 219, 0.986);
    font-size: .9rem;
    padding-left: 5px;
    margin-top: 10px;
    margin-right: 14px;
    margin-bottom: 15px;
    width: 278px;

    @media(max-width: 649px){
            width: 275px;
    }

    @media(max-width: 480px){
            width: 390px;
            margin-bottom: 15px;
    }

    @media(max-width: 460px){
            width: 370px;
    }

    @media(max-width: 440px){
            width: 350px;
    }

    @media(max-width: 420px){
            width: 325px;
    }

    @media(max-width: 380px){
            width: 290px;
    }

    @media(max-width: 360px){
            width: 270px;
    }
`;

const SendTitle = styled.label`
    color: rgb(158, 157, 157);
    text-transform: uppercase;
    font-size: .8rem;
`;

const SendOptions = styled.div`
    margin-top: 10px;
    margin-bottom: 15px;
    font-size: .9rem;
`;

const Error = styled.div`
    background-color: rgba(240, 180, 180, 0.719);
    border: 1px solid rgb(226, 54, 54);
    border-radius: 5px;
    color: rgb(172, 31, 31);
    font-weight: 600;
    font-size: .9rem;
    padding: .8rem;
    width: 80%;
    margin: 0 auto;
    text-align: center;
`;

const Form = ({ saveSummary, saveLoading }) => {

    // Define states
    const [ data, saveData ] = useState({
        address: '',
        numberAddress: '',
        postalCode: '',
        province: '',
        weight: '',
        plan: ''
    });

    const [ error, saveError ] = useState(false);

    // Extract values from state
    const { address, numberAddress, postalCode, province, weight, plan } = data;

    // Read the form data and put it in the state
    const getInfo = e => {
        saveData({
            ...data,
            [e.target.name] : e.target.value
        })
    }

    // When the user presses the submit button
    const calculateShipping = e => {
        e.preventDefault();

        // Form validation
        if(address.trim() === ''){
            saveError(true);
            return;
        }

        if(numberAddress.trim() === '' || isNaN(numberAddress)){
            saveError(true);
            return;
        }

        if(postalCode.trim() === '' || isNaN(postalCode)){
            saveError(true);
            return;
        }

        if(province.trim() === '' || province === 'Seleccione la provincia de destino'){
            saveError(true);
            return;
        }

        if(weight.trim() === '' || weight === 'Seleccione el peso aproximado'){
            saveError(true);
            return;
        }
        
        if(plan.trim() === ''){
            saveError(true);
            return;
        }

        saveError(false);

        // Base = $300
        let result = 300;

        // According to the selected province, the price will modify
        result = calculateProvince(province) * result;

        // The heavier the package to be sent, the more expensive the shipping cost will be
        const incrementWeight = calculateWeight(weight);
        result = incrementWeight * result;

        // Normal Plan 10% surcharge, Express Plan 35% surcharge
        const incrementPlan = getPlan(plan);
        result = parseFloat( incrementPlan * result ).toFixed(2);

        saveLoading(true);

        setTimeout(() => {

            // Delete spinner
            saveLoading(false);

            // Send information to main component
            saveSummary({
                cost: Number(result),
                data: data
            });

        }, 3000);    
    }

    return ( 
        <form
            onSubmit={calculateShipping}
        >
            <HeaderTitle>Calcula tu envío</HeaderTitle>

            { error ? <Error>Hubo un error al enviar el formulario. Revise y complete todos los campos e intente enviar el formulario nuevamente.</Error> : null }

        <General>
        <Titles>Origen</Titles>
            <div>
                <Label>Dirección</Label>
            </div>
            <Input 
                type="text"
                name="address"
                placeholder="Ej: Urquiza"
                value={address}
                onChange={getInfo}
            />
        </General>
        <General>
            <div>
                <Label>Altura</Label>
            </div>
            <Input 
                type="text"
                name="numberAddress"
                placeholder="Ej: 500"
                value={numberAddress}
                onChange={getInfo}
            />
        </General>
        <General>
            <div>
                <Label>Código Postal</Label>
            </div>
            <Input 
                type="text"
                name="postalCode"
                placeholder="Ej: 2000"
                value={postalCode}
                onChange={getInfo}
            />
        </General>
        <General>
            <Titles>Destino</Titles>
            <div>
                <Label>Provincia</Label>
            </div>
                <Select 
                    name="province"
                    defaultValue={province}
                    onChange={getInfo}
                >
                    <option defaultValue="">Seleccione la provincia de destino</option>
                    <option value="Buenos Aires">Buenos Aires</option>
                    <option value="Catamarca">Catamarca</option>
                    <option value="Chaco">Chaco</option>
                    <option value="Chubut">Chubut</option>
                    <option value="Cordoba">Córdoba</option>
                    <option value="Corrientes">Corrientes</option>
                    <option value="Entre Rios">Entre Ríos</option>
                    <option value="Formosa">Formosa</option>
                    <option value="Jujuy">Jujuy</option>
                    <option value="La Pampa">La Pampa</option>
                    <option value="Mendoza">Mendoza</option>
                    <option value="Misiones">Misiones</option>
                    <option value="Neuquen">Neuquén</option>
                    <option value="Rio Negro">Río Negro</option>
                    <option value="Salta">Salta</option>
                    <option value="San Juan">San Juan</option>
                    <option value="San Luis">San Luis</option>
                    <option value="Santa Cruz">Santa Cruz</option>
                    <option value="Santa Fe">Santa Fe</option>
                    <option value="Santiago del Estero">Santiago del Estero</option>
                    <option value="Tierra del Fuego">Tierra del Fuego</option>
                    <option value="Tucuman">Tucumán</option>
                </Select>
        </General>
        <General>
            <div>
                <Label>Peso</Label>
            </div>
                <Select 
                    name="weight"
                    defaultValue={weight}
                    onChange={getInfo}
                >
                    <option defaultValue="">Seleccione el peso aproximado</option>
                    <option value="0-4">Entre 0 y 4 Kg</option>
                    <option value="5-9">Entre 5 y 9 Kg</option>
                    <option value="10-14">Entre 10 y 14 Kg</option>
                    <option value="15-19">Entre 15 y 19 Kg</option>
                    <option value="20-24">Entre 20 y 24 Kg</option>
                    <option value="25-29">Entre 25 y 29 Kg</option>
                    <option value="30-50">Entre 30 y 50 Kg</option>
                </Select>
        </General>
            <div>
                <SendTitle>Tipo de Envío</SendTitle>
            </div>
            <SendOptions>
                <input 
                    type="radio"
                    name="plan"
                    value="normal"
                    defaultChecked={plan === "normal"}
                    onChange={getInfo}
                /> Normal
                
                <input 
                    type="radio"
                    name="plan"
                    value="express"
                    defaultChecked={plan === "express"}
                    onChange={getInfo}
                /> Express
            </SendOptions>

        <ShippingDescription>
            <p>El envío <b>Normal</b> tiene una demora de 72hs hábiles.</p>
            <p>El envió <b>Express</b> tiene una demora de 24hs hábiles.</p>
        </ShippingDescription>
        <div>
            <Button type="submit">Calcular</Button>
        </div>
        </form>
     );
}

Form.propTypes = {
    saveSummary: PropTypes.func.isRequired,
    saveLoading: PropTypes.func.isRequired
}
 
export default Form;
