import React from "react";
import styled, { StyledInterface } from "styled-components";
import { NextRouter, useRouter } from "next/router";

const IconBox: StyledInterface = styled.a`
    display: block;
    font-size: 30px;
    font-color: #49497c;
    font-weight: 700;
`;

const MainIcon = ({ ...rest }): JSX.Element => {
    const router: NextRouter = useRouter();
    const clickHandler = (e: MouseEvent) => {
        e.preventDefault();
        router.push("/");
    };

    return (
        <IconBox href="/" {...rest} onClick={clickHandler}>
            DUDU
        </IconBox>
    );
};
export default MainIcon;
