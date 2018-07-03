import React, { Component } from 'react'
import { HeroContent, Hero, HeroContainer } from './atoms/layout';
import { Anchor } from './atoms/navigation';
import { Showcase, ShowCaseImage, ShowCaseBody } from './tissues/showcase';
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
            <Showcase>
              <ShowCaseImage>
                <ImageWrapper>
                  <Image style={{ width: '100%', height: '100%' }} sizes={images[0].sizes} />
                </ImageWrapper>
              </ShowCaseImage>


              <ShowCaseBody>
                <div dangerouslySetInnerHTML={{ __html: bodyHTML }} />
              </ShowCaseBody>
              {/* <div dangerouslySetInnerHTML={{ __html: titleHTML }} /> */}


            </Showcase>

          </HeroContainer>
        </Hero>
      </div>
    )
  }
}

export default About