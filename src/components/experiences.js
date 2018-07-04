import React, { Component } from 'react'
import Experience from './tissues/experience'
import {
  TimeLine,
  TimeLineElementLeft,
  TimeLineElementRight,
} from './atoms/timeline'
import { Anchor } from './atoms/navigation'
import { Container } from './atoms/layout'
import {SectionTitle} from './atoms/typography';

class Experiences extends Component {
  render() {
    const { data } = this.props
    console.log(data)
    const experience = data.edges.map((exp, i) => {
      console.log(exp.node)
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
          <TimeLineElementRight>
            <Experience key={i} data={asdf} />
          </TimeLineElementRight>
        )
      else
        return (
          <TimeLineElementLeft>
            <Experience key={i} data={asdf} />
          </TimeLineElementLeft>
        )
    })
    return (
      <Container>
        <Anchor name="experience" />
        <TimeLine>          
          <SectionTitle>My Experience</SectionTitle>
          {experience}
        </TimeLine>
      </Container>
    )
  }
}

export default Experiences
