import React from 'react';

import Layout from 'components/layout';
import SEO from 'components/seo';

import AboutSection from 'containers/about.container';
import ExperienceSection from 'containers/experience';
import WorkSection from 'containers/work.container';
import ThoughtSection from 'containers/thoughts';
import ArtSection from 'containers/art';
import FooterContainer from 'containers/footer.container';
import Cursor from 'components/cursor';
import Hero from '../components/hero';

const IndexPage = () => (
  <>
    <SEO
      title="Home"
      description="Joshua Wootonn home page"
      lang="en"
      meta={{}}
    />

    <Layout>
      <AboutSection />
      <WorkSection />
      <Hero text="WIP" backgroundColor="purple" />
      <FooterContainer />
      <Cursor />
    </Layout>
  </>
);

export default IndexPage;
