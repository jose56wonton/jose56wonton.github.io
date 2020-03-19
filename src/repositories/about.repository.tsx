import { graphql, useStaticQuery } from 'gatsby';

import { About, AboutQuery } from 'models/about.model';

export const fetchAbout = (): About[] => {
    const {
        allContentfulAbout: { nodes },
    }: AboutQuery = useStaticQuery(
        graphql`
            {
                allContentfulAbout {
                    nodes {
                        emoji
                        title
                        gif {
                            description
                            id
                            title
                            fluid {
                                tracedSVG
                                aspectRatio
                                src
                                srcSet
                                srcWebp
                                srcSetWebp
                                sizes
                            }
                        }
                    }
                }
            }
        `
    );
    return nodes;
};
