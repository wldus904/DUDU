import styled from "styled-components";
import { theme } from "@/styles/theme";

const CardWrapper = styled.div`
    padding: 10px;
    background-color: #fff;
    @media ${theme.device.mobile} {
        background-color: yellow;
    }
`;

const Card = ({ children, ...rest }) => {
    return <CardWrapper {...rest}>{children}</CardWrapper>;
};

export default Card;
