import Img from 'gatsby-image';
import { H3, H4, P } from '../../components/typography';
import ReactMarkdown from 'react-markdown';
import { Flex } from '../../littleGuys/a';
import React from 'react';
import { Work } from '../../models/work.model';
import styled from 'styled-components';
import { theme, ThemeProp } from '../../theme';
import { format, parse } from 'date-fns';
import { ColorBlock } from '../../components/colorBlock';
import { Wiggle } from '../../components/animations';
import { randomNumberInclusive } from '../../utils/random';
import { formatDate } from '../../components/datetime';

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
    margin-bottom: 105px;
  }
`;

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

const ImageFrame = styled.div`
  background-color: ${(props: ThemeProp) => props.theme.color.light};
  padding: ${(props: ThemeProp) => props.theme.elementSizes.sm}px;
  @media (max-width: 575px) {
  width: 100%;
    margin-bottom: 50px;
  }
  @media (min-width: 571px) and (max-width: 1100px) {
  width: 100%;
    margin-bottom: 50px;
  }
  @media (min-width: 1101px) {
    width: 60%;
    transform: translateX(
      -${(props: ThemeProp) => 2 * props.theme.elementSizes.lg}px
    );
  }
`;

const DescriptionFrame = styled(Flex)`
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
  work: Work;
}

const WorkRowContainer = (props: Props) => {
  const { work } = props;
  console.log(work);
  return (
    <WorkRow justify="space-between" align="center" key={work.id}>
      <ImageFrame>
        <Img fadeIn fluid={work.images[0].fluid} />
      </ImageFrame>

      <DescriptionFrame direction="column">
        <WorkColorBlock
          angle={randomNumberInclusive(-10, 10)}
          backgroundColor="pink"
        />
        <H3 marginBottom="sm" textAlign="right">{work.title}</H3>
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
      </DescriptionFrame>
    </WorkRow>
  );
};

export default WorkRowContainer;
