import React, { Component } from 'react'
import { ExperienceContent } from './style';
import {Tools} from '../layout';
import Image from 'gatsby-image';


class Experience extends Component {
  render() {
    const { title,location,date,dateForSorting,bodyHTML,toolsHTML,icon } = this.props.data;
    
    return (
        <ExperienceContent>
          <Image sizes={icon.sizes} style={{  height: 'auto', width: '90px' }} />
          <p>{date}</p>
          <h3>{location}</h3>
          <h2>{title}</h2>
          <div dangerouslySetInnerHTML={{ __html: bodyHTML }} />
          <Tools dangerouslySetInnerHTML={{ __html: toolsHTML }} />
        </ExperienceContent>
    )
  }
}

export default Experience