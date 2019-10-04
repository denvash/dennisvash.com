import React, { useState, useEffect } from "react";
import Helmet from "react-helmet";
import PropTypes from "prop-types";
import anime from "animejs";
import { IconLoader } from "@components/icons";
import styled from "styled-components";
import { mixins, theme } from "@styles";

const { colors } = theme;

// #region styles
const LoaderContainer = styled.div`
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
  opacity: ${props => (props.isMounted ? 1 : 0)};
  svg {
    width: 100%;
    height: 100%;
    display: block;
    margin: 0 auto;
    fill: none;
    user-select: none;
    #inner {
      opacity: 0;
    }
  }
`;
// #endregion

const Loader = ({ finishLoading, loop }) => {
  // #region  Animation
  const animate = () => {
    const loader = anime.timeline({
      complete: () => finishLoading(),
      loop
    });

    loader
      .add({
        targets: "#loader path",
        delay: 500,
        duration: 2000,
        easing: "easeInOutQuart",
        strokeDashoffset: [anime.setDashoffset, 0]
      })
      .add({
        targets: "#loader #inner",
        duration: 800,
        easing: "easeInOutQuart",
        opacity: 1
      })
      .add({
        targets: "#loader",
        delay: 700,
        duration: 300,
        easing: "easeInOutQuart",
        opacity: 0,
        scale: 0.1
      })
      .add({
        targets: ".loader",
        duration: 200,
        easing: "easeInOutQuart",
        opacity: 0,
        zIndex: -1
      });
  };
  // #endregion

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 10);
    animate();
    return () => clearTimeout(timeout);
  }, []);

  return (
    <LoaderContainer className="loader">
      <LogoWrapper isMounted={isMounted}>
        <IconLoader />
      </LogoWrapper>
    </LoaderContainer>
  );
};

Loader.defaultProps = {
  loop: false
};

Loader.propTypes = {
  finishLoading: PropTypes.func.isRequired,
  loop: PropTypes.bool
};

export default Loader;
