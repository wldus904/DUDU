import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import TextBox from "@/components/input/TextBox";
import Password from "@/components/input/Password";
import MainIcon from "@/components/icon/MainIcon";
import RadioGroup from "@/components/input/RadioGroup";
import DatePicker from "@/components/date/DatePicker";
import Button from "@/components/button/Button";
import DefaultDialog from "@/components/dialog/DefaultDialog";
import { required, phoneNumberValidator, emailValidator, passwordValidator } from "@/utils/valid";
import * as registrationApi from "@/apis/user/registration.ts";
import { useRouter } from "next/router";
import { BsCheck } from "react-icons/bs";

const RegistrationWrapper = styled.div`
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

const InputWrapper = styled.div`
    max-width: 400px;
    min-width: 350px;
    background-color: #fff;
    box-shadow: 0 0 4px #d6dbe4;
`;

const InputBox = styled.form`
    padding: 20px;
`;

const OptionBox = styled.div`
    ${(props) => (props.flex ? "display: flex; align-items: center;" : "")}
    margin-bottom: 5px;
`;

const OptionTitle = styled.div`
    min-width: 70px;
`;

const RegistrationCompletedBox = styled.div`
    text-align: center;

    .check-icon {
        display: block;
        width: 60px;
        height: 60px;
        margin: auto;
        border-radius: 30px;
        color: #5d87ff;
        background-color: #ecf2ff;
    }
`;

const RegistrationBoldTitle = styled.div`
    font-size: 15px;
    font-weight: 700;
    margin-top: 15px;
`;

const RegistrationContents = styled.div`
    font-size: 12px;
    font-weight: 500;
    margin-top: 15px;
    margin-bottom: 15px;
`;

const Registration = () => {
    const router = useRouter();
    const [errorMsg, setErrorMsg] = useState();
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
    const completeDialogRef = useRef();
    const errorDialogRef = useRef();
    const radios = [
        { label: "남자", value: "M", defaultChecked: true },
        { label: "여자", value: "W" },
    ];

    const validator = () => {
        let res = true;
        Object.keys(optionValid).forEach((valid) => {
            if (!optionValid[valid]) {
                res = false;
            }
        });
        setIsValid(res);
    };

    const userRegistration = async () => {
        validator();
        if (!isValid) return;

        setLoading(true);
        try {
            const res = await registrationApi.postRegistration({
                email,
                phoneNumber,
                pwd,
                name,
                gender,
                birthDay,
            });
            completeDialogRef.current.open();
        } catch (error) {
            errorDialogRef.current.open();
        }
    };

    const moveLogin = () => {
        router.replace("/home/login");
    };

    const checkPwdValidator = () => {
        return pwd === checkPwd;
    };

    const closeErrorDialog = () => {
        errorDialogRef.current.close();
    };

    useEffect(validator, [optionValid]);

    return (
        <RegistrationWrapper>
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
                        <OptionTitle>성별</OptionTitle>
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
                        <OptionTitle>생년월일</OptionTitle>
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

                <Button
                    color="primary"
                    loading={loading}
                    disabled={!isValid}
                    onClick={userRegistration}
                >
                    회원가입
                </Button>
            </InputWrapper>

            <DefaultDialog ref={completeDialogRef} width="300">
                <RegistrationCompletedBox>
                    <BsCheck className="check-icon" />
                    <RegistrationBoldTitle>회원가입 완료</RegistrationBoldTitle>
                    <RegistrationContents>
                        지금 바로 DUDU의 다양한 서비스를 체험하세요
                    </RegistrationContents>
                    <Button onClick={moveLogin} color="primary" height="40">
                        로그인
                    </Button>
                </RegistrationCompletedBox>
            </DefaultDialog>

            <DefaultDialog ref={errorDialogRef}>
                <RegistrationCompletedBox>
                    <RegistrationBoldTitle>회원가입 실패</RegistrationBoldTitle>
                    <RegistrationContents>{errorMsg}</RegistrationContents>
                    <Button onClick={closeErrorDialog} color="error">
                        확인
                    </Button>
                </RegistrationCompletedBox>
            </DefaultDialog>
        </RegistrationWrapper>
    );
};

export default Registration;
