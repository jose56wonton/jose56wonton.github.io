import React, { Component } from 'react';
import { Ending, EndingContent, Spacing, EndingText } from './ending';
import { Container, Hero } from '../layout';
import { TextLink } from '../typography';

class Footer extends Component {
  render() {
    const { data } = this.props;
    return (
      <Ending>
        <Container>
          <Hero>
            <EndingContent>
              <Spacing>
                <TextLink href={data.github}>Github</TextLink>
                <TextLink href={data.medium}>Medium</TextLink>
                <TextLink href={data.linkedIn}>Linked In</TextLink>
              </Spacing>
              <EndingText>JoshuaWootonn@gmail.com</EndingText>
              <EndingText>Made by me!</EndingText>
            </EndingContent>
          </Hero>
        </Container>
      </Ending>
    );
  }
}

export default Footer;