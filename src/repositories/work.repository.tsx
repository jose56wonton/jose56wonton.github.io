import { graphql, useStaticQuery } from 'gatsby';

import { WorkQuery, Work, WorkNode } from 'models/work.model';

// TODO: sort these suckers
export const fetchWork = (): Work[] => {
    const {
        allContentfulWork: { nodes },
    }: WorkQuery = useStaticQuery(
        graphql`
            {
                allContentfulWork {
                    nodes {
                        title
                        start
                        end
                        repository
                        link
                        description {
                            description
                        }
                        technologies
                        images {
                            id
                            title
                            description
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
    return nodes.map(
        (node: WorkNode): Work => ({
            ...node,
            description: node.description.description,
        })
    );
};
