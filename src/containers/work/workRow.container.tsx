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
  margin-bottom: 105px;
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
  }
  @media (min-width: 571px) and (max-width: 1100px) {
  }
  @media (min-width: 1101px) {
  }
  animation: ${(props: WorkColorBlockProps) => Wiggle(props.angle)} 4s infinite;
`;

const ImageFrame = styled.div`
  width: 100%;
  background-color: ${(props: ThemeProp) => props.theme.color.light};
  padding: ${(props: ThemeProp) => props.theme.elementSizes.sm}px;
  transform: translateX(
    -${(props: ThemeProp) => 2 * props.theme.elementSizes.lg}px
  );
`;

const DescriptionFrame = styled(Flex)`
  width: 50%;
  position: relative;
`;

interface Props {
  work: Work;
}

const WorkRowContainer = (props: Props) => {
  const { work } = props;
  console.log(work);
  return (
    <WorkRow
      justify="space-between"
      align="center"
      direction="row"
      key={work.id}
    >
      <ImageFrame>
        <Img fadeIn fluid={work.images[0].fluid} />
      </ImageFrame>

      <DescriptionFrame direction="column">
        <WorkColorBlock
          angle={randomNumberInclusive(-10, 10)}
          backgroundColor="pink"
        />
        <H3 textAlign="right">{work.title}</H3>
        <Flex direction="row" justify="space-between" align="center">
          <H4 marginBottom="sm">When: </H4>
          <P textAlign="right" marginLeft="sm" color="medium">
            {`${formatDate(work.start)} - ${formatDate(work.end)}`}
          </P>
        </Flex>
        <Flex direction="row" justify="space-between" align="flex-start">
          <H4 marginBottom="sm">What: </H4>
          <ReactMarkdown
            renderers={{
              paragraph: DescriptionText,
            }}
            source={work.description}
          />
        </Flex>
        <Flex direction="row" justify="center" align="center">
          <H4 marginBottom="sm">How: </H4>
          {work.technologies.map((technology: string) => (
            <P
              marginLeft="md"
              marginBottom="sm"
              color="medium"
              key={technology + work.id}
            >
              {technology}
            </P>
          ))}
        </Flex>
      </DescriptionFrame>
    </WorkRow>
  );
};

export default WorkRowContainer;
