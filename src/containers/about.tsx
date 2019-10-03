import React from 'react';
import { fetchAbout } from 'repositories/about.repository';
import styled from 'styled-components';
import { About } from 'models/about.model';
import { H1, H3, A, TypographyProps } from 'components/typography';
import { Theme, ThemeProp } from 'theme';
import { SectionWrapper } from 'littleGuys/a';
import { fetchLinks } from 'repositories/link.repository';
import { Link } from 'models/link.model';
import { mapLinkObjectToLinks } from 'utils/link.extensions';

const Social = styled.div`
  position: absolute;
  z-index: 1;
  transform: rotate(-90deg)
    translateY(${(props: ThemeProp) => props.theme.innerBox.padding}px);
  right: 0px;
`;

const Wrapper = styled(SectionWrapper)`
  height: 100vh;
  position: relative;
  width: 100%;
  padding: 250px;
`;

const ColorBlock = styled.div`
  position: absolute;
  z-index: -1;
  top: ${(props: ThemeProp) => props.theme.outerBox.padding}px;
  bottom: ${(props: ThemeProp) => props.theme.outerBox.padding}px;
  left: ${(props: ThemeProp) => props.theme.outerBox.padding}px;
  right: ${(props: ThemeProp) => props.theme.outerBox.padding}px;
  background-color: ${(props: ThemeProp) => props.theme.color.accent};
`;

const AboutSection = () => {
  const { description }: About = fetchAbout();
  const links: Link = fetchLinks();

  const transformTypography = (props: TypographyProps) => {
    const { innerBox, outerBox } = props.theme;
    const distanceFromEdge = innerBox.padding + outerBox.padding;
    return `transform: translateX(${
      props.align === 'right'
        ? `${distanceFromEdge}px`
        : `-${distanceFromEdge}px`
    });`;
  };

  const Name = styled(H1)`
    ${(props: TypographyProps) => transformTypography(props)}
  `;

  const Description = styled(H3)`
    ${(props: TypographyProps) => transformTypography(props)}
  `;

  return (
    <Wrapper>
      <ColorBlock />
      <Name align="right">
        Joshua <br />
        Wootonn
      </Name>
      <Description align="left">{description}</Description>
      <Social>
        {Object.keys(links).map(key => (
          <A key={links[key]} href={links[key]}>
            {key}
          </A>
        ))}
      </Social>
    </Wrapper>
  );
};

export default AboutSection;
