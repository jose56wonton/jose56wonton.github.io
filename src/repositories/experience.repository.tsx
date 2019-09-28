import { graphql, useStaticQuery } from 'gatsby';
import { Experience, ExperienceQuery } from 'models/experience.model';

export const fetchArt = (): Experience => {
  const {
    allContentfulExperience: {
      nodes: {
        id,
        title,
        stack,
        start,
        end,
        location,
        isCurrentlyWorking,
        description: { description },
        company,
      },
    },
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
  return {
    id,
    title,
    description,
    start,
    end,
    stack,
    location,
    isCurrentlyWorking,
    company,
  };
};
