import React from 'react';
import { fetchAbout } from 'repositories/about.repository';
import styled from 'styled-components';
import { About } from 'models/about.model';
import { H1, H3, A } from 'typography';

const Social = styled.div`
  position: absolute;
  display: inline-block;
  transform: rotate(-90deg);
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
export default AboutSection;
