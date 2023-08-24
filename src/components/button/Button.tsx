import styled from "styled-components";

const DefaultButton = styled.button`
    /*공통 스타일*/
    display: inline-flex;
    align-items: center;
    outline: none;
    border: none;
    border-radius: 3px;
    color: white;
    font-weight: bold;
    cursor: pointer;
    padding-left: 1rem;
    padding-right: 1rem;

    /*크기*/
    height: 2.25rem;
    font-size: 1rem;

    /*색상 */
    background: #228be6;
    &:hover {
        background: #339af0;
    }
    &:active {
        background: #1c7ed6;
    }
`;

const OutlineButton = styled.button`
    /*공통 스타일*/
    display: inline-flex;
    align-items: center;
    outline: none;
    border: none;
    border-radius: 3px;
    color: white;
    font-weight: bold;
    cursor: pointer;
    padding-left: 1rem;
    padding-right: 1rem;

    /*크기*/
    height: 2.25rem;
    font-size: 1rem;

    /*색상 */
    &:hover {
        opacity: rgba(, 0.2);
    }
    &:active {
        background: #1c7ed6;
    }
`;

const Button = ({ children, ...rest }) => {
    const hexToRgb = (hexType) => {
        const hex = hexType.trim().replace("#", "");
        const rgb = 3 === hex.length ? hex.match(/[a-f\d]/gi) : hex.match(/[a-f\d]{2}/gi);

        rgb.forEach(function (str, x, arr) {
            if (str.length == 1) str = str + str;
            arr[x] = parseInt(str, 16);
        });

        return "rgb(" + rgb.join(", ") + ")";
    };

    console.log("rest ::: ", rest);
    return <DefaultButton {...rest}>{children}</DefaultButton>;
};

export default Button;
