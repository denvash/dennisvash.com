import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import anime from 'animejs';
import { IconLoader } from '@components/icons';
import styled from 'styled-components';
import { mixins, theme } from 'styles';

const { colors } = theme;

const ID = {
  inner: 'inner',
  outer: 'outer',
  loader: 'loader',
};

// #region styles
const CenterScreen = styled.div`
  ${mixins.flexCenter};
  background-color: ${colors.darkNavy};
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
  svg {
    width: 100%;
    height: 100%;
    display: block;
    margin: 0 auto;
    fill: none;
    user-select: none;
    #${ID.inner} {
      opacity: 0;
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
      targets: `#${ID.loader} path`,
      delay: 500,
      duration: 2000,
      easing,
      strokeDashoffset: [anime.setDashoffset, 0],
    })
    .add({
      targets: `#${ID.loader} #${ID.inner}`,
      duration: 800,
      easing,
      opacity: 1,
    })
    .add({
      targets: `#${ID.loader}`,
      delay: 700,
      duration: 300,
      easing,
      opacity: 0,
      scale: 0.1,
    })
    .add({
      targets: `.${ID.loader}`,
      duration: 200,
      easing,
      opacity: 0,
      zIndex: -1,
    });
};
// #endregion

const Loader = ({ parameters }) => {
  useEffect(() => {
    animate(parameters);
  }, []);

  return (
    <CenterScreen className={ID.loader}>
      <LogoWrapper>
        <IconLoader />
      </LogoWrapper>
    </CenterScreen>
  );
};

Loader.defaultProps = {
  parameters: {},
};

Loader.propTypes = {
  parameters: PropTypes.object,
};

export default Loader;
