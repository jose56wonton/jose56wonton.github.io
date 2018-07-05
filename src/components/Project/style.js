import styled from 'styled-components';

import { colors } from '../variables';

export const ProjectWrapper = styled.div`
  display:flex;
  flex-direction:row;
  margin-bottom:200px;
`

export const ProjectSidebar = styled.div`  
  background: linear-gradient(180deg,${colors.regular},${colors.regular});
  width:35%;
`
export const ProjectSidebarLinks = styled.div`
  padding:40px;
  float: left;
  position: sticky;
  position: -webkit-sticky;
  top: 40px;

`
export const ProjectList = styled.div`
  float: right;
  max-width: 600px;
  margin: 0 auto; 
  width: 65%;
`


export const ProjectItem = styled.div`
  width:100%;
  padding :35px;
  margin-bottom: 30px;
`

export const ClearFloats = styled.div`
  clear: both;
`