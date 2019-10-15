// #region  Imports
import { IconLogo } from '@components/icons';
import anime from 'animejs';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import { mixins, theme } from '@styles';
// #endregion

const ID = {
  ...IconLogo.IDs,
  logoWrapper: 'logoWrapper',
};

// #region styles
const { colors } = theme;

const CenterScreen = styled.div`
  ${mixins.flexCenter};
  background-color: ${colors.darkenBackground};
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 99;
`;

const LogoWrapper = styled.div`
  width: max-content;
  max-width: 400px;
  transition: ${theme.transition};
  opacity: 0;
  svg {
    width: 100%;
    height: 100%;
    display: block;
    margin: 0 auto;
    fill: none;
    user-select: none;
    #${ID.outer} {
      stroke: ${colors.primary};
    }
    #${ID.inner} {
      opacity: 0;
      stroke: ${colors.primary};
    }
  }
`;
// #endregion

// #region  Animation
const easing = 'easeInOutQuart';

const animate = parameters => {
  const loader = anime.timeline(parameters);

  loader
    .add({
      targets: `.${ID.logoWrapper}`,
      opacity: [0, 1],
    })
    .add({
      targets: `#${ID.container} path`,
      delay: 500,
      duration: 2000,
      easing,
      strokeDashoffset: [anime.setDashoffset, 0],
    })
    .add({
      targets: `#${ID.container} #${ID.inner}`,
      duration: 800,
      easing,
      opacity: 1,
    })
    .add({
      targets: `#${ID.container}`,
      delay: 700,
      duration: 300,
      easing,
      opacity: 0,
      scale: 0.1,
    })
    .add({
      targets: `.${ID.container}`,
      duration: 200,
      easing,
      opacity: 0,
      zIndex: -1,
    });
};
// #endregion

const Loader = ({ parameters = {} }) => {
  useEffect(() => {
    animate(parameters);
  }, []);

  return (
    <CenterScreen className={ID.loader}>
      <LogoWrapper className={ID.logoWrapper}>
        <IconLogo />
      </LogoWrapper>
    </CenterScreen>
  );
};

Loader.propTypes = {
  parameters: PropTypes.object,
};

export default Loader;
