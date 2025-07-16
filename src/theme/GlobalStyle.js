

import { createGlobalStyle } from "styled-components";
import reset from 'styled-components';


const GlobalStyle = createGlobalStyle`

    ${reset};

  body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: props => props.theme.colors.background};
    color: props => props.theme.colors.text};
    line-height: 1.6;
    min-height: 100vh;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    font-family: inherit;
  }
`;

export default GlobalStyle;
