import PropTypes from 'prop-types';
import React, { useReducer } from 'react';
import { ThemeProvider as SCThemeProvider } from 'styled-components';
import { theme } from '@styles';

const palettes = theme.palettes.map(({ name }) => name);
const reducer = index => (index === palettes.length - 1 ? 0 : index + 1);

const ThemeProvider = ({ children }) => {
  const [index, modeToggle] = useReducer(reducer, 0);

  return (
    <SCThemeProvider theme={{ mode: palettes[index], modeToggle }}>{children}</SCThemeProvider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ThemeProvider;
