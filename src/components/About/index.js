import React, { Component } from 'react'
import { Hero, Container, Four, BoxBigText, BoxSmallText,UnderLay } from '../layout'
import { Anchor } from '../navigation'
import {
  AboutWrapper,
  AboutImage,
  AboutBody,
  AboutGroup,
  AboutLink,
} from './style'

import { SectionTitle } from '../typography'
import { ImageWrapper } from '../images'
import Image from 'gatsby-image'

class About extends Component {
  render() {
    const {bodyHTML, images } = this.props.data
    return (
      <Container>
        <Anchor name="about" />
        <Four>
          <Hero>
            <AboutWrapper>
              <h2>About</h2>
              <AboutGroup>
                <AboutImage>
                  <ImageWrapper>
                    <Image
                      style={{ width: '100%', height: '100%' }}
                      sizes={images[0].sizes}
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
                <a>Resume</a>
              </AboutLink>
            </AboutWrapper>
          </Hero>
        </Four>
      </Container>
    )
  }
}

export default About
