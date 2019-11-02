import Img from 'gatsby-image';
import { H3, H4, P } from '../../components/typography';
import ReactMarkdown from 'react-markdown';
import { Flex } from '../../components/flex';
import React from 'react';
import { Work } from '../../models/work.model';
import styled from 'styled-components';
import { ThemeProp } from '../../theme';
import { ColorBlock } from '../../components/colorBlock';
import { Wiggle } from '../../components/animations';
import { randomNumberInclusive } from '../../utils/random';
import { formatDate } from '../../components/datetime';
import { Row, Col } from '../../components/layout';

const DescriptionText = styled(P)`
  margin-bottom: 16px;
  text-align: right;
`;

interface WorkColorBlockProps {
  angle: number;
}

const WorkColorBlock = styled(ColorBlock)<WorkColorBlockProps>`
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

const ImageCol = styled(Col)`
  background-color: ${(props: ThemeProp) => props.theme.color.light};
  padding: ${(props: ThemeProp) => props.theme.elementSizes.sm}px;
  @media (max-width: 575px) {
    margin: 0 20px 30px 20px;
  }
  @media (min-width: 571px) and (max-width: 1100px) {
    margin: 0px 20px 30px 20px;
  }
  @media (min-width: 1101px) {
    width: 60%;
    transform: translateX(
      -${(props: ThemeProp) => 2 * props.theme.elementSizes.lg}px
    );
  }
`;

interface Props {
  work: Work;
}

const WorkRow = ({ work }: Props) => {
  return (
    <Row justify="space-between" align="center" key={work.id}>
      <ImageCol xs={12} md={7}>
        <Img fadeIn fluid={work.images[0].fluid} />
      </ImageCol>

      <Col xs={12} md={5}>
        <WorkColorBlock
          angle={randomNumberInclusive(-10, 10)}
          backgroundColor="pink"
        />
        <H3 marginBottom="sm" textAlign="right">
          {work.title}
        </H3>
        <Flex
          wrap="wrap"
          direction="row"
          justify="space-between"
          align="center"
        >
          <H4 marginBottom="sm">When: </H4>
          <P textAlign="right" marginLeft="sm" color="medium">
            {`${formatDate(work.start)} - ${formatDate(work.end)}`}
          </P>
        </Flex>
        <Flex
          wrap="wrap"
          direction="row"
          justify="space-between"
          align="flex-start"
        >
          <H4 marginBottom="sm">What: </H4>
          <ReactMarkdown
            renderers={{
              paragraph: DescriptionText,
            }}
            source={work.description}
          />
        </Flex>
        <Flex
          wrap="wrap"
          justify="space-between"
          direction="row"
          align="center"
        >
          <H4 marginBottom="sm">How: </H4>
          <Flex wrap="wrap" justify="flex-end">
            {work.technologies.map((technology: string) => (
              <P
                textAlign="right"
                marginLeft="sm"
                marginBottom="sm"
                color="medium"
                key={technology + work.id}
              >
                {technology}
              </P>
            ))}
          </Flex>
        </Flex>
      </Col>
    </Row>
  );
};

export default WorkRow;
