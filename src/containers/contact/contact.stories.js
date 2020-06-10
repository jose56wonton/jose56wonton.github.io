import React from 'react';
import { storiesOf } from '@storybook/react';
import ContactContainer from './contact.container';

const story = storiesOf('Containers', module);

story.add('Contact', () => <ContactContainer />);
