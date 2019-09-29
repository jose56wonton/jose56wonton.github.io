import React from 'react';

import Layout from 'components/layout';
import SEO from 'components/seo';

import AboutSection from 'containers/about';
import ExperienceSection from 'containers/experience';
import WorkSection from 'containers/work';
import ThoughtSection from 'containers/thoughts';
import ArtSection from 'containers/art';

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <Layout>
      <AboutSection />
      <ExperienceSection />
      <WorkSection />
      <ArtSection />
      <ThoughtSection />
    </Layout>
  </>
);

export default IndexPage;
