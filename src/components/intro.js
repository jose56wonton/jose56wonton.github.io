import React, { Component } from 'react'
import { Hero, HeroContent, Container } from './atoms/layout'

class Intro extends Component {
  render() {
    const { data } = this.props
    return (
      <Container>
        <Hero>
          <HeroContent>
            <div dangerouslySetInnerHTML={{ __html: data.introHTML }} />
            <a href="#about">More</a>
          </HeroContent>
        </Hero>
      </Container>
    )
  }
}

export default Intro
