import { injectGlobal } from 'styled-components';
import { colors, breakpoints } from './variables';


const base = 1;


injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Inconsolata|Quicksand');
  *{
    box-sizing: border-box;
  }
  html {
    height: 100%;
    width: 100%;
    margin: 0;
    
  }
  h1{
    ${breakpoints.xs(`
      font-size: 32px;
      margin-bottom: 6px;
    `)}
    ${breakpoints.sm(`
      font-size: 32px;
      margin-bottom: 6px;
    `)}
    ${breakpoints.md(`
      font-size: 40px;
      margin-bottom: 8px;  
    `)}
    ${breakpoints.lg(`
      font-size: 48px;
      margin-bottom: 10px
    `)}
    ${breakpoints.xl(`
      font-size: 56px;
      margin-bottom: 12px;
    `)}
    font-family: 'Inconsolata', monospace;
    margin:0;
  }
  h2{
    ${breakpoints.xs(`
    font-size: 28px;
    margin-bottom: 6px;
    `)}

    ${breakpoints.sm(`
      font-size: 28px;
      margin-bottom: 6px;
    `)}
    ${breakpoints.md(`
      font-size: 32px;
      margin-bottom: 8px;  
    `)}
    ${breakpoints.lg(`
      font-size: 34px;
      margin-bottom: 10px
    `)}
    ${breakpoints.xl(`
      font-size: 36px;
      margin-bottom: 12px;
    `)}
    font-family: 'Quicksand', sans-serif;
    margin:0;
  }  
  h3{
    ${breakpoints.xs(`
      font-size: 24px;
      margin-bottom: 6px;
    `)}
    ${breakpoints.sm(`
      font-size: 24px;
      margin-bottom: 6px;
    `)}
    ${breakpoints.md(`
      font-size: 32px;
      margin-bottom: 8px;  
    `)}
    ${breakpoints.lg(`
      font-size: 40px;
      margin-bottom: 10px
    `)}
    ${breakpoints.xl(`
      font-size: 48px;
      margin-bottom: 12px;
    `)}
      font-family: 'Inconsolata', monospace;
      margin:0;
  }
  p{
    ${breakpoints.xs(`
      font-size: 20px;
      margin-bottom: 6px;
    `)}
    ${breakpoints.sm(`
      font-size: 20px;
      margin-bottom: 6px;
    `)}
    ${breakpoints.md(`
      font-size: 22px;
      margin-bottom: 8px;  
    `)}
    ${breakpoints.lg(`
      font-size: 22px;
      margin-bottom: 10px
    `)}
    ${breakpoints.xl(`
      font-size: 24px;
      margin-bottom: 12px;
    `)}
    font-family: 'Quicksand', sans-serif;
    margin:0;
  }
  a,button{
    font-family: 'Inconsolata', monospace;
    margin: 0;
    display:inline-block;
  padding: 0;
  border-width: 0;
  border-color: transparent;
  font-weight: 400;
  cursor: pointer;
  position: relative;
  text-decoration: none;
  ${breakpoints.xs(`
    font-size: 20px;
    margin-bottom: 6px;
    padding: 3px 8px;
  `)}
  ${breakpoints.sm(`
    font-size: 20px;
    margin-bottom: 6px;
    padding: 3px 8px;
  `)}
  ${breakpoints.md(`
    font-size: 22px;
    margin-bottom: 8px;  
    padding: 4px 10px;
  `)}
  ${breakpoints.lg(`
    font-size: 22px;
    margin-bottom: 10px;
    padding: 5px 12px;
  `)}
  ${breakpoints.xl(`
    font-size: 24px;
    margin-bottom: 12px;
    padding: 5px 12px;
  `)}
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