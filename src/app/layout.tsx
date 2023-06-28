'use client';

import { Open_Sans } from 'next/font/google';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';

import StyledComponentsRegistry from '../lib/registry';
import { setupStore } from '../store';
import { Theme, GlobalStyles } from '../styles/themeConfig';

import * as Styled from './styles';

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
  style: 'normal',
});

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang='en'>
      <head>
        <title>React Marvel</title>
      </head>
      <body className={openSans.className}>
        <Provider store={setupStore()}>
          <StyledComponentsRegistry>
            <ThemeProvider theme={Theme}>
              <GlobalStyles />
              {children}
              <Styled.Footer>
                2023 Rafael Odassi{' '}
                <a
                  href='https://www.linkedin.com/in/rafaelodassi/'
                  target='_blank'
                >
                  https://www.linkedin.com/in/rafaelodassi/
                </a>
              </Styled.Footer>
            </ThemeProvider>
          </StyledComponentsRegistry>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
