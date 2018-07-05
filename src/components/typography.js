import styled from 'styled-components';
import { colors, transitions } from './variables';


export const Underline = styled.span`
  background-color: ${colors.dark};
  color: ${colors.dark};
  height:8px;
  width: 100%; 
  left: 10%;
  bottom: 0;
`
export const SectionTitle = styled.h2`   
  margin-bottom: 20px;
  display: inline-block;
  width: auto;
  position:relative;
  span{
    position: absolute;
    width: 60%;
    height: 5px;
    top:110%;
    z-index: -1;
    transform: translateY(-50%);
    left: 0%;;
    background-color: ${colors.light};
    transition: ${transitions.fast};
  }
  &:hover{
    span{
      width: 70%;
    } 
  }
`

export const TextLink = styled.a`
  font-family: 'Inconsolata', monospace;
  
  display:inline-block;
  
  border-width: 0;
  border-color: transparent;
  font-weight: 400;
  cursor: pointer;
  position: relative;
  text-decoration: none;
  
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
      background: ${colors.dark};
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
      box-shadow: inset 0 -1px 0 ${colors.dark}, inset 0 1px 0 ${colors.dark},
      inset -1px 0 0 ${colors.dark};
    }
`
export const Line = styled.div`
  flex-direction:row;
  display:flex;
  justify-content:start;
  align-items: flex-start;
`

export const SVGLink = styled.a`
  float: right;
  height: 100%;
  width:20px;
   
  img{
    width: 36px;
    height:36px;
    transition: ${transitions.fast};
     &:hover{
      transform: translateX(10px);
    } 
  }
`