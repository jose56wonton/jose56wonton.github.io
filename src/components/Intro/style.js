import styled from 'styled-components';

import { breakpoints,colors } from '../variables';

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