import React from 'react';

import Layout from 'components/layout';
import SEO from 'components/seo';

import AboutSection from 'containers/about.container';
import ExperienceSection from 'containers/experience';
import WorkSection from 'containers/work';
import ThoughtSection from 'containers/thoughts';
import ArtSection from 'containers/art';
import Footer from 'containers/footer';
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
      <Hero text="WIP" backgroundColor="fun6" />
      <Footer />
      <Cursor />
    </Layout>
  </>
);

export default IndexPage;
