import React, { Component } from 'react'
import { Hero, HeroContent, Container, Four } from '../layout'
import { IntroWrapper } from './style';
import { TextLink } from '../typography'


class Intro extends Component {
  render() {
    const { data } = this.props
    return (
      <Container>
        <Four>
          <Hero>
            <HeroContent>
              <IntroWrapper>             
                <div dangerouslySetInnerHTML={{ __html: data.introHTML }} />  
                <TextLink href="#about">More</TextLink>
              </IntroWrapper>
            </HeroContent>
          </Hero>
        </Four>
      </Container>
    )
  }
}

export default Intro
