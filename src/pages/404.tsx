import React from 'react';

import StylingProvider from '../components/stylingProvider';
import SEO from '../components/seo';
import Hero from '../components/hero';
import Cursor from '../components/cursor';

const NotFoundPage = () => (
  <StylingProvider>
    <SEO title="404" description="the lad was not found" lang="en" meta={{}} />
    <Hero text="404 NOT FOUND" backgroundColor="fun1" />
    <Cursor />
  </StylingProvider>
);

export default NotFoundPage;
