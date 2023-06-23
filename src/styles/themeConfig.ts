import { createGlobalStyle } from 'styled-components';

export const Theme = {
  color: {
    background: '#1f1f1f',
    primary: '#b43de7',
    text: {
      primary: '#262626',
      secondary: '#7f8c8d',
      light: '#d7d7d9',
    },
  },
};

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;      
  }

  html {    
    height: 100%;
  }

  body {
    background: ${({ theme }) => theme.color.background};
    color: #fff;        
    padding: 0;
    margin: 0;    
    height: 100%;
  }
`;
