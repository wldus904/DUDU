import { useState } from "react";
import styled from "styled-components";
import Input from "@/components/input/Input";
import MainIcon from "@/components/icon/MainIcon";

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
`;

// 1. 입력 항목: 이메일, 비밀번호, 이름, 성별, 나이
const Join = () => {
    const [id, setId] = useState("");
    const [pwd, setPwd] = useState("");

    return (
        <InputWrapper>
            <InputBox>
                <MainIconBox>
                    <MainIcon />
                </MainIconBox>
                <Input
                    type="text"
                    placeholder="이메일"
                    value={id}
                    width="98%"
                    onChange={(e) => setId(e.target.value)}
                />
                <Input
                    type="text"
                    placeholder="비밀번호"
                    value={pwd}
                    width="98%"
                    onChange={(e) => setPwd(e.target.value)}
                />
            </InputBox>
        </InputWrapper>
    );
};

export default Join;
