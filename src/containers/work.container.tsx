import React from 'react';
import styled from 'styled-components';
import { H1, TypographyProps } from 'components/typography';
import { Work } from 'models/work.model';
import { fetchWork } from 'repositories/work.repository';

import WorkRowContainer from './work/workRow.container';
import { SectionWrapper } from "../components/sectionWrapper";

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
    <SectionWrapper>
      <SectionTitle>Work</SectionTitle>
      {works.map((work: Work, index: number) => {
        return <WorkRowContainer key={index} work={work} />;
      })}
    </SectionWrapper>
  );
};

export default WorkSection;
