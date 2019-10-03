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

  // TODO: break this out into helper class

  const transformTypography = (props: TypographyProps) => {
    const { innerBox, outerBox } = props.theme;
    const distanceFromEdge = (innerBox.padding + outerBox.padding) / 2;
    return `transform: translateX(${
      props.align === 'right'
        ? `${distanceFromEdge}px`
        : `-${distanceFromEdge}px`
    });`;
  };
  const B = styled(H4)`
    ${(props: TypographyProps) => transformTypography(props)}
  `;

  const LinkerBoys = styled.div`
    ${(props: TypographyProps) => transformTypography(props)}
  `;

  return (
    <FooterBlock>
      <ColorBlock />
      <Flex style={{ width: '100%' }} justify="space-between" direction="row">
        <B>Joshua Wootonn - {new Date().getFullYear()}</B>
        <LinkerBoys align="right">
          {Object.keys(links).map(key => (
            <A key={links[key]} href={links[key]}>
              {key}
            </A>
          ))}
        </LinkerBoys>
      </Flex>
    </FooterBlock>
  );
};

export default FooterSection;
