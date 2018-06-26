import React, { Component } from 'react'
import { HeroContent, Hero } from './atoms/layout';
import {Anchor} from './atoms/navigation';
class About extends Component {
  render() {
    return (
      <div>
        <Anchor name="about"></Anchor>
        <Hero>
          <HeroContent>
            About
          </HeroContent>
        </Hero>
      </div>


    )
  }
}

export default About