import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';

import EditPost from '../components/EditPost';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>);

const categories = [
  { text: 'React', value: 'react' },
  { text: 'Redux', value: 'redux' },
  { text: 'Udacity', value: 'udacity' },
];

storiesOf('EditPost', module)
  .add('default', () => <EditPost categories={categories} />);
