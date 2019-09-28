import { Description } from 'helpers/types';

export interface ExperienceQuery {
  allContentfulExperience: {
    nodes: {
      id: string;
      title: string;
      stack: string[];
      start: string;
      end: string;
      location: Location;
      isCurrentlyWorking: boolean;
      description: Description;
      company: string;
    };
  };
}

export interface Experience {
  id: string;
  description: string;
  title: string;
  stack: string[];
  start: string;
  end: string;
  location: Location;
  isCurrentlyWorking: boolean;
  company: string;
}
