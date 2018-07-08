import styled from 'styled-components';

import { colors,breakpoints } from '../variables';

export const ProjectWrapper = styled.div`
  display:flex;
  flex-direction:row;
  margin-bottom:150px;
  
`

export const ProjectSidebar = styled.div`  
  background: linear-gradient(180deg,${colors.dark},${colors.dark});
  width:35%;
  ${breakpoints.touch(`
    width: 0;
  `)}
`
export const ProjectSidebarLinks = styled.div`
  padding:40px;
  float: left;
  position: sticky;
  position: -webkit-sticky;
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
  top: 40px;
  ${breakpoints.touch(`
    display: none;
  `)}
`
export const ProjectList = styled.div`
  float: right;
  max-width: 600px;
  margin: 0 auto; 
  width: 65%;
  :last-child{
    margin-bottom: 0;
  }
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
export const Light = styled.p`
  color: ${colors.white};
`

export const ProjectItem = styled.div`
  width:100%;
  padding :35px;
  margin-bottom: 30px;
`

export const ClearFloats = styled.div`
  clear: both;
`

export const ProjectImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  //background-color: ${colors.white};
  position: relative;
  margin-bottom: 8px;
 
`