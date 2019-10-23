import { graphql, useStaticQuery } from 'gatsby';

import { Art, ArtQuery } from 'models/art.model';

export const fetchArt = (): Art[] => {
  const {
    allContentfulArt: { nodes },
  }: ArtQuery = useStaticQuery(
    graphql`
      {
        allContentfulArt(limit: 10) {
          nodes {
            id
            title
            date
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
  return nodes;
};
