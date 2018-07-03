import React, { Component } from 'react'
import Experience from './tissues/experience';
import { TimeLine, TimeLineElementLeft, TimeLineElementRight } from './atoms/timeline';


class Experiences extends Component {
  render() {
    const { data } = this.props;
    const experience = data.edges.map((exp, i) => {
      const asdf = {
        title: exp.node.title,
        location: exp.node.location,
        date: exp.node.date,
        dateForSorting: exp.node.dateForSorting,
        toolsHTML: exp.node.tools.childMarkdownRemark.html,
        bodyHTML: exp.node.childContentfulExperienceBodyTextNode.childMarkdownRemark.html
      }
      if (i % 2 === 1)
        return <TimeLineElementRight><Experience key={i} data={asdf} /></TimeLineElementRight>
      else return <TimeLineElementLeft><Experience key={i} data={asdf} /></TimeLineElementLeft>
    })
    return (
      <TimeLine>

        {experience}

      </TimeLine>
    )
  }
}

export default Experiences