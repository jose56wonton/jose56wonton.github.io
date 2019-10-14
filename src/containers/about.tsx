import React from 'react';
import { fetchAbout } from 'repositories/about.repository';
import styled from 'styled-components';
import { About } from 'models/about.model';
import { H1, H3, A, TypographyProps } from 'components/typography';
import { deviceSize, ThemeProp, typographyProportions } from 'theme';
import { SectionWrapper } from 'littleGuys/a';
import { fetchLinks } from 'repositories/link.repository';
import { Link } from 'models/link.model';

const Social = styled.div`
  position: absolute;
  z-index: 1;
  right: 0;
`;

const Wrapper = styled(SectionWrapper)`
  height: 100vh;
  position: relative;
  width: 100%;
  @media ${deviceSize.mobile} {
    padding: 10px;
  }
  @media ${deviceSize.tablet} {
    padding: 10px;
  }
  @media ${deviceSize.small} {
    padding: ${(props: ThemeProp) => props.theme.padding.xl}px;
  }
  @media ${deviceSize.medium} {
    padding: ${(props: ThemeProp) => props.theme.padding.xl}px;
  }
  @media ${deviceSize.large} {
    padding: ${(props: ThemeProp) => props.theme.padding.lg * 2}px;
  }
`;

const ColorBlock = styled.div`
  position: absolute;
  z-index: -1;

  @media ${deviceSize.mobile} {
    top: ${(props: ThemeProp) => props.theme.padding.lg *2}px;
    right: ${(props: ThemeProp) => props.theme.padding.xl * 2 }px;
    bottom: ${(props: ThemeProp) => props.theme.padding.lg *2}px;
    left: ${(props: ThemeProp) => props.theme.padding.xl * 2}px;
  }
  @media ${deviceSize.tablet} {
    top: ${(props: ThemeProp) => props.theme.padding.lg *2}px;
    right: ${(props: ThemeProp) => props.theme.padding.xl * 2 }px;
    bottom: ${(props: ThemeProp) => props.theme.padding.lg *2}px;
    left: ${(props: ThemeProp) => props.theme.padding.xl * 2}px;
  }
  @media ${deviceSize.small} {
    top: ${(props: ThemeProp) => props.theme.padding.lg * 2}px;
    right: ${(props: ThemeProp) => props.theme.padding.xl * 2}px;
    bottom: ${(props: ThemeProp) => props.theme.padding.lg * 2}px;
    left: ${(props: ThemeProp) => props.theme.padding.xl * 2}px;
  }
  @media ${deviceSize.medium} {
    top: ${(props: ThemeProp) => props.theme.padding.lg *2}px;
    right: ${(props: ThemeProp) => props.theme.padding.xl * 2 }px;
    bottom: ${(props: ThemeProp) => props.theme.padding.lg *2}px;
    left: ${(props: ThemeProp) => props.theme.padding.xl * 2}px;
  }
  @media ${deviceSize.large} {
    top: ${(props: ThemeProp) => props.theme.padding.xl * 2}px;
    right: ${(props: ThemeProp) => props.theme.padding.xl * 2}px;
    bottom: ${(props: ThemeProp) => props.theme.padding.xl * 2}px;
    left: ${(props: ThemeProp) => props.theme.padding.xl * 2}px;
  }
  background-color: ${(props: ThemeProp) => props.theme.color.accent};
`;

const AboutSection = () => {
  const { description }: About = fetchAbout();
  const links: Link = fetchLinks();

  return (
    <Wrapper>
      <ColorBlock />
      <H1 horizontalTransform="xl" textAlign="right">
        Joshua <br />
        Wootonn
      </H1>
      <H3 horizontalTransform="xl" textAlign="left">
        {description}
      </H3>
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
