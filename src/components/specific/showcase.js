import styled from 'styled-components';

import { breakpoints,colors } from '../atoms/variables';

export const ShowCase = styled.div`
  height: auto;
  width:100%;
  margin: 0 auto;  
`
export const ShowCaseTitle= styled.div`
  margin: 0 auto;
  width: 100%;
  position: relative;
  padding: 0 8px;
`

export const ShowCaseGroup = styled.div`
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
export const ShowCaseImage = styled.div`
  z-index: 100;
  height: auto;   
  width:100%;  
  
  margin-bottom: 16px;
  ${breakpoints.lg(`
    position: absolute ;
    width: 58%
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
export const ShowCaseBody= styled.div`
  
  z-index: 100;
  background-color: ${colors.light};
  color: ${colors.white};
  padding: 20px;   
  height: auto;   
  width:100%;  
  margin-bottom: 16px;
  ${breakpoints.lg(`
    position: absolute ;
    width: 58%
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

export const ShowCaseLink= styled.div`
  margin: 0 auto;
  text-align:center;
  width: 100%;
  position: relative;
  padding: 0 8px;
`

