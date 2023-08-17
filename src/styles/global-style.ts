// 전역에서 사용할 스타일
import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

export const GlobalStyle = createGlobalStyle`
    ${normalize}
    html {
      box-sizing: border-box;
      color: #2a3547;
    }

    a { 
      cursor: pointer; 
      text-decoration: none; 
      &:link { color: #2a3547; text-decoration: non; }
      &:visited { color: #2a3547; text-decoration: non; }
      &:hover { color: #2a3547; text-decoration: non; }
    }

    &::-webkit-scrollbar {
        width: 10px; /* 스크롤바의 너비 */
    }
    &::-webkit-scrollbar-thumb {
        height: 10%; /* 스크롤바의 길이 */
        background: #d6dbe4; /* 스크롤바의 색상 */
        background-clip: padding-box;
        border: 2px solid transparent;
        border-radius: 2px;
        &:hover {
          background-color: #c1c6cd;
        }
    }
    &::-webkit-scrollbar-track {
        background: #fff; /*스크롤바 뒷 배경 색상*/
        &:hover {
          background-color: #f2f5fa;
        }
    }
`;
