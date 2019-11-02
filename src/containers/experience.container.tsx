import React from 'react';
import { fetchExperiences } from 'repositories/experience.repository';
import { Experience } from 'models/experience.model';
import { SectionTitle } from '../components/sectionTitle';
import ExperienceRow from './experience/experienceRow';
import { SectionWrapper } from '../components/sectionWrapper';

const ExperienceSection = () => {
  const experiences = fetchExperiences();
  return (
    <SectionWrapper>
      <SectionTitle>Experience</SectionTitle>
      {experiences.map((experience: Experience, index: number) => {
        return (
          <ExperienceRow key={index} index={index} experience={experience} />
        );
      })}
    </SectionWrapper>
  );
};

export default ExperienceSection;
