import React from 'react';

import StylingProvider from 'components/stylingProvider';
import SEO from 'components/seo';

import AboutSection from 'containers/about.container';
import ProjectSection from 'containers/projects/projects.container';
import FooterContainer from 'containers/footer.container';
import Cursor from 'components/cursor';
import Hero from '../components/hero';
import WorkSection from '../containers/work/work.container';
import Navigation from '../containers/navigation.container';

const IndexPage = () => (
    <>
        <SEO
            title="Home"
            description="Joshua Wootonn home page"
            lang="en"
            meta={{}}
        />

        <StylingProvider>
            <Navigation />
            <AboutSection />
            <ProjectSection />
            <WorkSection />
            <Hero text="WIP" backgroundColor="purple" />
            <FooterContainer />
            <Cursor />
        </StylingProvider>
    </>
);

export default IndexPage;
