import React from 'react';
import styled from '@emotion/styled';
import myImage from '../logo.png';
import PropTypes from 'prop-types';

const HeaderContainer = styled.header`
    background-color: rgba(117, 7, 219, 0.986);
    padding: 10px;
    font-weight: 600;
    color: #FFF;
`;

const HeaderText = styled.h1`
    font-size: 2rem;
    margin: 0;
    font-family: 'Roboto', sans-serif;
    text-align: center;
`;

const HeaderImage = styled.div`
    position: relative;
    display: inline-block;
    background-image: url(${myImage});
    background-repeat: no-repeat;
    margin-right: 5px;
    width: 35px;
    height: 27px;
`;

const Header = ({ title }) => {
    return ( 
        <HeaderContainer>
            <HeaderText>
                <HeaderImage src={myImage} />
                {title}
            </HeaderText>
        </HeaderContainer>
     );
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}
 
export default Header;