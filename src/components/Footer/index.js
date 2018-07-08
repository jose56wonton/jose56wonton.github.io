import React, { Component } from 'react'
import {
  FooterWrapper,
  FooterContent,
  FooterLinkSpacing,
  FooterText,
} from './style'
import { Container, Hero } from '../layout'
import { TextLink } from '../typography'

class Footer extends Component {
  render() {
    const { data } = this.props
    return (
      <FooterWrapper>
        <Container>
          <Hero>
            <FooterContent>
              <FooterLinkSpacing>
                <TextLink light href={data.github}>
                  Github
                </TextLink>
                <TextLink light href={data.medium}>
                  Medium
                </TextLink>
                <TextLink light href={data.linkedIn}>
                  Linked In
                </TextLink>
              </FooterLinkSpacing>
              <FooterText>
                <p>JoshuaWootonn@gmail.com</p>
              </FooterText>
            </FooterContent>
          </Hero>
        </Container>
      </FooterWrapper>
    )
  }
}

export default Footer
