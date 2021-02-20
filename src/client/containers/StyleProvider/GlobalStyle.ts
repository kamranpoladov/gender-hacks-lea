import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
  ${reset};

  html,
  body,
  #root {
    height: 100%;
    margin: auto;
  }

  html {
    display: table;
  }

  body {
    display: table-cell;
    vertical-align: middle;
    font-family: Roboto, Arial, sans-serif;
    min-width: 320px;
  }

  a: {
    color: inherit
  }
  
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
`;
