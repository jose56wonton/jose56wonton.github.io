import { graphql, useStaticQuery } from 'gatsby';

import { File, FileNode, ResumeQuery } from '../models/resume.model';
export const fetchResume = (): File => {
  const {
    contentfulFiles: { resume },
  }: ResumeQuery = useStaticQuery(
    graphql`
      {
        contentfulFiles {
          resume {
            file {
              url
            }
          }
        }
      }
    `
  );
  return resume.file;
};
