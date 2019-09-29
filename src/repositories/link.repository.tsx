import { graphql, useStaticQuery } from 'gatsby';

import { Link, LinkQuery } from 'models/link.model';

export const fetchLinks = (): Link => {
  const { contentfulLinks }: LinkQuery = useStaticQuery(
    graphql`
      {
        contentfulLinks {
          github
          medium
          twitter
          linkedIn
        }
      }
    `
  );
  return contentfulLinks;
};
