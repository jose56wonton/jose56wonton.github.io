import React from 'react';
import { fetchAbout } from 'repositories/about.repository';
import styled from 'styled-components';
import { About } from 'models/about.model';
import { H1, H3, A, P, Li } from 'components/typography';
import { fetchExperiences } from 'repositories/experience.repository';
import { Work } from 'models/work.model';
import ReactMarkdown from 'react-markdown';
import { Flex, SectionWrapper } from 'littleGuys/a';
import { format, parse } from 'date-fns';
import { fetchWork } from 'repositories/work.repository';
import { fetchArt } from 'repositories/art.repository';

import { Image } from 'utils/types';
import Img from 'gatsby-image';
import { Art } from 'models/art.model';
import { Theme } from 'theme';

// TODO: this naming is garbage
const ArtBlock = styled(Flex)`
  margin-bottom: 105px;
  position: relative;
`;

const WorkP = styled(P)`
  margin-bottom: 16px;
  text-align: right;
`;

const ColorBlock = styled.div`
  background-color: ${(props: { theme: Theme }) => props.theme.color.accent};
  position: relative;
  height: 100%;
  width: 100%;
  padding: 50px;
`;

const Aaa = styled(Img)`
  width: 80%;
  justify-content: center;
  align-items: center;
`;

const Text = styled.div`
  position: absolute;
  top: 50%;
  right: 15%;
`;

const ArtSection = () => {
  const arts = fetchArt(); // TODO: SHIT needs be in order
  console.log(arts.map((a: Art) => a.date));
  console.log(arts.map((a: Art) => a.date));

  // TODO: this needs to be put into a helper
  const formatDate = (date: string) => {
    return format(parse(date, 'yyyy-MM-dd', new Date()), 'MMMM yyyy');
  };

  return (
    <SectionWrapper>
      <H1 align="left">Art</H1>
      {arts.map((art: Art) => {
        return (
          <ArtBlock
            justify="center"
            align="center"
            direction="row"
            key={art.id}
          >
            <Aaa key={art.images[0].id} fluid={art.images[0].fluid}></Aaa>
            <Text>
              <H3 color="light" align="right">
                {art.title}
              </H3>
              <P color="light" align="right">
                {formatDate(art.date)}
              </P>
            </Text>
          </ArtBlock>
        );
      })}
    </SectionWrapper>
  );
};

export default ArtSection;
