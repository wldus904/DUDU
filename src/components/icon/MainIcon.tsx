import React from "react";
import styled from "styled-components";
import { useRouter } from "next/router";

const IconBox = styled.a`
    display: block;
    width: 100%;
    font-size: 30px;
    font-color: #49497c;
    font-weight: 700;
    padding: ${(props) => props.padding};
`;

const MainIcon = ({ ...rest }) => {
    const router = useRouter();
    const clickHandler = (e) => {
        e.preventDefault();
        router.push("/");
    };

    return (
        <IconBox href="/" {...rest} onClick={clickHandler}>
            DUDE
        </IconBox>
    );
};
export default MainIcon;
