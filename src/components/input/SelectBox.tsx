import styled from "styled-components";

const BasicSelectBox = styled.select`
    height: 32px;
    min-width: ${(props) => props.width ?? "70px"};
    border-radius: 4px;
    border: 1px solid #d6dbe4;
    padding: 0 10px 0 5px;
    cursor: pointer;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    text-align: center;
`;

const Option = styled.option`
    font-size: 14px;
`;

const SelectBox = ({ options, ...rest }) => {
    return (
        <BasicSelectBox {...rest}>
            {options.map((option) => {
                return (
                    <Option value={option.value ?? option} key={option.value ?? option}>
                        {option.title ?? option}
                    </Option>
                );
            })}
        </BasicSelectBox>
    );
};

export default SelectBox;
