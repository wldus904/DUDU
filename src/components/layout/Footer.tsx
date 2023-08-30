import React from "react";
import styled from "styled-components";

const FooterBox = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    // position: relative;
    // transform: translateY(100vh);
`;

const Footer = () => (
    <FooterBox>
        <span>Made by jypark2781@gmail.com</span>
    </FooterBox>
);

export default Footer;
