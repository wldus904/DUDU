import styled from "styled-components";
import { theme } from "@/styles/theme";

const hexToRgb = (hexType: String = "primary", alpha: Number = 1) => {
    if (theme.colors[hexType]) hexType = theme.colors[hexType];
    const hex = hexType.trim().replace("#", "");
    const rgb = 3 === hex.length ? hex.match(/[a-f\d]/gi) : hex.match(/[a-f\d]{2}/gi);

    rgb.forEach(function (str, x, arr) {
        if (str.length == 1) str = str + str;
        arr[x] = parseInt(str, 16);
    });

    return `rgba(${rgb.join(", ")}, ${alpha})`;
};

const DefaultButton = styled.button`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    outline: none;
    border-radius: 3px;
    font-weight: bold;
    cursor: pointer;
    padding-left: 1rem;
    padding-right: 1rem;
    transition: all ease 0.2s;

    /*크기*/
    height: 2.25rem;
    width: ${(props) => props.width ?? "100%"};
    font-size: 1rem;
`;

const BasicButton = styled(DefaultButton)`
    border: none;
    color: ${(props) => props.txtColor ?? "#fff"};

    /*색상 */
    background-color: ${(props) => hexToRgb(props.color)};
    &:hover {
        background: ${(props) => hexToRgb(props.color, "0.9")};
    }
    &:active {
        background: ${(props) => hexToRgb(props.color, "1")};
    }
`;

const OutlineButton = styled(DefaultButton)`
    border: 1px solid ${(props) => hexToRgb(props.color)};
    color: ${(props) => props.txtColor ?? hexToRgb(props.color)};

    /*색상 */
    background: #fff;
    &:hover {
        background: ${(props) => hexToRgb(props.color, "0.1")};
    }
    &:active {
        background: ${(props) => hexToRgb(props.color, "0.2")};
    }
`;

const Button = ({ children, ...rest }) => {
    if (rest.outline) return <OutlineButton {...rest}>{children}</OutlineButton>;
    else return <BasicButton {...rest}>{children}</BasicButton>;
};

export default Button;
