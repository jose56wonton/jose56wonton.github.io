import React, { Component } from 'react'
import { ProjectItem } from './style';
import { Tools } from '../layout';
import Image from 'gatsby-image';
import { Anchor } from '../navigation';
import { SVGLink, Line } from '../typography';
import Arrow from '../Arrow.svg';

class Project extends Component {
  render() {
    const { title, date, link, toolsHTML, bodyHTML, images } = this.props.data;

    return (
      <ProjectItem>
        <Anchor name={title} />
        <Image sizes={images[1].sizes} style={{ height: '280px', width: '80%', margin: "0 auto" }} />
        <Line>
          <h2>{title}</h2>
          <SVGLink href={link}><img src={Arrow} /> </SVGLink>
        </Line>

        <p>{date}</p>


        <div dangerouslySetInnerHTML={{ __html: bodyHTML }} />
        <Tools dangerouslySetInnerHTML={{ __html: toolsHTML }} />
      </ProjectItem>
    )
  }
}

export default Project