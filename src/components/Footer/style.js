import styled from 'styled-components';

import { breakpoints,colors } from '../variables';

export const FooterWrapper = styled.div`
  height: 250px;
  width:100%;
  margin: 0 auto;  
  background-color: ${colors.dark};
`
export const FooterContent = styled.div`
  display:flex;
  flex-direction: column;
  justify-content:space-between;
  align-items: center;
  width: 60%;
  div{
    margin-bottom: 8px;
  }
  ${breakpoints.md(`
    width: 70%;
  `)}
  ${breakpoints.sm(`
    width: 80%;
  `)}
  ${breakpoints.xs(`
    width: 90%;
  `)}
`

export const FooterLinkSpacing = styled.div`
  a{
    &:before{
      background-color: ${colors.regular};     
    }
    color: ${colors.dark};
    margin-right: 20px;
    &::last-child{
      margin-right: 0px;
    }
  }
  
`
export const FooterText = styled.div`
  color: ${colors.white};
`