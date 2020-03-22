import React from 'react';
import { storiesOf } from '@storybook/react';
import ProjectContainer from './projects.container';

const story = storiesOf('Projects', module);

story.add('Container', () => <ProjectContainer />);



