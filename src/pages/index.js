import React from 'react';
import StylingProvider from 'components/stylingProvider';
import SEO from 'components/seo';
import Bio from 'containers/bio';
import Footer from 'containers/contact';
import Cursor from 'components/cursor';
import Freelance from '../containers/freelance';
import Navigation from '../components/navigation/navigation';

const IndexPage = () => (
    <>
        <SEO title="Portfolio" />
        <StylingProvider>
            <Navigation />
            <Bio />
            <Freelance />
            <Footer />
            <Cursor />
        </StylingProvider>
    </>
);

export default IndexPage;
