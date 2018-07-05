import styled from 'styled-components';

import { breakpoints,colors } from '../variables';

export const AboutWrapper = styled.div`
  height: auto;
  width:100%;
  margin: 0 auto;  
`

export const AboutGroup = styled.div`
  width: 100%;
  position: relative;
  height: auto;
  ${breakpoints.lg(`
    height: 450px;
  `)}
  ${breakpoints.xl(`
    height: 500px;
  `)}
`
export const AboutImage = styled.div`
  z-index: 100;
  height: auto;   
  width:100%;  
  
  margin-bottom: 16px;
  ${breakpoints.lg(`
    position: absolute ;
    width: 54%
    top: 50%;
    transform: translateY(-50%);
  `)}
  ${breakpoints.xl(`
    position: absolute ;
    width: 58%;
    top: 50%;
    transform: translateY(-50%);
  `)}
`
export const AboutBody= styled.div`  
  z-index: 100;  
    
  height: auto;   
  width:100%;  
  margin-bottom: 32px;
  ${breakpoints.lg(`
    position: absolute ;
    width: 54%
    top: 50%;
    right: 0;
    transform: translateY(-50%);
  `)}
  ${breakpoints.xl(`
    position: absolute ;
    width: 58%;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
  `)}
`

export const AboutLink= styled.div`
  margin: 16px auto;
  text-align:center;
  width: 100%;
  position: relative;
  padding: 0 8px;
`

