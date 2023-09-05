import styled from "styled-components";

const BasicSelectBox = styled.select`
    border: 1px solid #d6dbe4;
`;

const Option = styled.option`
    font-size: 12px;
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
