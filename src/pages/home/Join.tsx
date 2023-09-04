import { useState } from "react";
import styled from "styled-components";
import TextBox from "@/components/input/TextBox";
import MainIcon from "@/components/icon/MainIcon";
import RadioGroup from "@/components/input/RadioGroup";
import DatePicker from "@/components/date/DatePicker";

const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: #fafafa;
`;

const MainIconBox = styled.div`
    margin-bottom: 20px;
`;

const InputBox = styled.div`
    max-width: 400px;
    padding: 20px;
    background-color: #fff;
    box-shadow: 0 0 4px #d6dbe4;

    input[type="text"] {
        margin-bottom: 5px;
    }
`;

const AdditionalInfoBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const BirthDayBox = styled.div`
    min-width: 120px;
`;

// 1. 입력 항목: 이메일, 비밀번호, 이름, 성별, 생일
const Join = () => {
    const [id, setId] = useState("");
    const [pwd, setPwd] = useState("");
    const [name, setName] = useState("");
    const [gender, setGender] = useState("M");
    const [birthDay, setBirthDay] = useState("");
    const radios = [
        { label: "남자", value: "M", defaultChecked: true },
        { label: "여자", value: "W" },
    ];

    return (
        <InputWrapper>
            <InputBox>
                <MainIconBox>
                    <MainIcon />
                </MainIconBox>
                <TextBox
                    placeholder="이메일"
                    value={id}
                    width="98%"
                    onChange={(e) => setId(e.target.value)}
                />
                <TextBox
                    placeholder="비밀번호"
                    value={pwd}
                    width="98%"
                    onChange={(e) => setPwd(e.target.value)}
                />
                <TextBox
                    placeholder="이름"
                    value={name}
                    width="98%"
                    onChange={(e) => setName(e.target.value)}
                />
                <AdditionalInfoBox>
                    <RadioGroup
                        radios={radios}
                        leftTitle="성별"
                        groupName="gender"
                        setValue={(value) => setGender(value)}
                    />
                    <BirthDayBox>
                        <DatePicker setValue={setBirthDay} />
                    </BirthDayBox>
                </AdditionalInfoBox>
            </InputBox>
        </InputWrapper>
    );
};

export default Join;
