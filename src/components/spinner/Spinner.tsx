import styled, { keyframes } from "styled-components";

const spinnerKeyframe = keyframes`
    100%
    {
    transform: rotate(360deg);
    }
`;

const DefaultSpinner = styled.div`
    margin: calc(50% - 25px) auto;
    width: ${(props) => props.size};
    height: ${(props) => props.size};
    border: 3px solid rgba(255, 255, 255, 0.3);
    box-sizing: border-box;
    border-top-color: white;
    border-radius: 100%;
    animation: ${spinnerKeyframe} 1s ease-in-out infinite;
`;

const Spinner = ({ ...rest }) => {
    return <DefaultSpinner {...rest}></DefaultSpinner>;
};

export default Spinner;
