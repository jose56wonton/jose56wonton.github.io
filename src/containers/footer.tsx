import React from 'react';
import styled from 'styled-components';
import { Flex, SectionWrapper } from 'littleGuys/a';

import { ThemeProp } from 'theme';
import { fetchLinks } from '../repositories/link.repository';
import { A, H4, TypographyProps } from 'components/typography';

// TODO: this naming is garbage
const FooterBlock = styled(SectionWrapper)`
  position: relative;
  width: 100%;
  padding: 0 250px;
  height: 200px;
  margin-bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ColorBlock = styled.div`
  position: absolute;
  z-index: -1;
  top: 0;
  bottom: 0;
  left: ${(props: ThemeProp) => props.theme.outerBox.padding}px;
  right: ${(props: ThemeProp) => props.theme.outerBox.padding}px;
  background-color: ${(props: ThemeProp) => props.theme.color.accent};
`;

const FooterSection = () => {
  const links = fetchLinks();

  return (
    <FooterBlock>
      <ColorBlock />
      <Flex style={{ width: '100%' }} justify="space-between" direction="row">
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
      </Flex>
    </FooterBlock>
  );
};

export default FooterSection;
