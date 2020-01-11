import { H3, H4, MarkdownP, P } from '../../components/typography';
import ReactMarkdown from 'react-markdown';
import { Flex } from '../../components/flex';
import React from 'react';
import styled from 'styled-components';
import { ColorDiv } from '../../components/colorDiv';
import { Jiggle } from '../../components/animations';
import { randomInclusive } from '../../utils/random';
import { formatDate } from '../../components/datetime';
import { Experience } from '../../models/experience.model';
import { Row as GenericRow, Col } from '../../components/layout';

const Row = styled(GenericRow)`
  @media (max-width: 1100px) {
    flex-direction: column-reverse;
  }
`;

export interface ColorCircleProps {
  displacement: number;
  animationTime: number;
}

const SmallCircle = styled(ColorDiv)<ColorCircleProps>`
  animation: ${props => Jiggle(props.displacement / 2)}
    ${props => props.animationTime}s infinite;
  @media (max-width: 1100px) {
    z-index: 4;
  }
  @media (min-width: 1101px) {
    animation: ${props => Jiggle(props.displacement)}
      ${props => props.animationTime}s infinite;
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

const BigCircle = styled(ColorDiv)<ColorCircleProps>`
  border-radius: 50%;
  height: 0;
  z-index: -1;
  animation: ${props => Jiggle(props.displacement / 2)}
    ${props => props.animationTime}s infinite;

  @media (max-width: 400px) {
    width: 190%;
    padding-bottom: 190%;
    right: -50%;
  }
  @media (min-width: 401px) and (max-width: 575px) {
    width: 150%;
    padding-bottom: 150%;
    top: -8%;
    right: -25%;
  }
  @media (min-width: 571px) and (max-width: 1100px) {
    width: 100%;
    padding-bottom: 100%;
    top: -8%;
    right: -10%;
  }
  @media (min-width: 1101px) {
    animation: ${props => Jiggle(props.displacement)}
      ${props => props.animationTime}s infinite;
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

interface Props {
  experience: Experience;
  index: number;
}

const ExperienceRow = ({ experience, index }: Props) => {
  const version = index % 2;

  return (
    <Row justify="space-between" align="center" key={experience.id}>
      <Col xs={12} md={5}>
        <SmallCircle
          displacement={randomInclusive(-10, 10)}
          animationTime={randomInclusive(2, 4)}
          backgroundColor={version === 1 ? 'purple' : 'green'}
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
                color={version === 1 ? 'medium' : 'dark'}
              >
                {formatDate(experience.start)} -
              </P>
              <P
                textAlign="left"
                marginLeft="sm"
                marginBottom="sm"
                color={version === 1 ? 'medium' : 'dark'}
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
                  color={version === 1 ? 'medium' : 'dark'}
                  key={stack + experience.id}
                >
                  {stack}
                </P>
              ))}
            </Flex>
          </Flex>
        </Flex>
      </Col>
      <Col xs={12} md={7}>
        <BigCircle
          displacement={randomInclusive(-10, 10)}
          animationTime={randomInclusive(2, 4)}
          backgroundColor={version === 0 ? 'purple' : 'green'}
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
              listItem: MarkdownP,
            }}
            source={experience.description}
          />
        </Flex>
      </Col>
    </Row>
  );
};

export default ExperienceRow;
