import { graphql, useStaticQuery } from 'gatsby';
import { Fluid } from 'helpers/types';

interface ArtQuery {
  allContentfulArt: {
    nodes: {
      id;
      file: {
        id: string;
        title: string;
        description: string;
        fluid: Fluid;
      };
    };
  };
}

export interface Art {
  id: string;
  description: string;
  title: string;
  fluid: Fluid;
}

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
