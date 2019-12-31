import React from 'react';
import styled from 'styled-components';

import { theme } from '@styles';
import IconThemePicker from './ThemePicker.svg';

const { colors } = theme;

export default {
  title: 'Atoms|Icons/ThemePicker',
};

const { up, down } = IconThemePicker.IDs;

const LogoContainer = styled.div`
  svg {
    #${up} {
      fill: ${colors.secondary};
    }
    #${down} {
      fill: ${colors.text};
    }
  }
`;

export const SVG = () => (
  <LogoContainer>
    <IconThemePicker />
  </LogoContainer>
);
