import React from 'react';
import StylingProvider from '../components/stylingProvider';
import SEO from 'components/seo';
import Cursor from '../components/cursor';
import NotFound from '../containers/404';

const NotFoundPage = () => {
    return (
        <StylingProvider>
            <SEO title="404" />
            <NotFound />
            <Cursor />
        </StylingProvider>
    );
};

export default NotFoundPage;
