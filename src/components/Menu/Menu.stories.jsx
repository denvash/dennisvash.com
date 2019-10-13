import React from 'react';
import { action } from '@storybook/addon-actions';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import Menu from './Menu';

export default {
  title: 'Molecules|Menu',
  component: Menu,
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
};

export const Default = () => (
  <>
    <h1 style={{ width: 100 }}>Change Viewport for Menu popup</h1>
    <Menu menuOpen={true} toggleMenu={action()} />
  </>
);
