const config = require('./src/config');

const fs = require(`fs`);
const fetch = require(`node-fetch`);
const { buildClientSchema } = require(`graphql`);
const { createHttpLink } = require(`apollo-link-http`);

require('dotenv').config({
  path: `.env`,
});

module.exports = {
  siteMetadata: {
    title: config.siteTitle,
    siteUrl: config.siteUrl,
    description: config.siteDescription,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-robots-txt',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'DennisVash',
        short_name: 'DennisVash',
        start_url: '/',
        background_color: config.dark,
        theme_color: config.secondary,
        display: 'minimal-ui',
        icon: './src/images/logo.png',
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/src/content`,
      },
    },
    'gatsby-plugin-resolve-src',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-external-links',
            options: {
              target: '_blank',
              rel: 'nofollow noopener noreferrer',
            },
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1100,
              quality: 90,
              linkImagesToOriginal: true,
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: config.googleAnalyticsID,
      },
    },
    // TODO: implement graphql query.
    {
      resolve: `gatsby-source-graphql`,
      options: {
        fieldName: `github`,
        typeName: `GitHub`,
        createLink: () =>
          createHttpLink({
            uri: `https://api.github.com/graphql`,
            headers: {
              Authorization: `bearer ${process.env.GATSBY_GITHUB_TOKEN}`,
            },
            fetch,
          }),
        createSchema: async () => {
          const json = JSON.parse(fs.readFileSync(`${__dirname}/github.json`));
          return buildClientSchema(json.data);
        },
      },
    },
  ],
};
