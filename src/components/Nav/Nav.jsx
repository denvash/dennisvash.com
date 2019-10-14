// #region  Imports
import { Menu } from '@components';
import { IconLogo } from '@components/icons';
import Transition, { delay } from '@components/Transition';
import { navBar, content } from '@config';
import { ANIMATION_CLASSES, media, MEDIA_SIZES, mixins, theme } from '@styles';
import { throttle } from '@utils';
import React, { useEffect, useRef, useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import { lighten } from 'polished';
// #endregion

// #region  Styling
const { colors, fontSizes, fonts } = theme;
const navHeight = Number(theme.navHeight.replace('px', ''));

const NavContainer = styled.header`
  ${mixins.flexBetween};
  position: fixed;
  top: 0;
  padding: 0px 50px;
  background-color: ${colors.navy};
  transition: ${theme.transition};
  z-index: 11;
  filter: none !important;
  pointer-events: auto !important;
  user-select: auto !important;
  width: 100%;
  height: ${props => (props.scrollDirection === 'none' ? theme.navHeight : theme.navScrollHeight)};
  box-shadow: ${props =>
    props.scrollDirection === 'up' ? `0 10px 30px -10px ${colors.darkNavy}` : 'none'};
  transform: translateY(
    ${props => (props.scrollDirection === 'down' ? `-${theme.navScrollHeight}` : '0px')}
  );
  ${media.desktop`padding: 0 40px;`};
  ${media.tablet`padding: 0 25px;`};
`;

const Navbar = styled.nav`
  ${mixins.flexBetween};
  position: relative;
  width: 100%;
  color: ${props => lighten(0.2, colors.secondary(props))};
  font-family: ${fonts.SFMono};
  counter-reset: item 0;
  z-index: 12;
`;

const LogoContainer = styled.div`
  svg {
    width: 60px;
    ${media.tiny`width: 50px; padding-right: 5px;`};
    height: ${theme.navHeight};
    #inner {
      stroke-width: 7px;
    }
    #outer {
      stroke-width: 5px;
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

const HamburgerBox = styled.div`
  position: relative;
  display: inline-block;
  width: ${theme.hamburgerWidth}px;
  height: 24px;
`;

const HamburgerInner = styled.div`
  background-color: ${colors.primary};
  position: absolute;
  width: ${theme.hamburgerWidth}px;
  height: 2px;
  border-radius: ${theme.borderRadius};
  top: 50%;
  left: 0;
  right: 0;
  transition-duration: 0.22s;
  transition-property: transform;
  transition-delay: ${props => (props.menuOpen ? `0.12s` : `0s`)};
  transform: rotate(${props => (props.menuOpen ? `225deg` : `0deg`)});
  transition-timing-function: cubic-bezier(
    ${props => (props.menuOpen ? `0.215, 0.61, 0.355, 1` : `0.55, 0.055, 0.675, 0.19`)}
  );
  &:before,
  &:after {
    content: '';
    display: block;
    background-color: ${colors.green};
    position: absolute;
    left: auto;
    right: 0;
    width: ${theme.hamburgerWidth}px;
    height: 2px;
    transition-timing-function: ease;
    transition-duration: 0.15s;
    transition-property: transform;
    border-radius: 4px;
  }
  &:before {
    width: ${props => (props.menuOpen ? `100%` : `120%`)};
    top: ${props => (props.menuOpen ? `0` : `-10px`)};
    opacity: ${props => (props.menuOpen ? 0 : 1)};
    transition: ${props => (props.menuOpen ? theme.hamBeforeActive : theme.hamBefore)};
  }
  &:after {
    width: ${props => (props.menuOpen ? `100%` : `80%`)};
    bottom: ${props => (props.menuOpen ? `0` : `-10px`)};
    transform: rotate(${props => (props.menuOpen ? `-90deg` : `0`)});
    transition: ${props => (props.menuOpen ? theme.hamAfterActive : theme.hamAfter)};
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

const NavLink = styled(AnchorLink)`
  padding: 12px 10px;
`;

const ResumeLink = styled.a`
  ${mixins.smallButton};
  margin-left: 10px;
  font-size: ${fontSizes.smallish};
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
      } else if (scrollY > lastScrollY.current && scrollY > navHeight) {
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

  return (
    <NavContainer scrollDirection={scrollDirection}>
      <Helmet>
        <body className={isMenuOpen ? 'blur' : ''} />
      </Helmet>
      <Navbar>
        <Transition.Group>
          {isMounted && (
            <Transition>
              <LogoContainer>
                <IconLogo />
              </LogoContainer>
            </Transition>
          )}
        </Transition.Group>

        <Transition.Group>
          {isMounted && (
            <Transition>
              <Hamburger onClick={toggleMenu}>
                <HamburgerBox>
                  <HamburgerInner menuOpen={isMenuOpen} />
                </HamburgerBox>
              </Hamburger>
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
                      <NavLink href={`#${content[name].id}`}>{name}</NavLink>
                    </NavListItem>
                  </Transition>
                ))}
            </Transition.Group>
          </NavList>

          <Transition.Group>
            {isMounted && (
              <Transition classNames={ANIMATION_CLASSES.FADE_DOWN}>
                <div style={delay(600)}>
                  <ResumeLink href="/resume.pdf" target="_blank" rel="nofollow noopener noreferrer">
                    Resume
                  </ResumeLink>
                </div>
              </Transition>
            )}
          </Transition.Group>
        </NavLinks>
      </Navbar>

      <Menu menuOpen={isMenuOpen} toggleMenu={toggleMenu} />
    </NavContainer>
  );
};

export default Nav;
