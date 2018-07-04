import React, { Component } from 'react';
import { Ending, EndingContent, EndingLink, EndingText } from './specific/ending';
import { Container, Hero } from './atoms/layout';

class Footer extends Component {
  render() {
    const { data } = this.props;
    return (
      <Ending>
        <Container>
          <Hero>
            <EndingContent>
              <div>
                <EndingLink href={data.github}>Github</EndingLink>
                <EndingLink href={data.medium}>Medium</EndingLink>
                <EndingLink href={data.linkedIn}>Linked In</EndingLink>
              </div>
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