import React, { Component } from 'react'
import { TimeLineContent } from '../atoms/timeline';


class Experience extends Component {
  render() {
    const { title,location,date,dateForSorting,bodyHTML,toolsHTML } = this.props.data;
    console.log(this.props);
    return (
        <TimeLineContent>
          <p>{date}</p>
          <h3>{location}</h3>
          <h2>{title}</h2>
          <div dangerouslySetInnerHTML={{ __html: bodyHTML }} />
          <div dangerouslySetInnerHTML={{ __html: toolsHTML }} />
        </TimeLineContent>
    )
  }
}

export default Experience