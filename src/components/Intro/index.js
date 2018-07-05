import React, { Component } from 'react'
import { Hero, HeroContent, Container, Four } from '../layout'
import { IntroWrapper } from './style';

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
                <a href="#about">More</a>

              </IntroWrapper>
            </HeroContent>
          </Hero>
        </Four>
      </Container>
    )
  }
}

export default Intro
