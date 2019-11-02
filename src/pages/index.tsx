import React from 'react';

import StylingProvider from 'components/stylingProvider';
import SEO from 'components/seo';

import AboutSection from 'containers/about.container';
import WorkSection from 'containers/work.container';
import FooterContainer from 'containers/footer.container';
import Cursor from 'components/cursor';
import Hero from '../components/hero';
import ExperienceSection from '../containers/experience.container';

const IndexPage = () => (
  <>
    <SEO
      title="Home"
      description="Joshua Wootonn home page"
      lang="en"
      meta={{}}
    />

    <StylingProvider>
      <AboutSection />
      <WorkSection />
      <ExperienceSection />
      <Hero text="WIP" backgroundColor="purple" />
      <FooterContainer />
      <Cursor />
    </StylingProvider>
  </>
);

export default IndexPage;
