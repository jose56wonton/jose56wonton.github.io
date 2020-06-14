import React from 'react';

import StylingProvider from 'components/stylingProvider';
import SEO from 'components/seo';

import AboutSection from 'containers/about.container';
import ProjectSection from 'containers/projects/projects.container';
import FooterContainer from 'containers/contact/contact.container';
import Cursor from 'components/cursor';

const IndexPage = () => (
    <>
        <SEO title="Portfolio" />
        <StylingProvider>
            <AboutSection />
            <ProjectSection />
            <FooterContainer />
            <Cursor />
        </StylingProvider>
    </>
);

export default IndexPage;
