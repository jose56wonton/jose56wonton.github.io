import styled from 'styled-components';

import { breakpoints,colors } from '../variables';

export const Project = styled.div`
  display:flex;
  flex-direction:row;
  margin-bottom:200px;
`

export const ProjectSidebar = styled.div`
  background: linear-gradient(180deg,${colors.regular},${colors.dark});
  width:35%;
`
export const ProjectList = styled.div`
  max-width: 600px;
  margin: 0 auto; 
  width: 65%;
`


export const ProjectItem = styled.div`
  width:100%;
  padding :35px;
  margin-bottom: 30px;
`