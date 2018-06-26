import React, { Component } from 'react'
import { HeroContent, Hero, HeroContainer } from './atoms/layout';
import { Anchor } from './atoms/navigation';
class About extends Component {
  render() {
    console.log(this.props.data);
    const {titleHTML,bodyHTML,images} = this.props.data;
    return (
      <div>
        <Anchor name="about"></Anchor>
        <Hero>
          <HeroContainer>
          
          <div dangerouslySetInnerHTML={{__html: titleHTML}} />
          <div dangerouslySetInnerHTML={{__html: bodyHTML}} />
          </HeroContainer>
        </Hero>
      </div>
      )
  }
}

export default About