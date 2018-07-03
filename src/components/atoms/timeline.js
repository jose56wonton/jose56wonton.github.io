import styled from 'styled-components';

import { breakpoints,colors } from '../atoms/variables';


export const TimeLine = styled.ul`
  position: relative;
  width:100%;
  margin: 0 auto;
  ${breakpoints.xs(`
    width: 90%;
  `)}
  ${breakpoints.sm(`
    width: 80%;
  `)}
  ${breakpoints.md(`
    width: 80%;
 `)}
 ${breakpoints.lg(`
    width: 80%;
 `)}
 ${breakpoints.xl(`
    width: 80%;
 `)}

 list-style:none;
  
`
export const TimeLineElementLeft = styled.li`
  text-decoration:none;
  position: relative;
  width:50%;  
  &:before {
    background-color: ${colors.dark};
    content: '';
    position: absolute;
    top: 0;
    right: -2px;
    width: 4px;
    height: 90%;
  }
`
export const TimeLineElementRight = styled.li`
  text-decoration:none;
  position: relative;
  width:50%;
  left:50%;
  &:before {
    background-color: ${colors.dark};
    content: '';
    position: absolute;
    left:-2px;
    top: 0;
    width: 4px;
    height: 90%;
  }
`
export const TimeLineContent = styled.div`
  padding: 2em;
  position: relative;
  top: -1.875em;
  left: 4em;
  width: 80%;
  
  h3 {
    font-size: 1.75em;
  }
  
  h4 {
    font-size: 1.2em;
    margin-bottom: 1.2em;
  }
  
  strong {
    font-weight: 700;
  }
  
  p:not(.timeline-event-thumbnail) {
    padding-bottom: 1.2em;
  }
`