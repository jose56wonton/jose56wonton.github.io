import styled from 'styled-components';

import { colors,breakpoints } from '../variables';

export const ProjectWrapper = styled.div`
  display:flex;
  flex-direction:row;
  margin-bottom:200px;
`

export const ProjectSidebar = styled.div`  
  background: linear-gradient(180deg,${colors.regular},${colors.regular});
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


export const ProjectItem = styled.div`
  width:100%;
  padding :35px;
  margin-bottom: 30px;
`

export const ClearFloats = styled.div`
  clear: both;
`