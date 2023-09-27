import styled from "styled-components";
import { theme } from "@/styles/theme";

const CardWrapper = styled.div`
    padding: 10px;
    background-color: #fff;
`;

const Card = ({ children, ...rest }) => {
    return <CardWrapper {...rest}>{children}</CardWrapper>;
};

export default Card;
