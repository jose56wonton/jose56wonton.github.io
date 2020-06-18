import { graphql, useStaticQuery } from 'gatsby';
export const fetchFreelance = () => {
    const { allContentfulFreelance } = useStaticQuery(
        graphql`
            {
                allContentfulFreelance(sort: { fields: [start], order: DESC }) {
                    edges {
                        node {
                            id
                            start
                            end
                            title
                            description {
                                description
                            }
                            repository
                            link
                            images {
                                fluid(maxWidth: 800) {
                                    ...GatsbyContentfulFluid_tracedSVG
                                }
                            }
                        }
                    }
                }
            }
        `
    );
    return allContentfulFreelance;
};
