import React from "react";
import styled, { useTheme } from "styled-components";
import { useRouter } from "next/router";
import { useEffect, use, useRef } from "react";
import { theme } from "@/styles/theme";

const Button = styled.a`
    max-width: 190px;
    padding: 15px;
    transition: all ease 200ms 0s;
    border-radius: 3px;

    &:hover {
        color: ${theme.colors.primary};
        background-color: ${theme.colors.lightprimary};
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
