import React from 'react';
import styled from 'styled-components';
import { Flex, SectionWrapper } from 'littleGuys/a';

import { ThemeProp } from 'theme';
import { fetchLinks } from '../repositories/link.repository';
import { A, H4, TypographyProps } from 'components/typography';
import { randomNumberInclusive } from '../utils/random';
import { Wiggle } from '../components/animations';

// TODO: this naming is garbage
const FooterBlock = styled(SectionWrapper)`
  position: relative;
  width: 100%;
  padding: 0 250px;
  margin-bottom: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  @media (max-width: 575px) {
    padding: 0;
  }
  @media (min-width: 1921px) {
    height: 300px;
  }
`;

const ColorBlock = styled.div`
  position: absolute;
  z-index: -1;
  top: 0;
  bottom: 0;
  background-color: ${(props: ThemeProp) => props.theme.color.fun1};
  @media (max-width: 575px) {
    animation: ${Wiggle(randomNumberInclusive(-5, 5))} 4s infinite;
    left: 0;
    right: 0;
  }
  @media (min-width: 571px) and (max-width: 1100px) {
    animation: ${Wiggle(randomNumberInclusive(-5, 5))} 4s infinite;
    left: 20vw;
    right: 20vw;
  }
  @media (min-width: 1101px) {
    animation: ${Wiggle(randomNumberInclusive(-5, 5))} 4s infinite;
    left: 20vw;
    right: 20vw;
  }
  @media (min-width: 1921px) {
    animation: ${Wiggle(randomNumberInclusive(-5, 5))} 4s infinite;
    padding: 0 20vw;
  }
`;

const Wrapper = styled(Flex)`
  height: 100%;
  width: 100%;
  @media (max-width: 575px) {
    width: 80vw;
    padding: 0 10vw;
  }
  @media (min-width: 571px) and (max-width: 1100px) {
  }
  @media (min-width: 1101px) {
  }
  @media (min-width: 1921px) {
    padding: 0 10vw;
  }
`;

const Footer = () => {
  const links = fetchLinks();

  return (
    <FooterBlock>
      <ColorBlock />
      <Wrapper justify="space-between" align="center" direction="row">
        <H4 horizontalTransform="xl">
          Joshua Wootonn - {new Date().getFullYear()}
        </H4>
        <div>
          {Object.keys(links).map(key => (
            <A
              marginRight="md"
              horizontalTransform="xl"
              textAlign="right"
              key={links[key]}
              href={links[key]}
            >
              {key}
            </A>
          ))}
        </div>
      </Wrapper>
    </FooterBlock>
  );
};

export default Footer;
