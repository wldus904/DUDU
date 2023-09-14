import styled from "styled-components";
import { theme } from "@/styles/theme";
import { useState } from "react";

const TextBoxWrapper = styled.div`
    display: flex;
    align-items: center;
    border-radius: 4px;
    border: 1px solid #d6dbe4;
    padding: 0 5px;
    transition: all ease 0.2s;

    &:focus-within {
        border: 1px solid ${theme.colors.warning};
        box-shadow: 0 0 2px ${theme.colors.warning};
    }

    &.invalid {
        border: 1px solid ${theme.colors.error};
        box-shadow: 0 0 2px ${theme.colors.error};
    }
`;

const BasicTextBox = styled.input`
    height: 32px;
    width: ${(props) => props.width ?? "100%"};
    font-size: 14px;
    border: none;

    &::placeholder {
        color: #d5d5d5;
    }

    &:focus {
        outline: none;
    }
`;

const TextBox = ({ children, placeholder, rules, ...rest }) => {
    const [isValid, setIsValid] = useState(true);

    const checkValid = (value) => {
        let res = true;

        rules.forEach((validator) => {
            if (!validator(value)) res = false;
        });

        setIsValid(res);
        rest.setValid(isValid);
    };

    return (
        <TextBoxWrapper className={isValid ? "" : "invalid"}>
            <BasicTextBox
                onBlur={(e) => checkValid(e.target.value)}
                placeholder={placeholder}
                {...rest}
                type="text"
            >
                {children}
            </BasicTextBox>
        </TextBoxWrapper>
    );
};

export default TextBox;
