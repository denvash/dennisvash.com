import React from 'react';
import styled from 'styled-components';

import IconLogo from './Logo.svg';
import { theme } from '@styles';

const { colors } = theme;

export default {
  title: 'Atoms|Icons/Logo',
};

const LogoContainer = styled.div`
  svg {
    #${IconLogo.IDs.inner} {
      stroke: ${colors.primary};
    }
    #${IconLogo.IDs.outer} {
      stroke: ${colors.primary};
    }
  }
`;

export const SVG = () => (
  <LogoContainer>
    <IconLogo />
  </LogoContainer>
);
