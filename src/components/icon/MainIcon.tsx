import React from "react";
import styled from "styled-components";
import { useRouter } from "next/router";

const IconBox = styled.a`
    display: block;
    font-size: 30px;
    font-color: #49497c;
    font-weight: 700;
`;

const MainIcon = ({ ...rest }) => {
    const router = useRouter();
    const clickHandler = (e) => {
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
