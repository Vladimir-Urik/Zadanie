import {createGlobalStyle} from 'styled-components/macro';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Albert+Sans&display=swap');
  
  body {
    margin: 0;
    padding: 0;
    font-family: 'Albert Sans', sans-serif;
  }
`;

export default GlobalStyle;
