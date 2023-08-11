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
`;
