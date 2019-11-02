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
    flex-direction: column-reverse;

    margin-bottom: 100px;
  }
  @media (min-width: 571px) and (max-width: 1100px) {
    margin-left: 5%;
    width: 90%;
    flex-direction: column-reverse;
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
  @media (max-width: 575px) {
    animation: ${(props: WorkColorBlockProps) =>
  Wiggle(Math.floor(props.angle / 2))}
      4s infinite;
    z-index: 4;
  }
  @media (min-width: 571px) and (max-width: 1100px) {
    animation: ${(props: WorkColorBlockProps) =>
  Wiggle(Math.floor(props.angle / 2))}
      4s infinite;
    z-index: 4;
  }
  @media (min-width: 1101px) {
    animation: ${(props: WorkColorBlockProps) => Wiggle(props.angle)} 4s
      infinite;
    border-radius: 50%;
    height: 0;
    width: 90%;
    top: -20%;
    left: -8%;
    padding-bottom: 90%;
  }
  @media (min-width: 2561px) {
    width: 110%;
    top: 0;
    left: -18%;
    padding-bottom: 110%;
  }
`;

const BigCircle = styled(ColorBlock)<WorkColorBlockProps>`
  border-radius: 50%;
  height: 0;
  z-index: -1;

  @media (max-width: 400px) {
    animation: ${(props: WorkColorBlockProps) =>
        Wiggle(Math.floor(props.angle / 2))}
      4s infinite;
    width: 190%;
    padding-bottom: 190%;

    right: -50%;
  }

  @media (min-width: 401px) and (max-width: 575px) {
    animation: ${(props: WorkColorBlockProps) =>
        Wiggle(Math.floor(props.angle / 2))}
      4s infinite;
    width: 150%;
    padding-bottom: 150%;
    top: -8%;
    right: -25%;
  }
  @media (min-width: 571px) and (max-width: 1100px) {
    animation: ${(props: WorkColorBlockProps) =>
        Wiggle(Math.floor(props.angle / 2))}
      4s infinite;
    width: 100%;
    padding-bottom: 100%;
    top: -8%;
    right: -10%;
  }
  @media (min-width: 1101px) {
    animation: ${(props: WorkColorBlockProps) => Wiggle(props.angle)} 4s
      infinite;
    width: 100%;
    padding-bottom: 100%;
    top: -8%;
    right: -10%;
  }
  @media (min-width: 1921px) {
    width: 120%;
    padding-bottom: 120%;
    right: -15%;
    top: -5%;
  }
  @media (min-width: 2561px) {
    width: 170%;
    padding-bottom: 170%;
    right: -35%;
  }
`;

const DescriptionFrame = styled(Col)`
  @media (max-width: 575px) {
    width: 90%;
    margin: 0 20px 0px 20px;
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
            isFullWidth={true}
            wrap="wrap"
            justify="flex-start"
            direction="row"
            align="center"
            style={{ paddingRight: '30px' }}
          >
            <H4 marginBottom="sm">When: </H4>
            <Flex wrap="wrap" justify="flex-start">
              <P
                textAlign="left"
                marginLeft="sm"
                marginBottom="sm"
                color={isVersion ? 'medium' : 'dark'}
              >
                {formatDate(experience.start)} -
              </P>
              <P
                textAlign="left"
                marginLeft="sm"
                marginBottom="sm"
                color={isVersion ? 'medium' : 'dark'}
              >
                {formatDate(experience.end)}
              </P>
            </Flex>
          </Flex>
          <Flex
            isFullWidth={true}
            wrap="wrap"
            justify="flex-start"
            direction="row"
            align="center"
          >
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
