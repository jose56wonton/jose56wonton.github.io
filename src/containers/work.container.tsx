import React from 'react';
import styled from 'styled-components';
import { H1, TypographyProps } from 'components/typography';
import { Work } from 'models/work.model';
import { SectionWrapper } from 'littleGuys/a';
import { Container } from 'styled-bootstrap-grid';
import { fetchWork } from 'repositories/work.repository';

import WorkRowContainer from './work/workRow.container';
import { ThemeProp } from '../theme';

const Wrapper = styled(Container)`
  position: relative;
  margin-bottom: ${(props: ThemeProp) => props.theme.elementSizes.xl}px;
  @media (max-width: 575px) {
    padding: 20px;
    flex-direction: column;
  }
  @media (min-width: 571px) and (max-width: 1100px) {
    padding: 20px;
    flex-direction: column;
  }
  @media (min-width: 1101px) {
    padding: 20px;
    flex-direction: row;
  }
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
