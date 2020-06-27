import React from 'react';
import StylingProvider from 'components/stylingProvider';
import SEO from 'components/seo';
import AboutSection from 'containers/bio';
import FooterContainer from 'containers/contact';
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
