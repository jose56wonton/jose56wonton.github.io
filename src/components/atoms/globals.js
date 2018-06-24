import { injectGlobal } from 'styled-components';
import { colors, breakpoints } from './variables';

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Inconsolata|Quicksand');

  html {
    height: 100%;
    width: 100%;
  }
  h1{
    ${breakpoints.xs(`font-size: 32px;`)}
    ${breakpoints.sm(`font-size: 32px;`)}
    ${breakpoints.md(`font-size: 40px;`)}
    ${breakpoints.lg(`font-size: 48px;`)}
    ${breakpoints.xl(`font-size: 56px;`)}
    font-family: 'Inconsolata', monospace;
  }
  h2{
    ${breakpoints.xs(`font-size: 28px;`)}
    ${breakpoints.sm(`font-size: 28px;`)}
    ${breakpoints.md(`font-size: 36px;`)}
    ${breakpoints.lg(`font-size: 44px;`)}
    ${breakpoints.xl(`font-size: 52px;`)}
    font-family: 'Inconsolata', monospace;
  }
  h3{
    ${breakpoints.xs(`font-size: 24px;`)}
    ${breakpoints.sm(`font-size: 24px;`)}
    ${breakpoints.md(`font-size: 32px;`)}
    ${breakpoints.lg(`font-size: 40px;`)}
    ${breakpoints.xl(`font-size: 48px;`)}
    font-family: 'Inconsolata', monospace;
  }
  p{
    ${breakpoints.xs(`font-size: 12px;`)}
    ${breakpoints.sm(`font-size: 12px;`)}
    ${breakpoints.md(`font-size: 16px;`)}
    ${breakpoints.lg(`font-size: 20px;`)}
    ${breakpoints.xl(`font-size: 24px;`)}
    font-family: 'Quicksand', sans-serif;
  }
  a{
    font-family: 'Quicksand', sans-serif;
    margin: 0;
  padding: 0;
  border-width: 0;
  border-color: transparent;
  font-weight: 400;
  cursor: pointer;
  position: relative;
  ${breakpoints.xs(`font-size: 12px;`)}
  ${breakpoints.sm(`font-size: 12px;`)}
  ${breakpoints.md(`font-size: 16px;`)}
  ${breakpoints.lg(`font-size: 20px;`)}
  ${breakpoints.xl(`font-size: 24px;`)}
  font-family: inherit;
  padding: 5px 12px;
  z-index: 0;
  border: none;
  border-radius: 0;
  background: transparent;
  color: ${colors.white};
  -webkit-transition: color 0.3s cubic-bezier(0.02, 0.01, 0.47, 1),
    -webkit-transform 0.3s cubic-bezier(0.02, 0.01, 0.47, 1);
  transition: color 0.3s cubic-bezier(0.02, 0.01, 0.47, 1),
    -webkit-transform 0.3s cubic-bezier(0.02, 0.01, 0.47, 1);
  transition: color 0.3s cubic-bezier(0.02, 0.01, 0.47, 1),
    transform 0.3s cubic-bezier(0.02, 0.01, 0.47, 1);
  transition: color 0.3s cubic-bezier(0.02, 0.01, 0.47, 1),
    transform 0.3s cubic-bezier(0.02, 0.01, 0.47, 1),
    -webkit-transform 0.3s cubic-bezier(0.02, 0.01, 0.47, 1);
    &:before {
      width: 100%;
      background: ${colors.regular};
      -webkit-transition: box-shadow 0.2s cubic-bezier(0.02, 0.01, 0.47, 1);
      transition: box-shadow 0.2s cubic-bezier(0.02, 0.01, 0.47, 1);
    };
    &:after{
      width: 0;
      background: hsla(0, 0%, 98%, 0.3);
      opacity: 0;
      -webkit-transition: opacity 0.2s cubic-bezier(0.02, 0.01, 0.47, 1),
        width 0.15s cubic-bezier(0.02, 0.01, 0.47, 1);
      transition: opacity 0.2s cubic-bezier(0.02, 0.01, 0.47, 1),
        width 0.15s cubic-bezier(0.02, 0.01, 0.47, 1);
    }
    &:before,&:after{
      position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    height: 100%;
    content: '';
    -webkit-transform: skewX(20deg);
    transform: skewX(20deg);
    }
    &:focus,&:hover{
      -webkit-transform: translateX(5px);
    transform: translateX(5px);
    }
    &:focus:after,&:hover:after{
      width: 5px;
      opacity: 1;
    }
    &:focus:before,&:hover:before{
      box-shadow: inset 0 -1px 0 ${colors.regular}, inset 0 1px 0 ${colors.regular},
      inset -1px 0 0 ${colors.regular};
    }

  }
`