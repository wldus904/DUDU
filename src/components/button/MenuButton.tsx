import React from "react";
import styled, { useTheme } from "styled-components";
import { useRouter } from "next/router";
import { useEffect, use, useRef } from "react";

const Button = styled.a`
    max-width: 190px;
    padding: 15px;
    transition: all ease 200ms 0s;
    border-radius: 3px;

    &:hover {
        color: ${({ theme }) => theme.colors.primary};
        background-color: ${({ theme }) => theme.colors.lightprimary};
    }
`;

const MenuButton = ({ children, currentPath, ...rest }) => {
    const theme = useTheme();
    const buttonRef = useRef();
    const router = useRouter();
    const buttonStyle = {};

    useEffect(() => {
        if (currentPath === rest.href) {
            buttonRef.current.style.backgroundColor = theme.colors.primary;
            buttonRef.current.style.color = "#fff";
        }
    }, [currentPath]);
    return (
        <Button ref={buttonRef} {...rest}>
            {children}
        </Button>
    );
};

export default MenuButton;
