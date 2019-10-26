import React from 'react';
import styled from 'styled-components';
import { H1, H3, H4, P } from 'components/typography';
import ReactMarkdown from 'react-markdown';
import { Flex, SectionWrapper } from 'components/flex';
import { format, parse } from 'date-fns';
import { fetchThoughts } from 'repositories/thought.repository';

import { Thought } from 'models/thought.model';

// TODO: this naming is garbage
const ExperienceBlock = styled(Flex)`
  margin-bottom: 105px;
`;

const ThoughtP = styled(P)`
  margin-bottom: 16px;
`;

const ThoughtH4 = styled(H4)`
  margin-bottom: 16px;
`;
const ThoughtH3 = styled(H3)`
  margin-bottom: 16px;
  margin-right: 16px;
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
            <div>
              <Flex direction="row" align="center">
                <ThoughtH3 align="left">{thought.title}</ThoughtH3>
                <P color="medium" align="left">
                  {formatDate(thought.date)}
                </P>
              </Flex>

              <ReactMarkdown
                renderers={{
                  paragraph: ThoughtP,
                  heading: ThoughtH4,
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
