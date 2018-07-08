import React, { Component } from 'react'
import { ProjectItem, ProjectImageWrapper } from './style';
import { Tools, UnderLay } from '../layout';
import Image from 'gatsby-image';
import { Anchor } from '../navigation';
import { SVGLink, Line } from '../typography';
import Arrow from '../Arrow.svg';

class Project extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isHovered: false
    }
  }  
  onMouseLeave = () => {
    this.setState({ isHovered: false })
  }
  onMouseEnter = () => {
    this.setState({ isHovered: true })
  }

  render() {
    const { title, date, link, toolsHTML, bodyHTML, images } = this.props.data;

    return (
      <ProjectItem >
        <Anchor name={title} />   
        <ProjectImageWrapper onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>
          <Image sizes={images[this.state.isHovered ? 1 : 0].sizes} style={{ height: '280px', width: '100%', margin: "0 auto" }} />
        </ProjectImageWrapper>      
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