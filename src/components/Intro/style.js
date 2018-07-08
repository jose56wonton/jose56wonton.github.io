import styled from 'styled-components';

import { breakpoints, colors } from '../variables';

export const IntroWrapper = styled.div`
  p{
    ${breakpoints.xs(`
      font-size: 16px;
    `)}
    ${breakpoints.sm(`
      font-size: 18px;
    `)}
    ${breakpoints.md(`
      font-size: 20px; 
    `)}
    ${breakpoints.lg(`
      font-size: 20px;
    `)}
    ${breakpoints.xl(`
      font-size: 22px;
    `)}    
  }

`

export const Relative = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`
export const Absolute = styled.div`
  position: absolute;
  z-index: -1;
  margin: 0 auto;
  width: calc(100% - 50px);
  height: calc(100% - 50px);
`

export const IntroPage = styled.div`
  margin-bottom: 100px;
`
export const SVG = styled.img`
  position: absolute;
  z-index: -1;
  ${breakpoints.xs(`
  width: 16px;
  width: 16px;
  `)}
  ${breakpoints.sm(`
  width: 18px;
  width: 18px;
  `)}
  ${breakpoints.md(`
  width: 22px; 
  width: 22px; 
  `)}
  ${breakpoints.lg(`
  width: 25px;
  width: 25px;
  `)}
  ${breakpoints.xl(`
  width: 60px;
  width: 60px;
  `)}  
`
