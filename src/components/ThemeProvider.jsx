import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider as SCThemeProvider } from 'styled-components';

const ThemeProvider = ({ children, mode = 'hack' }) => (
  <SCThemeProvider theme={{ mode: mode }}>{children}</SCThemeProvider>
);

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
  mode: PropTypes.string.isRequired,
};

export default ThemeProvider;
