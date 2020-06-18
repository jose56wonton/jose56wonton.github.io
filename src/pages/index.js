import React from 'react';
import StylingProvider from 'components/stylingProvider';
import SEO from 'components/seo';
import AboutSection from 'containers/about.container';
import FooterContainer from 'containers/contact/contact.container';
import Cursor from 'components/cursor';
import FreelanceContainer from '../containers/freelance';

const IndexPage = () => (
    <>
        <SEO title="Portfolio" />
        <StylingProvider>
            <AboutSection />
            <FreelanceContainer />
            <FooterContainer />
            <Cursor />
        </StylingProvider>
    </>
);

export default IndexPage;
