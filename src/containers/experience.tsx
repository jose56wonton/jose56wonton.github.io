import React from 'react';
import { fetchAbout } from 'repositories/about.repository';
import styled from 'styled-components';
import { About } from 'models/about.model';
import { H1, H3, A, P, Li } from 'components/typography';
import { fetchExperiences } from 'repositories/experience.repository';
import { Experience } from 'models/experience.model';
import ReactMarkdown from 'react-markdown';
import { Flex, SectionWrapper } from 'littleGuys/a';
import { format, parse } from 'date-fns';
import { Theme } from 'theme';

// TODO: this naming is garbage
const ExperienceBlock = styled.div`
  margin-bottom: 105px;
`;

// TODO: add resume to this section
const ColorBlock = styled.div`
  background-color: ${(props: { theme: Theme }) => props.theme.color.accent};
  position: relative;
  height: 100%;
  width: 100%;
  padding: 50px;
`;

const ExperienceSection = () => {
  const experiences = fetchExperiences();
  console.log(experiences.map((e: Experience) => e.start));
  console.log(experiences.map((e: Experience) => e.end));

  const formatDate = (date: string) => {
    return format(parse(date, 'yyyy-MM-dd', new Date()), 'MMMM yyyy');
  };

  return (
    <SectionWrapper>
      <H1 align="left">Experience</H1>
      {experiences.map((experience: Experience) => {
        return (
          <ExperienceBlock key={experience.id}>
            <H3 align="right">
              {experience.title} @ {experience.company}
            </H3>
            <P color="medium" align="right">
              {experience.isCurrentlyWorking
                ? `${formatDate(experience.start)} - Present`
                : `${formatDate(experience.start)} - ${formatDate(
                    experience.end
                  )}`}
            </P>
            <ReactMarkdown
              renderers={{
                listItem: Li,
              }}
              source={experience.description}
            />

            <Flex justify="flex-end" direction="row" align="center">
              {experience.stack.map((technology: string) => (
                <P key={technology + experience.id}>{technology}</P>
              ))}
            </Flex>
          </ExperienceBlock>
        );
      })}
    </SectionWrapper>
  );
};

export default ExperienceSection;
