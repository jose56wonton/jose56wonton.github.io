import React from 'react';
import styled from 'styled-components';
import { H1, TypographyProps } from 'components/typography';
import { Work } from 'models/work.model';
import { SectionWrapper } from 'littleGuys/a';
import { fetchWork } from 'repositories/work.repository';

import WorkRowContainer from './work/workRow.container';

const Wrapper = styled(SectionWrapper)`
  position: relative;
  width: 100%;
  padding: 250px;
`;

const WorkSection = () => {
  const works = fetchWork(); // TODO: SHIT needs be in order
  console.log(works.map((w: Work) => w.start));
  console.log(works.map((w: Work) => w.end));


  const transformTypography = (props: TypographyProps) => {
    return `transform: translateX(${
      props.textAlign === 'right'
        ? `${props.theme.elementSizes.xl}px`
        : `-${props.theme.elementSizes.xl}px`
    });`;
  };

  const SectionTitle = styled(H1)`
    ${(props: TypographyProps) => transformTypography(props)}
  `;

  return (
    <Wrapper>
      <SectionTitle>Work</SectionTitle>
      {works.map((work: Work, index: number) => {
        return <WorkRowContainer key={index} work={work} />;
      })}
    </Wrapper>
  );
};

export default WorkSection;
