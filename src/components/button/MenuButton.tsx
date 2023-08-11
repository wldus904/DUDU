import React from "react";
import styled from "styled-components";

const Button = styled.a`
    width: 200px;
    padding: 15px;
    transition: all ease 500ms 0s;

    &:hover {
        color: ${({ theme }) => theme.colors.primary};
        background-color: ${({ theme }) => theme.colors.lightprimary};
    }
`;

const MenuButton = ({ children, ...rest }) => {
    return <Button {...rest}>{children}</Button>;
};

export default MenuButton;
