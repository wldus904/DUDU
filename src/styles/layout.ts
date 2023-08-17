import styled from "styled-components";

const LayoutBox = styled.div`
    height: 100vh;
    display: flex;
`;
const SideMenuBox = styled.div`
    width: 260px;
`;
const MainBox = styled.div`
    position: relative;
    width: 100vw;
    height: 100%;
    overflow-y: auto;
    &::-webkit-scrollbar {
        width: 15px; /* 스크롤바의 너비 */
    }
`;
const Contents = styled.div`
    position: relative;
    min-height: calc(100vh - 100px); // view height - (header + footer)
`;

export { LayoutBox, SideMenuBox, MainBox, Contents };
