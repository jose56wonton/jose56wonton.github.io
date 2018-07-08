import React, { Component } from 'react'
import { Hero, HeroContent, Container, Four, BoxSmallText, UnderLay } from '../layout'
import { IntroWrapper, IntroPage, SVG, Absolute,Relative } from './style';
import { TextLink } from '../typography'
import circle from './circle.svg';
import squiggle from './squiggle.svg';
import white from './white.svg';

class Intro extends Component {
  constructor(props)  {
    super(props);
    this.state={
      x : 0,
      y : 0
    }
  }
onMouseMove = (e) => {
  this.setState({x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight});
}

render() {
  const { data } = this.props

  const swirlSVG = this.props.swirls.map((swirlprops,i) => {
    return <SVG key={i} src={circle} style={swirlprops} />
  })

  const squiggleSVG = this.props.squiggles.map((squiggleprops,i) => {
    return <SVG key={i} src={squiggle} style={squiggleprops} />
  })

  return (

    <IntroPage onMouseMove={this.onMouseMove}>
    <Absolute style={{transform: `translate(${this.state.x * 20}px,${this.state.y * 20}px)`}}>
        <Relative>
        <SVG src={white} style={this.props.swirls[0]} />
        <SVG src={white} style={this.props.swirls[1]} />
        <SVG src={white} style={this.props.swirls[2]} />
        </Relative>
      </Absolute>
    <Absolute style={{transform: `translate(${this.state.x * 20}px,${this.state.y * 20}px)`}}>
        <Relative>
          {swirlSVG}
        </Relative>
      </Absolute>
      <Absolute style={{transform: `translate(${-this.state.x * 20}px,${-this.state.y * 20}px)`}}>
        <Relative>          
          {squiggleSVG}
        </Relative>
      </Absolute>
      
      <Container>
        <Four>
          <Hero>
            <HeroContent>
              <BoxSmallText>
                <IntroWrapper>
                  <div dangerouslySetInnerHTML={{ __html: data.introHTML }} />
                  <TextLink href="#about">More</TextLink>
                </IntroWrapper>
                <UnderLay />
              </BoxSmallText>
            </HeroContent>
          </Hero>
        </Four>
      </Container>
    </IntroPage>
  )
}
}

export default Intro
