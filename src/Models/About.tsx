import { graphql, useStaticQuery } from 'gatsby';

interface AboutQuery {
  contentfulAbout: {
    description: {
      description: string;
    };
  };
}
export interface About {
  description: string;
}

export const fetchAboutSection = (): About => {
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
