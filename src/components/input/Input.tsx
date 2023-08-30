import styled from "styled-components";
import { theme } from "@/styles/theme";

const BasicInput = styled.input`
    height: 32px;
    width: ${(props) => props.width ?? "100%"};
    font-size: 14px;
    border-radius: 4px;
    border: 1px solid #d6dbe4;
    transition: all ease 0.1s;

    &::placeholder {
        color: #d5d5d5;
    }

    &:focus {
        outline: none;
        border: 1px solid ${theme.colors.warning};
        box-shadow: 0 0 2px ${theme.colors.warning};
    }
`;

const Input = ({ children, placeholder, ...rest }) => {
    return (
        <BasicInput placeholder={placeholder} {...rest}>
            {children}
        </BasicInput>
    );
};

export default Input;
