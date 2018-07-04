import React, { Component } from 'react'
import { TimeLineContent,TimelineTools } from '../atoms/timeline';
import Image from 'gatsby-image';


class Experience extends Component {
  render() {
    const { title,location,date,dateForSorting,bodyHTML,toolsHTML,icon } = this.props.data;
    console.log(this.props);
    return (
        <TimeLineContent>
          <Image sizes={icon.sizes} style={{  height: 'auto', width: '90px' }} />
          <p>{date}</p>
          <h3>{location}</h3>
          <h2>{title}</h2>
          <div dangerouslySetInnerHTML={{ __html: bodyHTML }} />
          <TimelineTools dangerouslySetInnerHTML={{ __html: toolsHTML }} />
        </TimeLineContent>
    )
  }
}

export default Experience