import React from 'react';
import styled from 'styled-components';
import { H1, H3, P } from 'components/typography';
import { Flex, SectionWrapper } from 'components/flex';
import { format, parse } from 'date-fns';
import { fetchArt } from 'repositories/art.repository';

import Img from 'gatsby-image';
import { Art } from 'models/art.model';

// TODO: this naming is garbage
const ArtBlock = styled(Flex)`
  margin-bottom: 105px;
  position: relative;
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
            <Aaa key={art.images[0].id} fluid={art.images[0].fluid} />
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
