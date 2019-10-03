import React from 'react';
import { fetchAbout } from 'repositories/about.repository';
import styled from 'styled-components';
import { About } from 'models/about.model';
import { H1, H3, A, P, Li, TypographyProps } from 'components/typography';
import { fetchExperiences } from 'repositories/experience.repository';
import { Work } from 'models/work.model';
import ReactMarkdown from 'react-markdown';
import { Flex, SectionWrapper } from 'littleGuys/a';
import { format, parse } from 'date-fns';
import { fetchWork } from 'repositories/work.repository';

import { Image } from 'utils/types';
import Img from 'gatsby-image';
import { Theme, ThemeProp } from 'theme';

// TODO: this naming is garbage
const ExperienceBlock = styled(Flex)`
  margin-bottom: 105px;
`;

const Wrapper = styled(SectionWrapper)`
  position: relative;
  width: 100%;
  padding: 250px;
`;

const WorkP = styled(P)`
  margin-bottom: 16px;
  text-align: right;
`;

const ColorBlock = styled.div`
  position: absolute;
  z-index: -1;
  top: ${(props: ThemeProp) => props.theme.outerBox.padding}px;
  bottom: ${(props: ThemeProp) => props.theme.outerBox.padding}px;
  left: ${(props: ThemeProp) => props.theme.outerBox.padding}px;
  right: ${(props: ThemeProp) => props.theme.outerBox.padding}px;
  background-color: ${(props: ThemeProp) => props.theme.color.accent};
`;

const ImageWrapper = styled.div`
  width: 100%;
  background-color: ${(props: ThemeProp) => props.theme.color.light};
  padding: ${(props: ThemeProp) => props.theme.padding.sm}px;
  transform: translateX(-${(props: ThemeProp) => 2 * props.theme.padding.lg}px);
`;

const TextWrapper = styled.div`
  width: 50%;
`;

const WorkSection = () => {
  const works = fetchWork(); // TODO: SHIT needs be in order
  console.log(works.map((w: Work) => w.start));
  console.log(works.map((w: Work) => w.end));

  // TODO: break this out into helper class
  const formatDate = (date: string) => {
    return format(parse(date, 'yyyy-MM-dd', new Date()), 'MMMM yyyy');
  };

  const transformTypography = (props: TypographyProps) => {
    const { innerBox, outerBox } = props.theme;
    const distanceFromEdge = innerBox.padding + outerBox.padding;
    return `transform: translateX(${
      props.align === 'right'
        ? `${distanceFromEdge}px`
        : `-${distanceFromEdge}px`
    });`;
  };

  const SectionTitle = styled(H1)`
    ${(props: TypographyProps) => transformTypography(props)}
  `;

  return (
    <Wrapper>
      <ColorBlock />
      <SectionTitle align="left">Work</SectionTitle>
      {works.map((work: Work) => {
        return (
          <ExperienceBlock
            justify="space-between"
            align="center"
            direction="row"
            key={work.id}
          >
            <ImageWrapper>
              <Img fadeIn fluid={work.images[0].fluid} />
            </ImageWrapper>
            {/* {work.images.map((image: Image) => (
              <div key={image.id} style={{ width: '200px', height: '200px' }}>
                <Img key={image.id} fluid={image.fluid} />
              </div>
            ))} */}
            <TextWrapper>
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
            </TextWrapper>
          </ExperienceBlock>
        );
      })}
    </Wrapper>
  );
};

export default WorkSection;
