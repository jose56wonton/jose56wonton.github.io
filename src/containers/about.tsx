import React from 'react';
import { fetchAbout } from 'repositories/about.repository';
import styled from 'styled-components';
import { About } from 'models/about.model';
import { H1, H3, A } from 'typography';
import { Theme } from 'theme';

interface SocialProps {
  theme: Theme;
}

const Social = styled.div`
  position: absolute;
  z-index: 1;
  transform: ${(props: SocialProps) =>
    `rotate(-90deg) translateY(${props.theme.outerBox.padding}px)`};
  right: 0px;
`;

const AboutSection = () => {
  const about: About = fetchAbout();

  return (
    <>
      <H1 align="right">
        Joshua <br />
        Wootonn
      </H1>
      <H3 align="left">{about.description}</H3>
      <Social>
        <A href="">github</A>
        <A href="">medium</A>
        <A href="">linked in</A>
      </Social>
    </>
  );
};
// TODO: Get these links from Contentful!!

export default AboutSection;
