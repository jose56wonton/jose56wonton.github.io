import React, { Component } from 'react';
import { Ending, EndingContent, EndingLink ,EndingText} from './specific/ending';
import { Container, Hero } from './atoms/layout';

class Footer extends Component {
  render() {
    return (
      <Ending>
        <Container>
          <Hero>
            <EndingContent>
              <div>
                <EndingLink>Github</EndingLink>
                <EndingLink>Medium</EndingLink>
                <EndingLink>Instagram</EndingLink>
                <EndingLink>Linked In</EndingLink>
                <EndingLink>Stack</EndingLink>
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