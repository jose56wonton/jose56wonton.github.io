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
import { fetchWork } from 'repositories/work.repository';
import { fetchArt } from 'repositories/art.repository';

import { Image } from 'helpers/types';
import Img from 'gatsby-image';
import { Art } from 'models/art.model';

// TODO: this naming is garbage
const ArtBlock = styled(Flex)`
  margin-bottom: 105px;
`;

const WorkP = styled(P)`
  margin-bottom: 16px;
  text-align: right;
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
            justify="space-between"
            align="center"
            direction="row"
            key={art.id}
          >
            {art.images.map((image: Image) => (
              <div key={image.id} style={{ width: '200px', height: '200px' }}>
                <Img key={image.id} fluid={image.fluid} />
              </div>
            ))}
            <div>
              <H3 align="right">{art.title}</H3>
              <P color="medium" align="right">
                {formatDate(art.date)}
              </P>
            </div>
          </ArtBlock>
        );
      })}
    </SectionWrapper>
  );
};

export default ArtSection;
