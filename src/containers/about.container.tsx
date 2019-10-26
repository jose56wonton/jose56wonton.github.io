import React, { useState } from 'react';
import { fetchAbout } from 'repositories/about.repository';
import { About } from 'models/about.model';
import { fetchLinks } from 'repositories/link.repository';
import { Link } from 'models/link.model';
import { Container } from 'styled-bootstrap-grid';
import TopAboutRowContainer from './about/topAboutRow.container';
import BottomAboutRowContainer from './about/bottomAboutRow.container';
import styled from 'styled-components';
import { ThemeProp } from '../theme';

const Wrapper = styled(Container)`
  position: relative;
  margin-bottom: ${(props: ThemeProp) => props.theme.elementSizes.xl * 5}px;
`;

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

  // TODO: debounce this button and go over naming for the entire section
  const setDescriptionHovered2 = (isHovered: boolean) => {
    if (isHovered) {
      goToNextDescription();
    }
    setDescriptionHovered(isHovered);
  };

  return (
    <Wrapper>
      <TopAboutRowContainer
        links={links}
        setDescriptionHovered={setDescriptionHovered2}
        isDescriptionHovered={isDescriptionHovered}
        fluidGif={aboutVariants[currentJokeIndex].gif.fluid}
        emoji={aboutVariants[currentJokeIndex].emoji}
      />
      <BottomAboutRowContainer
        isDescriptionHovered={isDescriptionHovered}
        setDescriptionHovered={setDescriptionHovered2}
        title={
          isDescriptionHovered
            ? aboutVariants[currentJokeIndex].title
            : 'Software Engineer'
        }
      />
    </Wrapper>
  );
};

export default AboutContainer;
