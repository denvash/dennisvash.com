// #region  Imports
import { Menu } from '@components';
import { IconLogo } from '@components/icons';
import Transition, { delay } from '@components/Transition';
import { content, navBar } from '@config';
import { ANIMATION_CLASSES, media, MEDIA_SIZES, mixins, theme } from '@styles';
import { throttle } from '@utils';
import React, { useContext, useEffect, useRef, useState } from 'react';
import Helmet from 'react-helmet';
import styled, { css, ThemeContext } from 'styled-components';
import { Link } from 'gatsby';
import IconThemePicker from '@components/icons/ThemePicker/ThemePicker.svg';
// #endregion

// #region  Styling
const navHeight = `100px`;
const { colors, fontSizes, fonts } = theme;

const navHeightNumber = Number(navHeight.replace('px', ''));

const navScrollHeight = `70px`;

const navHeightOnScroll = ({ scrollDirection }) =>
  scrollDirection === 'none' ? navHeight : navScrollHeight;

const navBoxShadow = ({ scrollDirection, ...props }) =>
  scrollDirection === 'up' ? `0 10px 30px -10px ${colors.backgroundDark(props, 0.05)}` : 'none';

const navTransform = ({ scrollDirection }) =>
  scrollDirection === 'down' ? `-${navScrollHeight}` : '0px';

const NavContainer = styled.header`
  ${mixins.flexBetween};
  position: fixed;
  top: 0;
  padding: 0px 50px;
  background-color: ${colors.background};
  transition: ${theme.transition};
  z-index: 11;
  filter: none !important;
  pointer-events: auto !important;
  user-select: auto !important;
  width: 100%;
  height: ${navHeightOnScroll};
  box-shadow: ${navBoxShadow};
  transform: translateY(${navTransform});
  ${media.desktop`padding: 0 40px;`};
  ${media.tablet`padding: 0 25px;`};
`;

const Navbar = styled.nav`
  ${mixins.flexBetween};
  width: 100%;
  color: ${colors.text};
  font-family: ${fonts.SFMono};
  counter-reset: item 0;
  z-index: 12;
`;

const { inner, outer } = IconLogo.IDs;

const LogoContainer = styled.div`
  cursor: pointer;
  svg {
    width: 60px;
    ${media.tiny`width: 50px; padding-right: 5px;`};
    height: ${navHeight};
    #${inner} {
      stroke: ${colors.primary};
      stroke-width: 7px;
      transition: ${theme.transition};
    }
    #${outer} {
      stroke: ${colors.primary};
      stroke-width: 5px;
      transition: ${theme.transition};
    }
    &:hover {
      #${inner} {
        stroke: ${colors.secondary};
        stroke-width: 5px;
        transition: ${theme.transition};
      }
      #${outer} {
        stroke: ${colors.secondary};
        transition: ${theme.transition};
        stroke-width: 7px;
      }
    }
  }
`;

const Hamburger = styled.div`
  ${mixins.flexCenter};
  overflow: visible;
  margin: 0 -12px 0 0;
  padding: 15px;
  cursor: pointer;
  transition-timing-function: linear;
  transition-duration: 0.15s;
  transition-property: opacity, filter;
  text-transform: none;
  color: inherit;
  border: 0;
  background-color: transparent;
  display: none;
  ${media.tablet`display: flex;`};
`;

const hamburgerWidth = css`
  width: 30px;
`;

const hamburgerCSS = css`
  background-color: ${colors.primary};
  position: absolute;
  ${hamburgerWidth}
  height: 2px;
  border-radius: ${theme.borderRadius};
  left: 0;
  right: 0;
`;

const HamburgerBox = styled.div`
  position: relative;
  display: inline-block;
  ${hamburgerWidth}
  height: 24px;
`;

const hamAfterActive = css`
  transition: bottom 0.1s ease-out, transform 0.22s cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s;
`;

const hamAfter = css`
  transition: bottom 0.1s ease-in 0.25s, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);
`;

const hamBefore = css`
  transition: top 0.1s ease-in 0.25s, opacity 0.1s ease-in;
`;

const hamBeforeActive = css`
  transition: top 0.1s ease-out, opacity 0.1s ease-out 0.12s;
`;

const HamburgerInner = styled.div`
  ${hamburgerCSS}
  top: 50%;
  transition-duration: 0.22s;
  transition-property: transform;
  transition-delay: ${({ menuOpen }) => (menuOpen ? `0.12s` : `0s`)};
  transform: rotate(${({ menuOpen }) => (menuOpen ? `225deg` : `0deg`)});
  transition-timing-function: cubic-bezier(
    ${({ menuOpen }) => (menuOpen ? `0.215, 0.61, 0.355, 1` : `0.55, 0.055, 0.675, 0.19`)}
  );
  &:before,
  &:after {
    ${hamburgerCSS}
    content: '';
    display: block;
    left: auto;
    transition-timing-function: ease;
    transition-duration: 0.15s;
    transition-property: transform;
    border-radius: 4px;
    width: ${({ menuOpen }) => (menuOpen ? 100 : 80)}%;
    bottom: ${({ menuOpen }) => (menuOpen ? 0 : -10)}px;
    transform: rotate(${({ menuOpen }) => (menuOpen ? `-90deg` : `0`)});
    ${({ menuOpen }) => (menuOpen ? hamAfterActive : hamAfter)}
  }
  &:before {
    width: ${({ menuOpen }) => (menuOpen ? 100 : 120)}%;
    top: ${({ menuOpen }) => (menuOpen ? 0 : -10)}px;
    opacity: ${({ menuOpen }) => (menuOpen ? 0 : 1)};
    ${({ menuOpen }) => (menuOpen ? hamBeforeActive : hamBefore)}
  }
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  ${media.tablet`display: none;`};
`;

const NavList = styled.ol`
  div {
    ${mixins.flexBetween};
  }
`;

const NavListItem = styled.li`
  margin: 0 10px;
  position: relative;
  font-size: ${fontSizes.smallish};
  counter-increment: item 1;
  &:before {
    content: '0' counter(item) '.';
    text-align: right;
    color: ${colors.primary};
    font-size: ${fontSizes.xsmall};
  }
`;

const NavLink = styled(Link)`
  padding: 12px 10px;
`;

const HamburgerContainer = styled.div`
  display: none;
  ${media.tablet`${mixins.flexBetween}`};
`;

const IconThemePickerContainer = styled.div`
  display: ${({ isVisible }) => (isVisible ? 'block' : 'none')};
  cursor: pointer;
  width: 35px;
  svg {
    #${IconThemePicker.IDs.up} {
      fill: ${colors.primary};
    }
    #${IconThemePicker.IDs.down} {
      fill: ${colors.secondary};
    }
  }
`;
// #endregion

// #region  Helpers
const DELTA = 5;

const DIRECTIONS = {
  UP: 'up',
  DOWN: 'down',
  NONE: 'none',
};

// #endregion

const Nav = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollDirection, setScrollDirection] = useState(DIRECTIONS.NONE);

  const { modeToggle } = useContext(ThemeContext);

  const isMountedRef = useRef(isMounted);
  const isMenuOpenRef = useRef(isMenuOpen);
  const lastScrollY = useRef(0);

  const toggleMenu = () => setIsMenuOpen(p => !p);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 2000);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    isMenuOpenRef.current = isMenuOpen;
  }, [setIsMenuOpen]);

  useEffect(() => {
    isMountedRef.current = isMounted;
  }, [isMounted]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      const isHandleSkipped =
        !isMountedRef.current ||
        isMenuOpenRef.current ||
        Math.abs(lastScrollY.current - scrollY) <= DELTA;

      if (isHandleSkipped) {
        return;
      }

      if (scrollY < DELTA) {
        setScrollDirection(DIRECTIONS.NONE);
      } else if (scrollY > lastScrollY.current && scrollY > navHeightNumber) {
        scrollDirection !== DIRECTIONS.DOWN && setScrollDirection(DIRECTIONS.DOWN);
      } else if (scrollY + window.innerHeight < document.body.scrollHeight) {
        scrollDirection !== DIRECTIONS.UP && setScrollDirection(DIRECTIONS.UP);
      }
      lastScrollY.current = scrollY;
    };

    const handleResize = () => {
      if (window.innerWidth > MEDIA_SIZES.tablet && isMenuOpenRef.current) {
        toggleMenu();
      }
    };

    window.addEventListener('scroll', () => throttle(handleScroll()));
    window.addEventListener('resize', () => throttle(handleResize()));

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const themePickerButton = (
    <Transition classNames={ANIMATION_CLASSES.FADE_DOWN}>
      <IconThemePickerContainer isVisible={!isMenuOpen} onClick={modeToggle} style={delay(600)}>
        <IconThemePicker />
      </IconThemePickerContainer>
    </Transition>
  );

  return (
    <NavContainer scrollDirection={scrollDirection}>
      <Helmet>
        <body className={isMenuOpen ? 'blur' : ''} />
      </Helmet>
      <Navbar>
        <Transition.Group>
          {isMounted && (
            <Transition>
              <LogoContainer onClick={modeToggle}>
                <IconLogo />
              </LogoContainer>
            </Transition>
          )}
        </Transition.Group>

        <Transition.Group>
          {isMounted && (
            <Transition>
              <HamburgerContainer>
                {themePickerButton}
                <Hamburger onClick={toggleMenu}>
                  <HamburgerBox>
                    <HamburgerInner menuOpen={isMenuOpen} />
                  </HamburgerBox>
                </Hamburger>
              </HamburgerContainer>
            </Transition>
          )}
        </Transition.Group>

        <NavLinks>
          <NavList>
            <Transition.Group>
              {isMounted &&
                navBar.map((name, i) => (
                  <Transition key={i} classNames={ANIMATION_CLASSES.FADE_DOWN}>
                    <NavListItem key={i} style={delay(i * 100)}>
                      <NavLink to={`/#${content[name].id}`}>{name}</NavLink>
                    </NavListItem>
                  </Transition>
                ))}
            </Transition.Group>
          </NavList>

          <Transition.Group>{isMounted && themePickerButton}</Transition.Group>
        </NavLinks>
      </Navbar>

      <Menu menuOpen={isMenuOpen} toggleMenu={toggleMenu} />
    </NavContainer>
  );
};

export default Nav;
