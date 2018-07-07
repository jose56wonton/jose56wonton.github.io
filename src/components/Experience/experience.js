import React, { Component } from 'react'
import { ExperienceContent,ExperienceLine,ExperienceBody } from './style';
import { Tools } from '../layout';
import Image from 'gatsby-image';


class Experience extends Component {
  render() {
    const { title, location, date, dateForSorting, bodyHTML, toolsHTML, icon } = this.props.data;

    return (
    
      <ExperienceContent>
        <Image sizes={icon.sizes} style={{ height: 'auto', width: '159px',marginBottom: '10px' }} />
        <h3>{title}</h3>
        <p>{date}</p>      
        <p><strong>{location}</strong></p>
        <ExperienceBody dangerouslySetInnerHTML={{ __html: bodyHTML }} />
        <Tools dangerouslySetInnerHTML={{ __html: toolsHTML }} />
      </ExperienceContent>
     
    )
  }
}

export default Experience