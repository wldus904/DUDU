import styled from "styled-components";

const LayoutBox = styled.div`
    display: flex;
`;
const SideMenuBox = styled.div`
    width: 260px;
`;
const MainBox = styled.div`
    position: relative;
    width: 100vw;
`;
const Contents = styled.div`
    position: relative;
    min-height: calc(100vh - 100px); // view height - (header + footer)
`;

export { LayoutBox, SideMenuBox, MainBox, Contents };
