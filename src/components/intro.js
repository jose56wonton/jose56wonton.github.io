import React, { Component } from 'react'
import { Hero, HeroContent } from './atoms/layout'
import {Button } from './atoms/navigation';
import {breakpoints} from './atoms/globals';
class Intro extends Component {
  render() {
    const {data} = this.props;
    return (
      <Hero>
        <HeroContent dangerouslySetInnerHTML={{__html: data.introHTML}} >
        </HeroContent>
      </Hero>
    )
  }
}

export default Intro
