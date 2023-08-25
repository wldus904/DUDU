import styled from "styled-components";
import { useState } from "react";
import Button from "@/components/button/Button";
import Input from "@/components/input/Input";
import MainIcon from "@/components/icon/MainIcon";
import { theme } from "@/styles/theme";
import { useRouter } from "next/router";

const LoginWrapper = styled.div`
    display: flex;
    position: absolute;
    justify-content: center;
    align-items: center;
    padding: 15px 0;
    width: 100%;
    height: 100%;
    background-color: ${theme.colors.lightwarning};
`;

const LoginBox = styled.div`
    max-width: 300px;
    padding: 20px;
    background-color: #fff;
`;

const MainIconBox = styled.div`
    text-align: center;
    margin-bottom: 20px;
`;

const InputBox = styled.div`
    input {
        &:first-child {
            margin-bottom: 5px;
        }
    }
`;

const WarningMsg = styled.div`
    display: flex;
    align-items: center;
    min-height: 35px;
    color: ${theme.colors.error};
`;

const Login = () => {
    const router = useRouter();
    const [idValue, setIdValue] = useState("");
    const [pwdValue, setPwdValue] = useState("");
    const [msg, setMsg] = useState("");

    const setValue = (e, ref) => {
        ref.current = e.target.value;
    };

    const startLogin = () => {
        if (idValue === "test" && pwdValue === "test") {
            setMsg("");
            localStorage.setItem("user", "abcd1234");
            router.push("/main/dashboard");
        } else {
            setMsg("아이디 또는 비밀번호를 잘못 입력했습니다");
        }
    };

    return (
        <LoginWrapper>
            <LoginBox>
                <MainIconBox>
                    <MainIcon />
                </MainIconBox>
                <InputBox>
                    <Input
                        type="text"
                        value={idValue}
                        width="98%"
                        onChange={(e) => setIdValue(e.target.value)}
                    />
                    <Input
                        type="password"
                        value={pwdValue}
                        width="98%"
                        onChange={(e) => setPwdValue(e.target.value)}
                    />
                </InputBox>
                <WarningMsg>{msg}</WarningMsg>
                <Button color="error" onClick={startLogin}>
                    로그인
                </Button>
            </LoginBox>
        </LoginWrapper>
    );
};

export default Login;
