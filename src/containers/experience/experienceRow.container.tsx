import Img from 'gatsby-image';
import { H3, H4, P } from '../../components/typography';
import ReactMarkdown from 'react-markdown';
import { Flex } from '../../components/flex';
import React, { useState } from 'react';
import { Work } from '../../models/work.model';
import styled from 'styled-components';
import { ThemeProp } from '../../theme';
import { ColorBlock } from '../../components/colorBlock';
import { Wiggle } from '../../components/animations';
import { randomNumberInclusive } from '../../utils/random';
import { formatDate } from '../../components/datetime';
import { Col } from 'styled-bootstrap-grid';
import { Experience } from '../../models/experience.model';

const WorkRow = styled(Flex)`
  @media (max-width: 575px) {
    width: 100%;
    flex-direction: column;

    margin-bottom: 50px;
  }
  @media (min-width: 571px) and (max-width: 1100px) {
    margin-left: 5%;
    width: 90%;
    flex-direction: column;
    margin-bottom: 105px;
  }
  @media (min-width: 1101px) {
    flex-direction: row;
    width: 100%;
    margin-bottom: 205px;
  }
`;

const DescriptionText = styled(P)`
  margin-bottom: 16px;
  text-align: right;
  z-index: 5;
`;

export interface WorkColorBlockProps {
  angle: number;
}

const SmallCircle = styled(ColorBlock)<WorkColorBlockProps>`
  border-radius: 50%;
  height: 0;
  width: 90%;
  top: -20%;
  left: -8%;
  padding-bottom: 90%;
  @media (max-width: 575px) {
    animation: ${(props: WorkColorBlockProps) =>
        Wiggle(Math.floor(props.angle / 2))}
      4s infinite;
  }
  @media (min-width: 571px) and (max-width: 1100px) {
    animation: ${(props: WorkColorBlockProps) =>
        Wiggle(Math.floor(props.angle / 2))}
      4s infinite;
  }
  @media (min-width: 1101px) {
    animation: ${(props: WorkColorBlockProps) => Wiggle(props.angle)} 4s
      infinite;
  }
`;

const BigCircle = styled(ColorBlock)<WorkColorBlockProps>`
  border-radius: 50%;
  height: 0;
  width: 105%;
  padding-bottom: 105%;
  top: -8%;
  right: -10%;
  @media (max-width: 575px) {
    animation: ${(props: WorkColorBlockProps) =>
        Wiggle(Math.floor(props.angle / 2))}
      4s infinite;
  }
  @media (min-width: 571px) and (max-width: 1100px) {
    animation: ${(props: WorkColorBlockProps) =>
        Wiggle(Math.floor(props.angle / 2))}
      4s infinite;
  }
  @media (min-width: 1101px) {
    animation: ${(props: WorkColorBlockProps) => Wiggle(props.angle)} 4s
      infinite;
  }
`;

const DescriptionFrame = styled(Col)`
  @media (max-width: 575px) {
    width: 100%;
    margin-bottom: 50px;
  }
  @media (min-width: 571px) and (max-width: 1100px) {
    width: 100%;
    margin-bottom: 50px;
  }
  @media (min-width: 1101px) {
    width: 40%;
  }
  position: relative;
`;

interface Props {
  experience: Experience;
  index: number;
}

const ExperienceRowContainer = (props: Props) => {
  const { experience } = props;

  const isVersion = props.index % 2 === 1;

  return (
    <WorkRow justify="space-between" align="center" key={experience.id}>
      <DescriptionFrame xs={12} md={5}>
        <SmallCircle
          angle={randomNumberInclusive(-10, 10)}
          backgroundColor={isVersion ? 'purple' : 'green'}
        />
        <Flex direction="column" align="center">
          <Flex
            wrap="wrap"
            direction="row"
            justify="space-between"
            align="center"
          >
            <H4 marginBottom="sm">When: </H4>
            <P
              textAlign="right"
              marginLeft="sm"
              color={isVersion ? 'medium' : 'dark'}
            >
              {`${formatDate(experience.start)} - ${formatDate(
                experience.end
              )}`}
            </P>
          </Flex>
          <Flex wrap="wrap" justify="flex-start" direction="row" align="center">
            <H4 marginBottom="sm">Stack: </H4>
            <Flex wrap="wrap" justify="flex-start">
              {experience.stack.map((stack: string) => (
                <P
                  textAlign="left"
                  marginLeft="sm"
                  marginBottom="sm"
                  color={isVersion ? 'medium' : 'dark'}
                  key={stack + experience.id}
                >
                  {stack}
                </P>
              ))}
            </Flex>
          </Flex>
        </Flex>
      </DescriptionFrame>
      <DescriptionFrame xs={12} md={7}>
        <BigCircle
          angle={randomNumberInclusive(-10, 10)}
          backgroundColor={!isVersion ? 'purple' : 'green'}
        />
        <H3 marginBottom="sm" textAlign="right">
          {experience.title}
        </H3>

        <H4 marginBottom="sm" textAlign="right">
          Where: {experience.company}{' '}
        </H4>
        <Flex
          wrap="wrap"
          direction="row"
          justify="space-between"
          align="flex-start"
        >
          <ReactMarkdown
            renderers={{
              listItem: DescriptionText,
            }}
            source={experience.description}
          />
        </Flex>
      </DescriptionFrame>
    </WorkRow>
  );
};

export default ExperienceRowContainer;
