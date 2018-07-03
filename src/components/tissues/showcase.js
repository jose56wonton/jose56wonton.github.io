import styled from 'styled-components';

import {  breakpoints,colors } from '../atoms/variables';


export const Showcase = styled.div`
  width: 100%;
  display relative;
  height: 800px;
`

export const ShowCaseImage = styled.div`
  
  z-index: 100;
  height: auto;
   
    
  ${breakpoints.xs(`
  position: relative;
    width: 350px;
    top: 25%;
    margin: 0 auto;
  `)}
  ${breakpoints.sm(`
  position: relative;
    width: 400px;
    top: 25%;
    margin: 0 auto;
  `)}
  ${breakpoints.md(`
    position: relative;
    width: 500px;
    top: 25%;
    margin: 0 auto;
    
  `)}
  ${breakpoints.lg(`
  position: absolute ;
    width: 50%
    top: 50%;
    transform: translateY(-50%);
  `)}
  ${breakpoints.xl(`
  position: absolute ;
    width: 50%;
    top: 50%;
    transform: translateY(-50%);
  `)}
`

export const ShowCaseTitle= styled.div`

`

export const ShowCaseBody= styled.div`
  
  z-index: 100;
  background-color: ${colors.light};
  color: ${colors.white};
  padding: 20px;
  
  
   
  ${breakpoints.xs(`
  position: relative;
    width: 330px;
    top: 25%;
    margin: 0 auto;
    margin-top: 20px;
  `)}
  ${breakpoints.sm(`
  position: relative;
    width: 380px;
    top: 25%;
    margin: 0 auto;
    margin-top: 20px;
  `)}
  ${breakpoints.md(`
    position: relative;
    width: 460px;
    top: 25%;
    margin: 0 auto;
    margin-top: 20px;
  `)}
  ${breakpoints.lg(`
  position: absolute ;
    right: 0;
    width: 50%
    top: 50%;
    transform: translateY(-50%);
  `)}
  ${breakpoints.xl(`
  position: absolute ;
  right: 0;
    width: 50%;
    top: 50%;
    transform: translateY(-50%);
  `)}

`

