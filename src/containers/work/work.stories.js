import React from 'react';
import WorkContainer from './work.container';
import { storiesOf } from '@storybook/react';

const story = storiesOf('Work', module);

story.add('Container', () => <WorkContainer />);
