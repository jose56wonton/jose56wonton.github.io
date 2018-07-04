import styled from 'styled-components';

import { breakpoints,colors } from '../variables';

export const Ending = styled.div`
  height: 250px;
  width:100%;
  margin: 0 auto;  
  background-color: ${colors.dark};
`
export const EndingContent = styled.div`
  display:flex;
  flex-direction: column;
  justify-content:space-between;
  align-items: center;
  width: 60%;
`

export const EndingLink = styled.a`
  margin-right: 20px;
  &::last-child{
    margin-right: 0px;
  }
`
export const EndingText = styled.p`
  color: ${colors.white};
`