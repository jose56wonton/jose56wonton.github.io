import React, { Component } from 'react'
import { HeroContent, Hero, HeroContainer } from './atoms/layout';
import { Anchor } from './atoms/navigation';
import { ShowCase, ShowCaseImage, ShowCaseBody, ShowCaseGroup, ShowCaseTitle, ShowCaseLink } from './tissues/showcase';
import {Underline} from './atoms/typography';
import { ImageWrapper } from './atoms/images';
import Image from 'gatsby-image';
class About extends Component {
  render() {
    console.log(this.props.data);
    const { titleHTML, bodyHTML, images } = this.props.data;
    return (
      <div>
        <Anchor name="about"></Anchor>
        <Hero>
          <HeroContainer>
            <ShowCase>
              <ShowCaseTitle>
                <Underline><div dangerouslySetInnerHTML={{ __html: titleHTML }} /></Underline>
              </ShowCaseTitle>
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
          </HeroContainer>
        </Hero>
      </div>
    )
  }
}

export default About