import React, { useState } from 'react';
import { fetchAbout } from 'repositories/about.repository';
import { About } from 'models/about.model';
import { fetchLinks } from 'repositories/link.repository';
import { Link } from 'models/link.model';
import { Container } from 'styled-bootstrap-grid';
import TopRowContainer from './about/topRow.container';
import BottomRowContainer from './about/bottomRow.container';
import { randomNumberInclusive } from '../utils/random';
import styled from 'styled-components';

const AboutStyledContainer = styled(Container)`
  //overflow-x: hidden;
`;

const AboutContainer = () => {
  const [isDescriptionHovered, setDescriptionHovered] = useState<number>(0);

  const aboutVariants: About[] = fetchAbout();
  const links: Link = fetchLinks();

  const descriptionRandomizor = (isHovered: boolean) => {
    if (isHovered && aboutVariants.length > 0) {
      setDescriptionHovered(randomNumberInclusive(1, aboutVariants.length));
    } else {
      setDescriptionHovered(0);
    }
  };
  return (
    <AboutStyledContainer>
      <TopRowContainer
        links={links}
        setDescriptionHovered={descriptionRandomizor}
        fluidGif={
          isDescriptionHovered === 0
            ? null
            : aboutVariants[isDescriptionHovered - 1].gif.fluid
        }
        emoji={
          isDescriptionHovered === 0
            ? ''
            : aboutVariants[isDescriptionHovered - 1].emoji
        }
      />
      <BottomRowContainer
        isDescriptionHovered={isDescriptionHovered}
        setDescriptionHovered={descriptionRandomizor}
        title={
          isDescriptionHovered === 0
            ? 'Software Engineer'
            : aboutVariants[isDescriptionHovered - 1].title
        }
      />
    </AboutStyledContainer>
  );
};

export default AboutContainer;
