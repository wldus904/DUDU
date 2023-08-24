import styled from "styled-components";

const LayoutWrapper = styled.div`
    height: 100vh;
    overflow-y: auto;
    &::-webkit-scrollbar {
        width: 15px; /* 스크롤바의 너비 */
    }
`;

const OverLay = styled.div`
    position: fixed;
    height: 100%;
    width: 100%;
    z-index: -1;
    transition-property: z-index, background-color;
    transition-duration: 0s, 0.1s;
    transition-delay: 0.2s, 0s;

    &.on {
        z-index: 2;
        background-color: rgba(0, 0, 0, 0.2);
        transition-property: z-index, background-color;
        transition-duration: 0s, 0.3s;
        transition-delay: 0s;
    }
`;

const LayoutBox = styled.div`
    height: 100%;
    display: flex;
`;
const SideMenuBox = styled.div`
    position: absolute;
    width: 260px;
    top: 0;
    left: -260px;
    z-index: 2;
    background-color: #fff;
    -webkit-transition: left 0.3s;
    -moz-transition: left 0.3s;
    -ms-transition: left 0.3s;
    -o-transition: left 0.3s;
    transition: left 0.3s;

    &.on {
        left: 0px;
    }
`;
const MainBox = styled.div`
    position: relative;
    width: 100vw;
    height: 100%;
    padding: 20px 50px 0;
`;
const Contents = styled.div`
    position: relative;
    min-height: calc(100vh - 100px); // view height - (header + footer)
`;

export { LayoutWrapper, OverLay, LayoutBox, SideMenuBox, MainBox, Contents };
