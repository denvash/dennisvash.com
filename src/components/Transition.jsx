import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { ANIMATION_CLASSES } from '@styles';

const { FADE } = ANIMATION_CLASSES;

const Group = ({ children, ...props }) => <TransitionGroup {...props}>{children}</TransitionGroup>;

Group.propTypes = {
  children: PropTypes.node.isRequired,
};

const Transition = ({ children, animationClassName = FADE, timeout = 3000, ...props }) => (
  <CSSTransition classNames={animationClassName} timeout={timeout} {...props}>
    {children}
  </CSSTransition>
);

export const delay = (number = 200) => ({ transitionDelay: `${number}ms` });

Transition.propTypes = {
  ...CSSTransition.propTypes,
  children: PropTypes.node.isRequired,
  animationClassName: PropTypes.string,
  timeout: PropTypes.number,
};

Transition.Group = Group;
export default Transition;
