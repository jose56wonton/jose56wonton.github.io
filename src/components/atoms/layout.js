import styled from 'styled-components';
import {  breakpoints } from './variables';
export const Hero  = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const HeroContent = styled.div`
  height: auto;
  width: 360px;  
`
export const HeroContainer = styled.div`
  position: relative;
  width: 1140px;
  background-color: black;
  margin: 0 auto;
  ${breakpoints.xs(`
    width: 95%;
  `)}
  ${breakpoints.sm(`
    width: 95%;
  `)}
  ${breakpoints.md(`
    width: 95%;
  `)}
  ${breakpoints.lg(`
    width: 1000px
  `)}
  ${breakpoints.xl(`
  width: 1140px;
  `)}
`