import React, { Component } from 'react'
import { Hero, HeroContent } from './atoms/layout'
import {Button } from './atoms/navigation';
import {breakpoints} from './atoms/globals';
class Intro extends Component {
  render() {
    console.log(breakpoints)
    return (
      <Hero>
        <HeroContent>
          <p>asdf</p>
          <h1>hi there</h1>
          <Button>More!</Button>
        </HeroContent>
      </Hero>
    )
  }
}

export default Intro
