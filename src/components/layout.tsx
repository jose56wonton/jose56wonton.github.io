import React, { ReactElement } from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';

import { theme } from 'theme';

interface LayoutProps {
  children: ReactElement | ReactElement[];
}

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
  }
  div {
    box-sizing: border-box;
  }
  @import url('https://fonts.googleapis.com/css?family=Josefin+Sans&display=swap');
`;

const Content = styled.div`
  position: relative;
  max-width: 1680px;
  min-height: 100vh;
  margin: 0 auto;
`;

const Layout = ({ children }: LayoutProps) => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Content>{children}</Content>
    </ThemeProvider>
  </>
);

export default Layout;
