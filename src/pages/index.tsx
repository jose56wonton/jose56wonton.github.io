import React, { ReactElement } from 'react';
import { Link } from 'gatsby';

import Layout from 'components/layout';
import Image from 'components/image';
import SEO from 'components/seo';
import { fetchAbout } from 'repositories/about.repository';
import { fetchExperiences } from 'repositories/experience.repository';
import { Experience } from 'models/experience.model';
import { fetchWork } from 'repositories/work.repository';
import { fetchArt } from 'repositories/art.repository';
import { fetchthoughts } from 'repositories/thought.repository';
import { Work } from 'models/work.model';
import { Art } from 'models/art.model';

const IndexPage = () => {
  const about = fetchAbout();
  const experiences = fetchExperiences();
  const work = fetchWork();
  const art = fetchArt();
  const thoughts = fetchthoughts();

  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <p>{about.description}</p>
      <>
        {experiences.map(
          (e: Experience): ReactElement => {
            return <p key={e.id}>{e.title}</p>;
          }
        )}
      </>
      <>
        {work.map(
          (e: Work): ReactElement => {
            return <p key={e.id}>{e.title}</p>;
          }
        )}
      </>
      <>
        {art.map(
          (e: Art): ReactElement => {
            return <p key={e.id}>{e.title}</p>;
          }
        )}
      </>
      <>
        {thoughts.map(
          (e: thouh): ReactElement => {
            return <p key={e.id}>{e.title}</p>;
          }
        )}
      </>

      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  );
};

export default IndexPage;
