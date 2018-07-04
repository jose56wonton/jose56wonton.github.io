import React, { Component } from 'react'
import { Hero, Container } from './atoms/layout';
import { Anchor } from './atoms/navigation';
import { ShowCase, ShowCaseImage, ShowCaseBody, ShowCaseGroup, ShowCaseTitle, ShowCaseLink } from './atoms/showcase';
import {Underline, SectionTitle} from './atoms/typography';
import { ImageWrapper } from './atoms/images';
import Image from 'gatsby-image';
class About extends Component {
  render() {
    const { titleHTML, bodyHTML, images } = this.props.data;
    return (
      <div>
        <Anchor name="about"></Anchor>
        <Hero>
          <Container>
            <ShowCase>
              <SectionTitle>
                About Me
              </SectionTitle>
              <ShowCaseGroup>
                <ShowCaseImage>
                  <ImageWrapper>
                    <Image style={{ width: '100%', height: '100%' }} sizes={images[0].sizes} />
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
          </Container>
        </Hero>
      </div>
    )
  }
}

export default About