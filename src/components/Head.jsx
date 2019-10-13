// #region  Imports
import config from '@config';
// import androidIcon96x96 from '@images/favicons/android-chrome-96x96.png';
import appleIcon from '@images/favicons/apple-touch-icon.png';
// import appleIcon57x57 from '@images/favicons/apple-touch-icon-57x57.png';
// import appleIcon60x60 from '@images/favicons/apple-touch-icon-60x60.png';
// import appleIcon72x72 from '@images/favicons/apple-touch-icon-72x72.png';
// import appleIcon76x76 from '@images/favicons/apple-touch-icon-76x76.png';
import favicon16x16 from '@images/favicons/favicon-16x16.png';
import favicon32x32 from '@images/favicons/favicon-32x32.png';
import favicon from '@images/favicons/favicon.ico';
// import msIcon150x150 from '@images/favicons/mstile-150x150.png';
import safariPinnedTab from '@images/favicons/safari-pinned-tab.svg';
import ogImage from '@images/og.png';
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import Helmet from 'react-helmet';
// #endregion

const query = graphql`
  {
    site {
      siteMetadata {
        title
        siteUrl
        description
      }
    }
  }
`;

const Head = () => {
  const {
    site: { siteMetadata: metadata },
  } = useStaticQuery(query);

  return (
    <Helmet>
      <html lang="en" prefix="og: http://ogp.me/ns#" />
      <title itemProp="name" lang="en">
        {metadata.title}
      </title>
      <link rel="shortcut icon" href={favicon} />
      <meta name="description" content={metadata.description} />
      <meta name="keywords" content={config.siteKeywords} />
      <meta name="google-site-verification" content={config.googleVerification} />
      <meta property="og:title" content={metadata.title} />
      <meta property="og:description" content={metadata.description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={metadata.siteUrl} />
      <meta property="og:site_name" content={metadata.title} />
      <meta property="og:image" content={`${config.siteUrl}${ogImage}`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:locale" content={config.siteLanguage} />
      <meta itemProp="name" content={metadata.title} />
      <meta itemProp="description" content={metadata.description} />
      <meta itemProp="image" content={`${config.siteUrl}${ogImage}`} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={metadata.siteUrl} />
      <meta name="twitter:site" content={config.twitterHandle} />
      <meta name="twitter:creator" content={config.twitterHandle} />
      <meta name="twitter:title" content={metadata.title} />
      <meta name="twitter:description" content={metadata.description} />
      <meta name="twitter:image" content={`${config.siteUrl}${ogImage}`} />
      <meta name="twitter:image:alt" content={metadata.title} />

      <link rel="apple-touch-icon" sizes="76x76" href={appleIcon} />
      <link rel="icon" type="image/png" sizes="32x32" href={favicon32x32} />
      <link rel="icon" type="image/png" sizes="16x16" href={favicon16x16} />
      <link rel="mask-icon" href={safariPinnedTab} color="#202323" />
      <meta name="msapplication-TileColor" content="#00aba9" />
      <meta name="theme-color" content="#ffffff" />
    </Helmet>
  );
};

export default Head;
