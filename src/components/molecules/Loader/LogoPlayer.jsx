// #region  Imports
import { IconLogo } from '@components/atoms/icons';
import anime from 'animejs';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import { mixins, theme, media } from '@styles';
// #endregion

const ID = {
  ...IconLogo.IDs,
  logoWrapper: 'logoWrapper',
};

// #region Styles
const { colors } = theme;
const { inner, outer } = ID;

const LogoPosition = styled.div`
  ${mixins.flexCenter}
  position: absolute;
  z-index: 4;
  left: 50vw;
  max-width: 30em;
  top: 30vh;
  ${media.desktop`
    max-width: 25em;
    left: 40vw;
    top: 28vh;
  `}
  ${media.tablet`
    max-width: 18em;
    top: 30vh;
  `}
  ${media.thone`
    max-width: 15em;
    left: 45vw;
    top: 35vh;
  `}
  ${media.phablet`
    max-width: 14em;
    top: 40vh;
  `}
  ${media.phone`
    max-width: 11em;
    top: 42vh;
  `}
  ${media.tiny`
    max-width: 10em;
  `}
`;

const LogoWrapper = styled.div`
  opacity: 0;
  svg {
    width: 100%;
    height: 100%;
    fill: none;
    user-select: none;
    #${outer} {
      stroke: ${colors.primary};
      stroke-width: 0.5px;
    }
    #${inner} {
      stroke: ${colors.primary};
      stroke-width: 0.7px;
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
    });
};
// #endregion

const LogoPlayer = ({ parameters = {} }) => {
  useEffect(() => {
    animate(parameters);
  }, []);

  return (
    <LogoPosition>
      <LogoWrapper className={ID.logoWrapper}>
        <IconLogo />
      </LogoWrapper>
    </LogoPosition>
  );
};

LogoPlayer.propTypes = {
  parameters: PropTypes.object,
};

export default LogoPlayer;
