import React from 'react'
import styled from 'styled-components';
import { Cambria } from '../styles/type';

class Footer extends React.Component {
    render() {
        return (
            <FooterBody>
                <FooterText>Copyright 2019 &copy; Georgeygigz</FooterText>
            </FooterBody>
        )
    }
}

export const FooterBody = styled.div`
    background: #363636;
    height: 60px;
`;

export const FooterText = styled.p`
    color: #fff;
    padding-top: 20px;
    margin: 0;
    text-align: center;
    font-size: 14px;
    font-family: ${Cambria};
`;



export default Footer;