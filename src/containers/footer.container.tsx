import React from 'react';
import styled from 'styled-components';
import { Flex } from 'components/flex';

import { ThemeProp } from 'theme';
import { fetchLinks } from '../repositories/link.repository';
import { A, H4} from 'components/typography';
import { randomNumberInclusive } from '../utils/random';
import { Wiggle } from '../components/animations';
import { SectionWrapper } from '../components/sectionWrapper';

// TODO: this naming is garbage
const FooterBlock = styled(SectionWrapper)`
  position: relative;
  width: 100%;
  margin-bottom: 50px !important;
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
  background-color: ${(props: ThemeProp) => props.theme.color.yellow};
  @media (max-width: 575px) {
    animation: ${Wiggle(randomNumberInclusive(-5, 5))} 4s infinite;
    left: 0;
    right: 0;
  }
  @media (min-width: 571px) and (max-width: 1100px) {
    animation: ${Wiggle(randomNumberInclusive(-5, 5))} 4s infinite;
    left: 0;
    right: 0;
  }
  @media (min-width: 1101px) {
    animation: ${Wiggle(randomNumberInclusive(-5, 5))} 4s infinite;
    left: 0;
    right: 0;
  }
`;

const Wrapper = styled(Flex)`
  height: 100%;
  width: 100%;
  @media (max-width: 575px) {
    width: 80vw;
    padding: 0 10vw;
  }
`;

const FooterContainer = () => {
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

export default FooterContainer;
