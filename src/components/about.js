import React, { Component } from 'react'
import { HeroContent, Hero, HeroContainer } from './atoms/layout';
import { Anchor } from './atoms/navigation';
class About extends Component {
  render() {
    return (
      <div>
        <Anchor name="about"></Anchor>
        <Hero>
          <HeroContainer>
            About
          </HeroContainer>
        </Hero>
      </div>
      )
  }
}

export default About