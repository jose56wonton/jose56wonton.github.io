import { graphql, useStaticQuery } from 'gatsby';

export const fetchBio = () => {
    const { contentfulBio } = useStaticQuery(
        graphql`
            {
                contentfulBio {
                    profileImage {
                        fluid(maxWidth: 800) {
                            ...GatsbyContentfulFluid_tracedSVG
                        }
                    }
                    primaryText {
                        primaryText
                    }
                    secondaryText {
                        secondaryText
                    }
                }
            }
        `
    );
    return contentfulBio;
};
