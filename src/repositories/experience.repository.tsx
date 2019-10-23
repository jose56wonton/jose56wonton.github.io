import { graphql, useStaticQuery } from 'gatsby';
import {
  Experience,
  ExperienceQuery,
  ExperienceNode,
} from 'models/experience.model';

export const fetchExperiences = (): Experience[] => {
  const {
    allContentfulExperience: { nodes },
  }: ExperienceQuery = useStaticQuery(
    graphql`
      {
        allContentfulExperience {
          nodes {
            id
            title
            stack
            start
            end
            location {
              lon
              lat
            }
            isCurrentlyWorking
            description {
              description
            }
            company
          }
        }
      }
    `
  );
  return nodes.map(
    (node: ExperienceNode): Experience => ({
      ...node,
      description: node.description.description,
    })
  );
};
