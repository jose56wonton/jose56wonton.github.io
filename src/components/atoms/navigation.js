import styled from 'styled-components';
import {colors} from './variables';


export const Button = styled.button`
margin: 0;
padding: 0;
border-width: 0;
border-color: transparent;
font-weight: 400;
cursor: pointer;
position: relative;
font-size: 20px;
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

`

