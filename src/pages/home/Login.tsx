import styled from "styled-components";
import { useState } from "react";
import Button from "@/components/button/Button";

const LoginWrapper = styled.div`
    background-color: skyblue;
`;
const Input = styled.input`
    font-size: 12px;
`;

const Login = () => {
    const [idValue, setIdValue] = useState("");
    const [pwdValue, setPwdValue] = useState("");

    const setValue = (e, ref) => {
        ref.current = e.target.value;
    };

    const startLogin = () => {
        console.log("idValue ::: ", idValue);
        console.log("pwdValue ::: ", pwdValue);
    };

    return (
        <LoginWrapper>
            <h1>LOGIN</h1>
            <Input type="text" value={idValue} onChange={(e) => setIdValue(e.target.value)} />
            <Input type="text" value={pwdValue} onChange={(e) => setPwdValue(e.target.value)} />
            <Button large onClick={startLogin}>
                login
            </Button>
        </LoginWrapper>
    );
};

export default Login;
