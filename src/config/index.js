const config = {
  siteTitle: 'Dennis Vash | Software Engineer',
  siteDescription:
    'Dennis Vash is a software engineer based in Israel who specializes in developing exceptional, high-quality websites and applications.',
  siteKeywords:
    'Dennis Vash, Dennis, Vash, denvash, software engineer, front-end engineer, web developer, javascript',
  siteUrl: 'https://dennisvash.com',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-148953634-1',
  googleVerification: '43X8RZJhlVlUbePr3JCjOey_lNOJjbhtQ0jA0qeisyM',
  name: 'Dennis Vash',
  location: 'Haifa, Israel',
  email: 'dennisvash@gmail.com',
  github: 'https://github.com/denvash',
  twitterHandle: '@DennisVash',
  socialMedia: {
    GITHUB: {
      name: 'Github',
      url: 'https://github.com/denvash',
    },
    STACKOVERFLOW: {
      name: 'StackOverflow',
      url: 'https://stackoverflow.com/users/7882470/dennis-vash',
    },
    DEV: {
      name: 'Dev',
      url: 'https://dev.to/denvash',
    },
    TWITTER: {
      name: 'Twitter',
      url: 'https://twitter.com/dennisvash',
    },
    CODESANDBOX: {
      name: 'Codesandbox',
      url: 'https://codesandbox.io/u/denvash',
    },

    MEDIUM: {
      name: 'Medium',
      url: 'https://medium.com/@dennisvash',
    },
    LINKEDIN: {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/dennis-vash/',
    },
  },

  navLinks: [
    {
      name: 'About',
      url: '#about',
    },
    {
      name: 'Timeline',
      url: '#jobs',
    },
    {
      name: 'Projects',
      url: '#projects',
    },
    {
      name: 'Contact',
      url: '#contact',
    },
  ],

  content: {
    jobs: {
      heading: `What I've been up to`,
    },
    projects: {
      heading: `Some Things I've Built`,
    },
    footer: {
      heading: 'Crafted by Dennis Vash',
      fetchUrl: 'https://api.github.com/repos/denvash/dennisvash.com',
    },
  },

  navHeight: 100,
  greenColor: '#64ffda',
  navyColor: '#0a192f',
  darkNavyColor: '#020c1b',

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
module.exports = config;
