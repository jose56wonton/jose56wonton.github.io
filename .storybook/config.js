import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import styled, { ThemeProvider } from "styled-components"
import {GlobalStyle} from '../src/components/stylingProvider.js';
import {theme2} from '../src/theme2'

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  height: 100vh;
  align-items: center;
  justify-content: center;
`;

const Decorator = storyFn => (
  <Wrapper>
    <GlobalStyle />

    <ThemeProvider theme={theme2}>
      {storyFn()}
    </ThemeProvider>
  </Wrapper>
);

addDecorator(Decorator);

global.___loader = {
  enqueue: () => { },
  hovering: () => { },
};

global.__PATH_PREFIX__ = '';
window.___navigate = (pathname) => {
  action('NavigateTo:')(pathname);
};

configure(require.context("../src", true, /\.stories\.js$/), module)

