import React, { Component } from 'react'
import { ProjectSidebar, ProjectList, Project } from './specific/projects';
import ProjectElement from './tissues/project';
import { SectionTitle } from './atoms/typography';
import { Container } from './atoms/layout'

class Projects extends Component {
  render() {
    const ProjectItems = this.props.data.edges.map((ele) => {
   
      const data = {
        date: ele.node.date,
        title: ele.node.title,
        link: ele.node.link,
        images: ele.node.images,
        toolsHTML: ele.node.childContentfulProjectToolsTextNode.childMarkdownRemark.html,
        bodyHTML: ele.node.childContentfulProjectBodyTextNode.childMarkdownRemark.html,
        dateForSorting: ele.node.dateForSorting
      }
      return <ProjectElement data={data} />
    })
    const ProjectLinks = this.props.data.edges.map((link) => {
      const {title} = link.node;
      return <a href={`#${title}`}>{title}</a>
    })
    return (
      <div>
        <Container>
          <SectionTitle>Projects</SectionTitle>
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