import React from "react";
import styled from "styled-components";
import { BsList } from "react-icons/bs";
import { useState } from "react";

const HeaderBox = styled.header`
    position: sticky;
    display: flex;
    align-items: center;
    width: calc(100% - 20px);
    height: 70px;
    padding: 0 10px;
    top: 0;
    background-color: #fff;
    z-index: 1;

    .menu-icon-btn {
        color: #5a6a85;
        width: 22px;
        height: 22px;
        padding: 5px;
        border-radius: 15px;
        cursor: pointer;

        &:hover {
            background-color: #f5f8ff;
        }
    }
`;

const Header = (props) => {
    return (
        <HeaderBox>
            <BsList onClick={() => props.toggleMenu()} className="menu-icon-btn" />
        </HeaderBox>
    );
};

export default Header;
