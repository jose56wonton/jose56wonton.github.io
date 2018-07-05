import styled from 'styled-components';

import { breakpoints,colors } from '../variables';


export const ExperienceWrapper = styled.ul`
  position: relative;
  width:100%;
  margin: 0 auto;
  padding: 0;
  margin-bottom:200px;
 list-style:none;
  
`
export const ExperienceElementLeft = styled.li`
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
export const ExperienceElementRight = styled.li`
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
export const ExperienceContent = styled.div`
  position: relative; 
  left: 30px;
  width: 90%;
`
export const ExperienceLine = styled.div`
  flex-direction:row;
  display:flex;
  justify-content:start;
  align-items: center;
  p{
    margin-bottom:0;
  }
  div,p{
    margin-right: 8px;
  }
`