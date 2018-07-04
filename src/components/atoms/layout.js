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
export const Container = styled.div`
  position: relative;
  width: 100%;
  margin: 0 auto;
  padding: 0 16px;
  ${breakpoints.xs(`
    width: 90%;
  `)}
  ${breakpoints.sm(`
    width: 80%;
  `)}
  ${breakpoints.md(`
    width: 80%;
 `)}
`

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1140px;
  margin: 0 auto;
`