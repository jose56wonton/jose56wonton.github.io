import React from 'react';
import { Container } from 'styled-bootstrap-grid';
import styled from 'styled-components';
import { Color, H1 } from './typography';
import { ColorDiv, ColorBlockProps } from './colorDiv';
import { Wiggle } from './animations';
import { randomInclusive } from '../utils/random';

const Wrapper = styled(Container)`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const OrangeColorBlock = styled(ColorDiv)<ColorBlockProps>`
  height: 40vh;
  width: 40vw;
  position: absolute;
  @media (max-width: 575px) {
    height: 40vw;
    width: 60vw;
    animation: ${Wiggle(randomInclusive(-30, 30))} 4s infinite;
  }
  @media (min-width: 571px) and (max-width: 1100px) {
    height: 40vw;
    width: 60vw;
    animation: ${Wiggle(randomInclusive(-30, 30))} 4s infinite;
  }
  @media (min-width: 1101px) {
    height: 20vw;
    width: 30vw;
    animation: ${Wiggle(randomInclusive(-30, 30))} 4s infinite;
  }
  @media (min-width: 1921px) {
    height: 20vw;
    width: 30vw;
    animation: ${Wiggle(randomInclusive(-30, 30))} 4s infinite;
  }
`;

interface Props {
  text: string;
  backgroundColor: Color;
}

const Hero: React.FC<Props> = props => {
  return (
    <Wrapper>
      <OrangeColorBlock backgroundColor={props.backgroundColor}>
        <H1>{props.text}</H1>
      </OrangeColorBlock>
    </Wrapper>
  );
};

export default Hero;
