import React, { Component } from 'react'
import { Hero, Container, Box, UnderLay, Three } from '../layout'
import {
  AboutWrapper,
  AboutImage,
  AboutBody,
  AboutGroup,
  AboutLink,
} from './style'
import { SectionTitle, TextLink } from '../typography'
import { ImageWrapper } from '../images'
import Image from 'gatsby-image'
import { Element } from 'react-scroll'

class About extends Component {
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
    const { bodyHTML, images, resumeURL } = this.props.data
    return (
      <Container>
        <Element name="about" />
        <Three>
          <Hero>
            <AboutWrapper>
              <SectionTitle>
                About<span />
              </SectionTitle>
              <AboutGroup>
                <AboutImage
                  onMouseEnter={this.onMouseEnter}
                  onMouseLeave={this.onMouseLeave}
                >
                  <ImageWrapper>
                    <Image
                      style={{ width: '100%', height: '100%' }}
                      sizes={images[this.state.currentImage].sizes}
                    />
                  </ImageWrapper>
                </AboutImage>
                <AboutBody>
                  <Box regular>
                    <UnderLay light />
                    <div dangerouslySetInnerHTML={{ __html: bodyHTML }} />
                  </Box>
                </AboutBody>
              </AboutGroup>
              <AboutLink>
                <TextLink dark href={resumeURL}>
                  Resume
                </TextLink>
              </AboutLink>
            </AboutWrapper>
          </Hero>
        </Three>
      </Container>
    )
  }
}

export default About
