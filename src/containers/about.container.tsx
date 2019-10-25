import React, { useState } from 'react';
import { fetchAbout } from 'repositories/about.repository';
import { About } from 'models/about.model';
import { fetchLinks } from 'repositories/link.repository';
import { Link } from 'models/link.model';
import { Container } from 'styled-bootstrap-grid';
import TopRowContainer from './about/topRow.container';
import BottomRowContainer from './about/bottomRow.container';

const AboutContainer = () => {
  const [isDescriptionHovered, setDescriptionHovered] = useState<boolean>(
    false
  );
  const [currentJokeIndex, setCurrentJokeIndex] = useState<number>(0);

  const aboutVariants: About[] = fetchAbout();
  const links: Link = fetchLinks();

  const goToNextDescription = () => {
    if (aboutVariants.length === 0) {
      setCurrentJokeIndex(0);
    } else if (currentJokeIndex === aboutVariants.length - 1) {
      setCurrentJokeIndex(0);
    } else {
      setCurrentJokeIndex(currentJokeIndex + 1);
    }
  };

  const setDescriptionHovered2 = (isHovered: boolean) => {
    if (isHovered) {
      goToNextDescription();
    }
    setDescriptionHovered(isHovered);
  };

  return (
    <Container>
      <TopRowContainer
        links={links}
        setDescriptionHovered={setDescriptionHovered2}
        isDescriptionHovered={isDescriptionHovered}
        fluidGif={aboutVariants[currentJokeIndex].gif.fluid}
        emoji={aboutVariants[currentJokeIndex].emoji}
      />
      <BottomRowContainer
        isDescriptionHovered={isDescriptionHovered}
        setDescriptionHovered={setDescriptionHovered2}
        title={
          isDescriptionHovered
            ? aboutVariants[currentJokeIndex].title
            : 'Software Engineer'
        }
      />
    </Container>
  );
};

export default AboutContainer;