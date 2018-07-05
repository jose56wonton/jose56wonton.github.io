import React, { Component } from 'react';
import { FooterWrapper, FooterContent, FooterLinkSpacing, FooterText } from './style';
import { Container, Hero } from '../layout';
import { TextLink } from '../typography';

class Footer extends Component {
  render() {
    const { data } = this.props;
    return (
      <FooterWrapper>
        <Container>
          <Hero>
            <FooterContent>
              <FooterLinkSpacing>
                <TextLink href={data.github}>Github</TextLink>
                <TextLink href={data.medium}>Medium</TextLink>
                <TextLink href={data.linkedIn}>Linked In</TextLink>
              </FooterLinkSpacing>
              <FooterText><p>JoshuaWootonn@gmail.com</p></FooterText>
              <FooterText><p>Made by me!</p></FooterText>
            </FooterContent>
          </Hero>
        </Container>
      </FooterWrapper>
    );
  }
}

export default Footer;