import React, { useState } from 'react';
import { fetchAbout } from 'repositories/about.repository';
import { About } from 'models/about.model';
import { fetchLinks } from 'repositories/link.repository';
import { Link } from 'models/link.model';
import TopAboutRowContainer from './about/topAboutRow.container';
import BottomAboutRowContainer from './about/bottomAboutRow.container';
import { SectionWrapper } from '../components/sectionWrapper';
import { Element } from 'react-scroll';

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
    <SectionWrapper>
      <Element name="about" />
      <TopAboutRowContainer
        links={links}
        isJokeVisible={isJokeVisible}
        fluidGif={aboutVariants[currentJokeIndex].gif.fluid}
        emoji={aboutVariants[currentJokeIndex].emoji}
      />
      <BottomAboutRowContainer
        isJokeVisible={isJokeVisible}
        setJokeVisible={setJokeVisibleWrapper}
        jokeTitle={aboutVariants[currentJokeIndex].title}
      />
    </SectionWrapper>
  );
};

export default AboutContainer;
