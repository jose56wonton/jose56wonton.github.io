import React, { Component } from 'react'
import { Hero, Container, Four } from './atoms/layout'
import { Anchor } from './atoms/navigation'
import {
  ShowCase,
  ShowCaseImage,
  ShowCaseBody,
  ShowCaseGroup,
  ShowCaseTitle,
  ShowCaseLink,
} from './specific/showcase'
import { Underline, SectionTitle } from './atoms/typography'
import { ImageWrapper } from './atoms/images'
import Image from 'gatsby-image'
class About extends Component {
  render() {
    const { titleHTML, bodyHTML, images } = this.props.data
    return (
      <Container>
        <Anchor name="about" />
        <Four>
          <Hero>
            <ShowCase>
              <SectionTitle>About Me</SectionTitle>
              <ShowCaseGroup>
                <ShowCaseImage>
                  <ImageWrapper>
                    <Image
                      style={{ width: '100%', height: '100%' }}
                      sizes={images[0].sizes}
                    />
                  </ImageWrapper>
                </ShowCaseImage>
                <ShowCaseBody>
                  <div dangerouslySetInnerHTML={{ __html: bodyHTML }} />
                </ShowCaseBody>
              </ShowCaseGroup>
              <ShowCaseLink>
                <a>Resume</a>
              </ShowCaseLink>
            </ShowCase>
          </Hero>
        </Four>
      </Container>
    )
  }
}

export default About
