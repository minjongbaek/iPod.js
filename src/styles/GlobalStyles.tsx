import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    font-family: sans-serif;
    font-size: 16px;
    user-select: none;
    -webkit-touch-callout: none;
    margin: 0;
    padding: 0;
  }
`;

export default GlobalStyles;
