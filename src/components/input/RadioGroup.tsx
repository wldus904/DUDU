import styled from "styled-components";
import Radio from "./Radio";

const RadioGroupWrapper = styled.fieldset`
    display: flex;
    flex-direction: ${(props) => (props.topTitle ? "column" : "row")};
    align-items: center;
    border: none;
    padding: 0;
`;
const Title = styled.span`
    font-weight: 600p;
    margin-bottom: 3px;
    margin-right: 10px;
`;

const RadioGroupBox = styled.div`
    display: flex;
    flex-direction: row;
`;

const RadioGroup = ({ setValue, radios, topTitle, leftTitle, groupName, disabled }) => {
    const onChangeValue = (e) => {
        setValue(e.target.value);
    };

    return (
        <RadioGroupWrapper topTitle={topTitle} disabled={disabled}>
            <Title>{topTitle ?? leftTitle}</Title>
            <RadioGroupBox onChange={onChangeValue}>
                {radios.map((radio) => {
                    return (
                        <Radio
                            key={radio.value}
                            value={radio.value}
                            defaultChecked={radio.defaultChecked}
                            name={groupName}
                        >
                            {radio.label}
                        </Radio>
                    );
                })}
            </RadioGroupBox>
        </RadioGroupWrapper>
    );
};

export default RadioGroup;
