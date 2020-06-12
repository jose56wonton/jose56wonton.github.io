import React from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';

import { GridThemeProvider } from 'styled-bootstrap-grid';
import { theme } from '../theme';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    cursor: none;
  }
  a {
    cursor: none;
  }
  div {
    box-sizing: border-box;
  }
  @import url('https://fonts.googleapis.com/css?family=Josefin+Sans&display=swap');
`;

const Content = styled.div`
    position: relative;
    min-height: 100vh;
    margin: 0 auto;
`;

export const gridTheme = {
    breakpoints: {
        xl: 2561,
        lg: 1921,
        md: 1101,
        sm: 576,
        xs: 575,
    },
    row: {
        padding: 10,
    },
    col: {
        padding: 5,
    },
    container: {
        padding: 0,
        maxWidth: {
            xl: 1500,
            lg: 1200,
            md: 900,
            sm: 640,
            xs: 540,
        },
    },
};

const StylingProvider = ({ children }) => (
    <>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
            <GridThemeProvider gridTheme={gridTheme}>
                <Content>{children}</Content>
            </GridThemeProvider>
        </ThemeProvider>
    </>
);

export default StylingProvider;
