import React, { Component } from 'react'
import { Hero, Container, Four, BoxSmallText,UnderLay } from '../layout'
import { Anchor } from '../navigation'
import {  AboutWrapper,  AboutImage,  AboutBody,  AboutGroup,  AboutLink} from './style'
import { SectionTitle,TextLink } from '../typography'
import { ImageWrapper } from '../images'
import Image from 'gatsby-image'

class About extends Component {
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
    const {bodyHTML, images,resumeURL} = this.props.data
    return (
      <Container>
        <Anchor name="about" />
        <Four>
          <Hero>
            <AboutWrapper>
              <SectionTitle>About<span/></SectionTitle>
              <AboutGroup>
                <AboutImage onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>
                  <ImageWrapper>
                    <Image
                      style={{ width: '100%', height: '100%' }}
                      sizes={images[this.state.isHovered ? 1 : 0].sizes}
                    />
                  </ImageWrapper>
                </AboutImage>
                <AboutBody>
                  <BoxSmallText>
                    <UnderLay />
                    <div dangerouslySetInnerHTML={{ __html: bodyHTML }} />
                  </BoxSmallText>
                </AboutBody>
              </AboutGroup>
              <AboutLink>
                <TextLink href={resumeURL} >Resume</TextLink>
              </AboutLink>
            </AboutWrapper>
          </Hero>
        </Four>
      </Container>
    )
  }
}

export default About
