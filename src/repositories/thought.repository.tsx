import { graphql, useStaticQuery } from 'gatsby';
import { Thought, ThoughtQuery, ThoughtNode } from 'models/thought.model';

export const fetchThoughts = (): Thought[] => {
  const {
    allContentfulThought: { nodes },
  }: ThoughtQuery = useStaticQuery(
    graphql`
      {
        allContentfulThought(limit: 10) {
          nodes {
            id
            title
            description {
              description
            }
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
  return nodes.map(
    (node: ThoughtNode): Thought => ({
      ...node,
      description: node.description.description,
    })
  );
};
