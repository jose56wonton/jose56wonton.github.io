import React from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';

import { GridThemeProvider } from 'styled-bootstrap-grid';
import { theme } from '../theme';
import '../normalize.css';
import '../reset.css';
import 'focus-visible';

export const GlobalStyles = createGlobalStyle`
    ::-moz-selection { 
        color: ${({ theme }) => theme.color.white};
        background: ${({ theme }) => theme.color.purple};
    }    
    ::selection {
        color: ${({ theme }) => theme.color.white};
        background: ${({ theme }) => theme.color.purple};
    }
    
     button:focus, a:focus {
        outline: 3px solid ${({ theme }) => theme.color.dark};;
    }
        
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
    <ThemeProvider theme={theme}>
        <GlobalStyles />
        <GridThemeProvider gridTheme={gridTheme}>
            <Content>{children}</Content>
        </GridThemeProvider>
    </ThemeProvider>
);

export default StylingProvider;
