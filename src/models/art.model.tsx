import { Fluid } from 'helpers/types';

export interface ArtQuery {
  allContentfulArt: {
    nodes: {
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
