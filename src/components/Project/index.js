import React, { Component } from 'react'
import {
  ProjectSidebar,
  ProjectList,
  ProjectWrapper,
  ClearFloats,
  Light,
  ProjectSidebarLinks,
} from './style'
import ProjectElement from './project'
import { SectionTitle, LinkWrapper } from '../typography'
import { Container } from '../layout'
import { Link } from 'react-scroll'

class Projects extends Component {
  render() {
    const ProjectItems = this.props.data.edges.map((ele, i) => {
      const data = {
        date: ele.node.date,
        title: ele.node.title,
        link: ele.node.link,
        images: ele.node.images,
        toolsHTML:
          ele.node.childContentfulProjectToolsTextNode.childMarkdownRemark.html,
        bodyHTML:
          ele.node.childContentfulProjectBodyTextNode.childMarkdownRemark.html,
        dateForSorting: ele.node.dateForSorting,
      }
      return <ProjectElement key={123432 * i} data={data} />
    })
    const ProjectLinks = this.props.data.edges.map((link, i) => {
      const { title, date } = link.node
      return (
        <div key={i * 4355342}>
          <LinkWrapper light>
            <Link to={title} smooth={true} offset={-50} duration={500}>
              {title}
              <span />
            </Link>
          </LinkWrapper>
          <Light>{date}</Light>
          <br />
        </div>
      )
    })
    return (
      <div>
        <Container>
          <SectionTitle>
            Projects<span />
          </SectionTitle>
        </Container>
        <ProjectWrapper>
          <ProjectSidebar>
            <ProjectSidebarLinks>{ProjectLinks}</ProjectSidebarLinks>
          </ProjectSidebar>
          <ProjectList>{ProjectItems}</ProjectList>
        </ProjectWrapper>
        <ClearFloats />
      </div>
    )
  }
}

export default Projects
