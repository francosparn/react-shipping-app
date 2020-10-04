import React from 'react';
import styled from '@emotion/styled';

const Copy = styled.footer`
    font-weight: 600;
    text-align: center;
    text-transform: uppercase;
    font-size: .8rem;
    margin: 1rem;
    color: #333;
`;

const Author = styled.span`
    color: rgba(117, 7, 219, 0.986);
`;

const Footer = () => {
    return ( 
        <Copy>Developed by <Author>Franco Sparn</Author> &copy; 2020</Copy>
     );
}
 
export default Footer;