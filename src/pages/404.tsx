import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Hero from '../components/hero';
import Cursor from '../components/cursor';

const NotFoundPage = () => (
  <Layout>
    <SEO title="404" description="the lad was not found" lang="en" meta={{}} />
    <Hero text="404 NOT FOUND" backgroundColor="fun1" />
    <Cursor />
  </Layout>
);

export default NotFoundPage;
