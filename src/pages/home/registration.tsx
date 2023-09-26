import { useState, useEffect } from "react";
import styled from "styled-components";
import TextBox from "@/components/input/TextBox";
import Password from "@/components/input/Password";
import MainIcon from "@/components/icon/MainIcon";
import RadioGroup from "@/components/input/RadioGroup";
import DatePicker from "@/components/date/DatePicker";
import Button from "@/components/button/Button";
import Complete from "./registrationCompleted";
import { required, phoneNumberValidator, emailValidator, passwordValidator } from "@/utils/valid";
import * as registrationApi from "@/apis/user/registration.ts";
import { useRouter } from "next/router";

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

const InputBox = styled.form`
    max-width: 400px;
    min-width: 300px;
    padding: 20px;
    background-color: #fff;
    box-shadow: 0 0 4px #d6dbe4;
`;

const OptionBox = styled.div`
    ${(props) => (props.flex ? "display: flex; align-items: center;" : "")}
    margin-bottom: 5px;
`;

const Title = styled.div`
    min-width: 70px;
`;

const Registration = () => {
    const router = useRouter();
    const [email, setEmail] = useState();
    const [phoneNumber, setPhoneNumber] = useState();
    const [pwd, setPwd] = useState();
    const [checkPwd, setCheckPwd] = useState();
    const [name, setName] = useState();
    const [gender, setGender] = useState();
    const [birthDay, setBirthDay] = useState();
    const [isValid, setIsValid] = useState(false);
    const [optionValid, setOptionValid] = useState({
        email: false,
        phoneNumber: false,
        pwd: false,
        checkPwd: false,
        name: false,
        gender: true,
        birthDay: false,
    });
    const [loading, setLoading] = useState(false);
    const radios = [
        { label: "남자", value: "M", defaultChecked: true },
        { label: "여자", value: "W" },
    ];

    useEffect(() => {
        let res = true;
        Object.keys(optionValid).forEach((valid) => {
            if (!optionValid[valid]) {
                res = false;
            }
        });
        setIsValid(res);
    }, [optionValid]);

    const userRegistration = async () => {
        setLoading(true);
        // await registrationApi.postRegistration({
        //     email,
        //     phoneNumber,
        //     pwd,
        //     name,
        //     gender,
        //     birthDay,
        // });
        router.replace("/home/registrationCompleted");
    };

    const checkPwdValidator = () => {
        return pwd === checkPwd;
    };

    return (
        <InputWrapper>
            <InputBox>
                <MainIconBox>
                    <MainIcon />
                </MainIconBox>
                <OptionBox>
                    <TextBox
                        placeholder="이메일"
                        rules={[required, emailValidator]}
                        value={email}
                        width="98%"
                        onChange={(e) => setEmail(e.target.value)}
                        setValid={(value) => {
                            setOptionValid({ ...optionValid, email: value });
                        }}
                        autoComplete="off"
                        isSelect
                    />
                </OptionBox>
                <OptionBox>
                    <Password
                        placeholder="비밀번호"
                        rules={[required, passwordValidator]}
                        value={pwd}
                        width="98%"
                        onChange={(e) => setPwd(e.target.value)}
                        setValid={(value) => {
                            setOptionValid({ ...optionValid, pwd: value });
                        }}
                        isSelect
                    />
                </OptionBox>
                <OptionBox>
                    <Password
                        placeholder="비밀번호 확인"
                        rules={[required, passwordValidator, checkPwdValidator]}
                        value={checkPwd}
                        width="98%"
                        onChange={(e) => setCheckPwd(e.target.value)}
                        setValid={(value) => {
                            setOptionValid({ ...optionValid, checkPwd: value });
                        }}
                        isSelect
                    />
                </OptionBox>
                <OptionBox>
                    <TextBox
                        placeholder="이름"
                        rules={[required]}
                        value={name}
                        width="98%"
                        onChange={(e) => setName(e.target.value)}
                        setValid={(value) => {
                            setOptionValid({ ...optionValid, name: value });
                        }}
                        autoComplete="off"
                        isSelect
                    />
                </OptionBox>
                <OptionBox>
                    <TextBox
                        placeholder="전화번호"
                        rules={[required, phoneNumberValidator]}
                        value={phoneNumber}
                        width="98%"
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        setValid={(value) => {
                            setOptionValid({ ...optionValid, phoneNumber: value });
                        }}
                        autoComplete="off"
                        isSelect
                    />
                </OptionBox>
                <OptionBox flex>
                    <Title>성별</Title>
                    <RadioGroup
                        radios={radios}
                        rules={[required]}
                        groupName="gender"
                        setValue={(value) => setGender(value)}
                        setValid={(value) => {
                            setOptionValid({ ...optionValid, gender: value });
                        }}
                    />
                </OptionBox>
                <OptionBox flex>
                    <Title>생년월일</Title>
                    <DatePicker
                        setValue={setBirthDay}
                        rules={[required]}
                        placeholder="YYYY-MM-DD"
                        aligns="left top"
                        className="datePicker"
                        setValid={(value) => {
                            setOptionValid({ ...optionValid, birthDay: value });
                        }}
                    />
                </OptionBox>
            </InputBox>

            {/* <Button color="error" loading={loading} disabled={!isValid} onClick={userRegistration}> */}
            <Button color="error" loading={loading} disabled={false} onClick={userRegistration}>
                회원가입
            </Button>
        </InputWrapper>
    );
};

export default Registration;
