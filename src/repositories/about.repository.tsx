import { graphql, useStaticQuery } from 'gatsby';

import { About, AboutQuery } from 'models/about.model';

export const fetchAbout = (): About => {
  const {
    contentfulAbout: {
      description: { description },
    },
  }: AboutQuery = useStaticQuery(
    graphql`
      {
        contentfulAbout {
          description {
            description
          }
        }
      }
    `
  );
  return { description };
};
