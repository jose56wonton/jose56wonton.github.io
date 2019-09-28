import { graphql, useStaticQuery } from 'gatsby';

import { Art, ArtQuery } from 'models/art.model';

export const fetchArt = (): Art => {
  const {
    allContentfulArt: {
      nodes: {
        file: { id, title, description, fluid },
      },
    },
  }: ArtQuery = useStaticQuery(
    graphql`
      {
        allContentfulArt(limit: 10) {
          nodes {
            file {
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
  return {
    id,
    title,
    description,
    fluid,
  };
};
