import React from 'react';
import { fetchAbout } from 'repositories/about.repository';
import { About } from 'models/about.model';
import { fetchLinks } from 'repositories/link.repository';
import { Link } from 'models/link.model';
import { Container} from 'styled-bootstrap-grid';
import NameContainer from './about/name.container';
import DescriptionContainer from './about/description.container';

const AboutContainer = () => {
  const { description }: About = fetchAbout();
  const links: Link = fetchLinks();

  return (
    <Container>
      <NameContainer links={links} />
      <DescriptionContainer description={description} />
    </Container>
  );
};

export default AboutContainer;
