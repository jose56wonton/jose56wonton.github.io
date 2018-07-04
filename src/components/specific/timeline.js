import styled from 'styled-components';

import { breakpoints,colors } from '../atoms/variables';


export const TimeLine = styled.ul`
  position: relative;
  width:100%;
  margin: 0 auto;
  padding: 0;
  margin-bottom:200px;
 list-style:none;
  
`
export const TimeLineElementLeft = styled.li`
  text-decoration:none;
  position: relative;
  width:50%;  
  margin-bottom: 40px;
  &:before {
    background-color: ${colors.dark};
    content: '';
    position: absolute;
    top: 0;
    right: -2px;
    width: 4px;
    height: 100%;
  }
  ${breakpoints.touch(`
    
    width: 80%;
    left: 10%;
    &:before{
      left: -2px;
    }
 `)}


`
export const TimeLineElementRight = styled.li`
  text-decoration:none;
  position: relative;
  width:50%;
  left:50%;
  margin-bottom: 40px;
  &:before {
    background-color: ${colors.dark};
    content: '';
    position: absolute;
    left:-2px;
    top: 0;
    width: 4px;
    height: 100%;
  }
  
  
  ${breakpoints.touch(`
    width: 80%;
    left: 10%;
    &:before{
      right: -2px;
    }
 `)}

`
export const TimeLineContent = styled.div`

  position: relative;
 
  left: 30px;
  width: 90%;

  
  
`
export const TimelineTools = styled.div`

  ul {
    list-style:none;
    padding: 0;
    li{
      display:inline-block;
      color: ${colors.regular};
      border: 2px solid  ${colors.regular};
      padding: 4px;
      border-radius: 4px;
      margin-bottom: 8px;
      margin-right: 8px;
    }
  }
`