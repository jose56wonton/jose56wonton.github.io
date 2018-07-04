import React, { Component } from 'react'
import { Hero, HeroContent, Container, Four } from './atoms/layout'
import asdf from './atoms/globals';
class Intro extends Component {
  render() {
    const { data } = this.props
    return (
      <Container>
        <Four>
          <Hero>
            <HeroContent>
              <div dangerouslySetInnerHTML={{ __html: data.introHTML }} />
              <a href="#about">More</a>
            </HeroContent>
          </Hero>
        </Four>
      </Container>
    )
  }
}

export default Intro
