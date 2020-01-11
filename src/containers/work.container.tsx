import React from 'react';
import { fetchExperiences } from 'repositories/experience.repository';
import { Experience } from 'models/experience.model';
import { SectionTitle } from '../components/sectionTitle';
import ExperienceRow from './experience/experienceRow';
import { SectionWrapper } from '../components/sectionWrapper';
import { Element } from 'react-scroll';

const ExperienceSection = () => {
  const experiences = fetchExperiences();
  return (
    <SectionWrapper>
      <Element name="work" />
      <SectionTitle>Work</SectionTitle>
      {experiences.map((experience: Experience, index: number) => {
        return (
          <ExperienceRow key={index} index={index} experience={experience} />
        );
      })}
    </SectionWrapper>
  );
};

export default ExperienceSection;
