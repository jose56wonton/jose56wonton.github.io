import React from 'react';

import Layout from 'components/layout';
import SEO from 'components/seo';

import AboutSection from 'containers/about';
import ExperienceSection from 'containers/experience';
import WorkSection from 'containers/work';
import ThoughtSection from 'containers/thoughts';
import ArtSection from 'containers/art';
import FooterSection from 'containers/footer';
import Cursor from 'components/cursor'; /// TODO: MAYBE MOVE THIS to the layout itself

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
      <Cursor />
    </Layout>
  </>
);

export default IndexPage;
