import React from 'react';
import { Work } from 'models/work.model';
import { fetchWork } from 'repositories/work.repository';

import WorkRowContainer from './work/workRow.container';
import { SectionWrapper } from '../components/sectionWrapper';
import { SectionTitle } from '../components/sectionTitle';

const WorkSection = () => {
  const works = fetchWork(); // TODO: this needs be in order
  return (
    <SectionWrapper>
      <SectionTitle>Projects</SectionTitle>
      {works.map((work: Work, index: number) => {
        return <WorkRowContainer key={index} work={work} />;
      })}
    </SectionWrapper>
  );
};

export default WorkSection;
