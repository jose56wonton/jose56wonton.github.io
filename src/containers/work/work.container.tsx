import React from 'react';
import { fetchExperiences } from '../../repositories/experience.repository';
import { Experience } from '../../models/experience.model';
import { SectionTitle } from '../../components/sectionTitle';
import WorkRow from './workRow';
import { SectionWrapper } from '../../components/sectionWrapper';
import { Element } from 'react-scroll';

const WorkSection = () => {
    const experiences = fetchExperiences();
    return (
        <SectionWrapper>
            <Element name="work" />
            <SectionTitle>Work</SectionTitle>
            {experiences.map((experience: Experience, index: number) => {
                return (
                    <WorkRow key={index} index={index} experience={experience} />
                );
            })}
        </SectionWrapper>
    );
};

export default WorkSection;