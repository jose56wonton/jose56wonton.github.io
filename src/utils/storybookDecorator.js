import styled, { ThemeProvider } from 'styled-components';
import Cursor from '../components/cursor';
import React from 'react';
import { GlobalStyle, gridTheme } from '../components/stylingProvider';
import { theme } from '../theme';
import { GridThemeProvider } from 'styled-bootstrap-grid';

const Wrapper = styled.div`
    display: flex;
    flex: 1;
    height: 100vh;
    align-items: center;
    justify-content: center;
`;

const Decorator = StoryFn => (
    <Wrapper>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
            <Cursor />
            <GridThemeProvider gridTheme={gridTheme}>
                <StoryFn />
            </GridThemeProvider>
        </ThemeProvider>
    </Wrapper>
);

export default Decorator;
