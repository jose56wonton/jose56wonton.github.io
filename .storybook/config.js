import React from 'react';
import { addDecorator, configure } from "@storybook/react"
import { action } from '@storybook/addon-actions';
import Decorator from "../src/utils/storybookDecorator"

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

