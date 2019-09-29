import React, { ReactElement } from 'react';
import { Link } from 'gatsby';

import Layout from 'components/layout';
import Image from 'components/image';
import SEO from 'components/seo';

import { fetchExperiences } from 'repositories/experience.repository';

import { fetchWork } from 'repositories/work.repository';
import { fetchArt } from 'repositories/art.repository';
import { fetchthoughts } from 'repositories/thought.repository';
import { Work } from 'models/work.model';
import { Art } from 'models/art.model';
import { H1, H3, A } from 'typography';
import { About } from 'models/about.model';
import { Rotated } from 'littleGuys/a';
import styled from 'styled-components';
import AboutSection from 'containers/about';
import ExperienceSection from 'containers/experience';

const IndexPage = () => {
  const work = fetchWork();
  const art = fetchArt();
  const thoughts = fetchthoughts();

  return (
    <>
      <SEO title="Home" />
      <Layout>
        <AboutSection />
        <ExperienceSection />
      </Layout>
    </>
  );
};

export default IndexPage;
