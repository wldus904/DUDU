import styled from "styled-components";
import { useState } from "react";
import Button from "@/components/button/Button";
import Input from "@/components/input/Input";
import MainIcon from "@/components/icon/MainIcon";
import { theme } from "@/styles/theme";
import { useRouter } from "next/router";

const LoginWrapper = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: #fafafa;
`;

const LoginBox = styled.div`
    max-width: 300px;
    padding: 20px;
    background-color: #fff;
    box-shadow: 0 0 4px #d6dbe4;
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

const FindWrapper = styled.div`
    text-align: center;
    margin-top: 10px;
`;

const Login = () => {
    const router = useRouter();
    const [id, setId] = useState("");
    const [pwd, setPwd] = useState("");
    const [msg, setMsg] = useState("");
    const [loading, setLoading] = useState(false);
    const finds = [{ name: "회원가입", url: "/home/join" }];

    const setValue = (e, ref) => {
        ref.current = e.target.value;
    };

    const startLogin = () => {
        setLoading(true);
        setMsg("");

        if (id === "test" && pwd === "test") {
            localStorage.setItem("user", "abcd1234");
            router.push("/main/dashboard");
        } else {
            setMsg("아이디 또는 비밀번호를 잘못 입력했습니다");
            setLoading(false);
        }
    };

    const move = (e, url) => {
        e.preventDefault();
        router.push(url);
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
                        placeholder="아이디"
                        value={id}
                        width="98%"
                        onChange={(e) => setId(e.target.value)}
                    />
                    <Input
                        type="password"
                        placeholder="비밀번호"
                        value={pwd}
                        width="98%"
                        onChange={(e) => setPwd(e.target.value)}
                    />
                </InputBox>
                <WarningMsg>{msg}</WarningMsg>
                <Button color="error" loading={loading} onClick={startLogin}>
                    로그인
                </Button>
            </LoginBox>
            <FindWrapper>
                {finds.map((find) => {
                    return (
                        <a onClick={(e) => move(e, find.url)} key={find.url}>
                            {find.name}
                        </a>
                    );
                })}
            </FindWrapper>
        </LoginWrapper>
    );
};

export default Login;
