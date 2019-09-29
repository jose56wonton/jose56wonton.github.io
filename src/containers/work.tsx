import React from 'react';
import { fetchAbout } from 'repositories/about.repository';
import styled from 'styled-components';
import { About } from 'models/about.model';
import { H1, H3, A, P, Li } from 'typography';
import { fetchExperiences } from 'repositories/experience.repository';
import { Work } from 'models/work.model';
import ReactMarkdown from 'react-markdown';
import { Flex, SectionWrapper } from 'littleGuys/a';
import { format, parse } from 'date-fns';
import { fetchWork } from 'repositories/work.repository';

import { Image } from 'helpers/types';
import Img from 'gatsby-image';

// TODO: this naming is garbage
const ExperienceBlock = styled(Flex)`
  margin-bottom: 105px;
`;

const WorkP = styled(P)`
  margin-bottom: 16px;
  text-align: right;
`;

const WorkSection = () => {
  const works = fetchWork(); // TODO: SHIT needs be in order
  console.log(works.map((w: Work) => w.start));
  console.log(works.map((w: Work) => w.end));

  const formatDate = (date: string) => {
    return format(parse(date, 'yyyy-MM-dd', new Date()), 'MMMM yyyy');
  };

  return (
    <SectionWrapper>
      <H1 align="left">Work</H1>
      {works.map((work: Work) => {
        return (
          <ExperienceBlock
            justify="space-between"
            align="center"
            direction="row"
            key={work.id}
          >
            {work.images.map((image: Image) => (
              <div key={image.id} style={{ width: '200px', height: '200px' }}>
                <Img key={image.id} fluid={image.fluid} />
              </div>
            ))}
            <div>
              <H3 align="right">{work.title}</H3>
              <P color="medium" align="right">
                {`${formatDate(work.start)} - ${formatDate(work.end)}`}
              </P>
              <ReactMarkdown
                renderers={{
                  paragraph: WorkP,
                }}
                source={work.description}
              />

              <Flex justify="flex-end" direction="row" align="center">
                {work.technologies.map((technology: string) => (
                  <P key={technology + work.id}>{technology}</P>
                ))}
              </Flex>
            </div>
          </ExperienceBlock>
        );
      })}
    </SectionWrapper>
  );
};

export default WorkSection;
