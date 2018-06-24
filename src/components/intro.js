import React, { Component } from 'react'
import { Hero, HeroContent } from './atoms/layout'
import {Button } from './atoms/navigation';

class Intro extends Component {
  render() {
    return (
      <Hero>
        <HeroContent>asdf

          <Button>More!</Button>
        </HeroContent>
      </Hero>
    )
  }
}

export default Intro
