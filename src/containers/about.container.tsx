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
  @media (max-width: 1100px) {
    margin-bottom: ${(props: ThemeProp) => props.theme.elementSizes.xl * 5}px;
  }
  @media (min-width: 1101px) {
    margin-bottom: ${(props: ThemeProp) => props.theme.elementSizes.xl * 5}px;
  }
  @media (min-width: 1921px) {
    margin-bottom: ${(props: ThemeProp) => props.theme.elementSizes.xl * 10}px;
  }
  @media (min-width: 2561px) {
    margin-bottom: ${(props: ThemeProp) => props.theme.elementSizes.xl * 15}px;
  }
`;

const AboutContainer = () => {
  const [isJokeVisible, setJokeVisible] = useState<boolean>(false);
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

  const setJokeVisibleWrapper = (isHovered: boolean) => {
    if (isHovered) {
      goToNextDescription();
    }
    setJokeVisible(isHovered);
  };

  return (
    <Wrapper>
      <TopAboutRowContainer
        links={links}
        isJokeVisible={isJokeVisible}
        fluidGif={aboutVariants[currentJokeIndex].gif.fluid}
        emoji={aboutVariants[currentJokeIndex].emoji}
      />
      <BottomAboutRowContainer
        isJokeVisible={isJokeVisible}
        setJokeVisible={setJokeVisibleWrapper}
        title={
          isJokeVisible
            ? aboutVariants[currentJokeIndex].title
            : 'Software Engineer'
        }
      />
    </Wrapper>
  );
};

export default AboutContainer;
