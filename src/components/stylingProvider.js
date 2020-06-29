import React from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';

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
    width: 100%;
    overflow-x: hidden;
`;

const StylingProvider = ({ children }) => (
    <ThemeProvider theme={theme}>
        <GlobalStyles />
        <meta
            name="viewport"
            content="user-scalable=no, width=device-width, initial-scale=1.0"
        />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <Content>{children}</Content>
    </ThemeProvider>
);

export default StylingProvider;
