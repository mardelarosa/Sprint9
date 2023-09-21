
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: "Gill Sans", sans-serif; 
  }

  body {
    background-color: pink;
    color: black;
  }

  .centered-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }


  a, a:visited, a:any-link {
    text-decoration: none;
    color: inherit;
  }
  
  a:hover {
    text-decoration: none; 
  }
  
`;


export default GlobalStyles;


