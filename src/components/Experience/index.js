import React, { Component } from 'react'
import Experience from './experience'
import {
  ExperienceWrapper,
  ExperienceElementLeft,
  ExperienceElementRight,
} from './style'
import { Anchor } from '../navigation'
import { Container } from '../layout'
import {SectionTitle} from '../typography';

class Experiences extends Component {
  render() {
    const { data } = this.props
    
    const experience = data.edges.map((exp, i) => {
      
      const asdf = {
        icon: exp.node.icon,
        title: exp.node.title,
        location: exp.node.location,
        date: exp.node.date,
        dateForSorting: exp.node.dateForSorting,
        toolsHTML: exp.node.tools.childMarkdownRemark.html,
        bodyHTML:
          exp.node.childContentfulExperienceBodyTextNode.childMarkdownRemark
            .html,
      }
      if (i % 2 === 1)
        return (
          <ExperienceElementRight>
            <Experience key={i} data={asdf} />
          </ExperienceElementRight>
        )
      else
        return (
          <ExperienceElementLeft>
            <Experience key={i} data={asdf} />
          </ExperienceElementLeft>
        )
    })
    return (
      <Container>
        <Anchor name="experience" />
        <SectionTitle>Experience<span/></SectionTitle>
        <ExperienceWrapper>         
          
          {experience}
        </ExperienceWrapper>
      </Container>
    )
  }
}

export default Experiences
