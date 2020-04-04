import React, { FC } from 'react';
import { Work } from '../../models/work.model';
import { fetchWork } from '../../repositories/work.repository';

import ProjectRow from './projectRow';
import { SectionWrapper } from '../../components/sectionWrapper';
import { SectionTitle } from '../../components/sectionTitle';
import { Element } from 'react-scroll';

const ProjectContainer: FC = () => {
    const works = fetchWork(); // TODO: this needs be in order
    return (
        <SectionWrapper>
            <Element name="projects" />
            <SectionTitle>Projects</SectionTitle>
            {works.map((work: Work, index: number) => {
                return <ProjectRow key={index} work={work} />;
            })}
        </SectionWrapper>
    );
};

export default ProjectContainer;