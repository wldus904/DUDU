import styled, { StyledComponent } from "styled-components";
import Login from "./login";

const CompleteWrapper = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: #fafafa;
`;

const RegistrationCompleted = () => {
    return (
        <CompleteWrapper>
            회원가입 완료
            <Login />
        </CompleteWrapper>
    );
};

export default RegistrationCompleted;
