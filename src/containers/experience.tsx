import React from 'react';
import { fetchAbout } from 'repositories/about.repository';
import styled from 'styled-components';
import { About } from 'models/about.model';
import { H1, H3, A, P, Li, H2 } from 'components/typography';
import { fetchExperiences } from 'repositories/experience.repository';
import { Experience } from 'models/experience.model';
import ReactMarkdown from 'react-markdown';
import { Flex, SectionWrapper } from 'littleGuys/a';
import { format, parse } from 'date-fns';
import { Theme } from 'theme';

// TODO: this naming is garbage
const ExperienceOuterBlock = styled(Flex)`
  margin-bottom: 105px;
  width: 100%;
  position: relative;
`;

const ExperienceInnerBlock = styled.div`
  width: 50%;
  position: relative;
`;

// TODO: add resume to this section
// TODO MAYBE ADD THIS OR SOME OTHER ELEMENT BACK INTO THE MIX?
const ColorBlock = styled.div`
  background-color: ${(props: { theme: Theme }) => props.theme.color.fun1};
  position: absolute;
  z-index: -1;
  height: 100%;
  right: 0;
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
      {experiences.map((experience: Experience, i: number) => {
        const isEven = i % 2 === 0;
        return (
          <ExperienceOuterBlock
            key={experience.id}
            justify={isEven ? 'flex-end' : 'flex-start'}
            align="center"
            direction="row"
          >
            <ExperienceInnerBlock>
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
            </ExperienceInnerBlock>
          </ExperienceOuterBlock>
        );
      })}
    </SectionWrapper>
  );
};

export default ExperienceSection;
