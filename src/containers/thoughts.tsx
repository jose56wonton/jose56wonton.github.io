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
import { fetchThoughts } from 'repositories/thought.repository';

import { Image } from 'helpers/types';
import Img from 'gatsby-image';
import { Thought } from 'models/thought.model';

// TODO: this naming is garbage
const ExperienceBlock = styled(Flex)`
  margin-bottom: 105px;
`;

const ThoughtP = styled(P)`
  margin-bottom: 16px;
  text-align: right;
`;

const ThoughtSection = () => {
  const thoughts = fetchThoughts(); // TODO: SHIT needs be in order
  console.log(thoughts.map((t: Thought) => t.date));

  const formatDate = (date: string) => {
    return format(parse(date, 'yyyy-MM-dd', new Date()), 'MMMM yyyy');
  };

  return (
    <SectionWrapper>
      <H1 align="left">Thought</H1>
      {thoughts.map((thought: Thought) => {
        return (
          <ExperienceBlock
            justify="space-between"
            align="center"
            direction="row"
            key={thought.id}
          >
            {thought.images.map((image: Image) => (
              <div key={image.id} style={{ width: '200px', height: '200px' }}>
                <Img key={image.id} fluid={image.fluid} />
              </div>
            ))}
            <div>
              <H3 align="right">{thought.title}</H3>
              <P color="medium" align="right">
                {formatDate(thought.date)}
              </P>
              <ReactMarkdown
                renderers={{
                  paragraph: ThoughtP,
                }}
                source={thought.description}
              />
            </div>
          </ExperienceBlock>
        );
      })}
    </SectionWrapper>
  );
};

export default ThoughtSection;
