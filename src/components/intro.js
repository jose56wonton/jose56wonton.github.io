import React, { Component } from 'react'
import { Hero, HeroContent, Container } from './atoms/layout'

import {Button } from './atoms/navigation';
import {breakpoints} from './atoms/globals';
class Intro extends Component {
  render() {
    const {data} = this.props;
    return (
      <Hero>
        <HeroContent>
          <Container>

          <div dangerouslySetInnerHTML={{__html: data.introHTML}} />
          <a href="#about">More</a>

          </Container>
          
        </HeroContent>
      </Hero>
    )
  }
}

export default Intro
