import React, { Component } from 'react'
import {ProjectItem} from '../specific/projects';
import {TimelineTools} from '../specific/timeline';
import Image from 'gatsby-image';
import { Anchor } from '../atoms/navigation';

class Project extends Component {
  render () {
    const {title,date,link,toolsHTML,bodyHTML,images} = this.props.data;
    
    return (
      <ProjectItem>
        <Anchor name={title} />
        <Image sizes={images[1].sizes} style={{  height: '280px', width: '80%', margin: "0 auto" }} />
        <h3>{title}</h3> <p>{date}</p> <a href={link}>Link</a>
        <div dangerouslySetInnerHTML={{ __html: bodyHTML }} />
          <TimelineTools dangerouslySetInnerHTML={{ __html: toolsHTML }} />
      </ProjectItem>
    )
  }
}

export default Project