import React, { Component } from 'react'
import { ProjectItem, ProjectImageWrapper } from './style'
import { Tools } from '../layout'
import Image from 'gatsby-image'
import { SVGLink, Line } from '../typography'
import Arrow from '../Arrow.svg'
import { Element } from 'react-scroll'

class Project extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentImage: 0,
      isHovered: false,
    }
  }

  checkHovered = () => {
    if (this.state.isHovered) {
      this.changeImage()
    }
  }
  changeImage = () => {
    const { currentImage } = this.state,
      { length } = this.props.data.images
    if (currentImage < length - 1) {
      this.setState({ currentImage: currentImage + 1 })
    } else {
      this.setState({ currentImage: 0 })
    }
  }
  onMouseLeave = () => {
    clearInterval(this.state.intervalId)
    this.setState({ isHovered: false })
  }
  onMouseEnter = () => {
    this.changeImage()
    var intervalId = setInterval(this.checkHovered, 1000)
    this.setState({ intervalId: intervalId })
    this.setState({ isHovered: true })
  }

  render() {
    const { title, date, link, toolsHTML, bodyHTML, images } = this.props.data

    return (
      <ProjectItem>
        <Element name={title} />

        <ProjectImageWrapper
          onMouseEnter={this.onMouseEnter}
          onMouseLeave={this.onMouseLeave}
        >
          <Image
            sizes={images[this.state.currentImage].sizes}
            style={{ height: '280px', width: '100%', margin: '0 auto' }}
          />
        </ProjectImageWrapper>
        <Line>
          <h2>{title}</h2>
          <SVGLink href={link}>
            <img src={Arrow} />{' '}
          </SVGLink>
        </Line>
        <p>{date}</p>
        <div dangerouslySetInnerHTML={{ __html: bodyHTML }} />
        <Tools dangerouslySetInnerHTML={{ __html: toolsHTML }} />
      </ProjectItem>
    )
  }
}

export default Project
