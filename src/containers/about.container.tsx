import React, { useState } from 'react';
import { fetchAbout } from 'repositories/about.repository';
import { About } from 'models/about.model';
import { fetchLinks } from 'repositories/link.repository';
import { Link } from 'models/link.model';
import { Container } from 'styled-bootstrap-grid';
import TopRowContainer from './about/topRow.container';
import BottomRowContainer from './about/bottomRow.container';
import { randomNumberInclusive } from '../utils/random';

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
  console.log(isDescriptionHovered, aboutVariants);
  return (
    <Container>
      <TopRowContainer
        links={links}
        isDescriptionHovered={isDescriptionHovered}
        setDescriptionHovered={descriptionRandomizor}
        gifSrc={
          isDescriptionHovered === 0
            ? ''
            : aboutVariants[isDescriptionHovered - 1].gif.fluid.src
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
    </Container>
  );
};

export default AboutContainer;
