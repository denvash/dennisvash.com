import React from 'react';
import { action } from '@storybook/addon-actions';

import { Menu } from '@components';

export default {
  title: 'Molecules|Menu',
  component: Menu,
};

export const WorksForSmallScreens = () => <Menu menuOpen={true} toggleMenu={action('clicked')} />;
