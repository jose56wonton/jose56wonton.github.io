import React from 'react';
import styled from 'styled-components';
import { fetchExperiences } from 'repositories/experience.repository';
import { Experience } from 'models/experience.model';
import { Flex } from 'components/flex';
import { format, parse } from 'date-fns';
import { Theme } from 'theme';
import { SectionTitle } from '../components/sectionTitle';
import ExperienceRow from './experience/experienceRow';
import { SectionWrapper } from "../components/sectionWrapper"


const ExperienceSection = () => {
  const experiences = fetchExperiences();
  console.log(experiences.map((e: Experience) => e.start));
  console.log(experiences.map((e: Experience) => e.end));

  const formatDate = (date: string) => {
    return format(parse(date, 'yyyy-MM-dd', new Date()), 'MMMM yyyy');
  };
  return (
    <SectionWrapper>
      <SectionTitle>Experience</SectionTitle>
      {experiences.map((experience: Experience, index: number) => {
        return <ExperienceRow key={index} index={index} experience={experience} />;
      })}
    </SectionWrapper>
  );
};

export default ExperienceSection;
