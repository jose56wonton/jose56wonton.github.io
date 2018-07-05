import React, { Component } from 'react'
import { ProjectSidebar, ProjectList, Project } from './projects';
import ProjectElement from './project';
import { SectionTitle } from '../typography';
import { Container } from '../layout'

class Projects extends Component {
  render() {
    const ProjectItems = this.props.data.edges.map((ele,i) => {
   
      const data = {
        date: ele.node.date,
        title: ele.node.title,
        link: ele.node.link,
        images: ele.node.images,
        toolsHTML: ele.node.childContentfulProjectToolsTextNode.childMarkdownRemark.html,
        bodyHTML: ele.node.childContentfulProjectBodyTextNode.childMarkdownRemark.html,
        dateForSorting: ele.node.dateForSorting
      }
      return <ProjectElement key={i} data={data} />
    })
    const ProjectLinks = this.props.data.edges.map((link,i) => {
      const {title} = link.node;
      return <a key={i*1000} href={`#${title}`}>{title}</a>
    })
    return (
      <div>
        <Container>
          <SectionTitle>Projects<span/></SectionTitle>
        </Container>
        <Project>
          <ProjectSidebar>    
            {ProjectLinks}
          </ProjectSidebar>
          <ProjectList>
            {ProjectItems}
          </ProjectList>
        </Project>
      </div>

    )
  }
}

export default Projects