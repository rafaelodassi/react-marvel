import { createGlobalStyle } from 'styled-components';

export const Theme = {
  text: '#363537',
  background: '#363537',
};

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;      
  }

  body {
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};        
  }
`;
