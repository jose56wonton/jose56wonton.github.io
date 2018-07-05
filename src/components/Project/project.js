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
      currentImage: 0,
      isHovered: false
    }
  }

  checkHovered = () => {
    if (this.state.isHovered) {
      this.changeImage();
    }
    console.log("checked", this.state.isHovered);
  }
  changeImage = () => {
    const { currentImage } = this.state, { length } = this.props.data.images;
    if (currentImage < length - 1) {
      this.setState({ currentImage: currentImage + 1 })
    }
    else {
      this.setState({ currentImage: 0 })
    }
  }
  onMouseLeave = () => {
    console.log("leave")
    clearInterval(this.state.intervalId);
    this.setState({ isHovered: false })
  }
  onMouseEnter = () => {
    var intervalId = setInterval(this.checkHovered, 1000);
    this.setState({ intervalId: intervalId });
    this.setState({ isHovered: true })
  }

  render() {
    const { title, date, link, toolsHTML, bodyHTML, images } = this.props.data;

    return (
      <ProjectItem onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>
        <Anchor name={title} />
   
          <ProjectImageWrapper>

            <Image sizes={images[this.state.currentImage].sizes} style={{ height: '280px', width: '100%', margin: "0 auto" }} />

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