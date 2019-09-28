import { Image } from 'helpers/types';

export interface ArtQuery {
  allContentfulArt: {
    nodes: ArtNode[];
  };
}

export interface ArtNode {
  id: string;
  title: string;
  date: string;
  images: Image[];
}

export interface Art {
  id: string;
  title: string;
  date: string;
  images: Image[];
}
