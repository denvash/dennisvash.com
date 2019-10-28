<h1 align="center">

<img src=".github/assets/3DLogo.svg" alt="3dLogo" style="width: 50vw;">

[![SiteBuild](https://img.shields.io/netlify/a854a375-dea6-4ea8-8cf9-6273fc75c75c?color=7A1ECC&label=Site%20Build&style=for-the-badge)](https://app.netlify.com/sites/dennisvash/deploys) [![StorybookBuild](https://img.shields.io/netlify/ba2e0f4c-e609-44bf-995d-cb60e8b1ee0b?color=9013FE&label=Storybook%20Build&style=for-the-badge)](https://app.netlify.com/sites/dennisvash-storybook/deploys) ![GitHub package.json version](https://img.shields.io/github/package-json/v/denvash/dennisvash.com?color=%23A641FE&style=for-the-badge) [![Codacy grade](https://img.shields.io/codacy/grade/c4a2d7f66e6c4955b7ef136efa8ad7ea?color=%23BF77FE&style=for-the-badge)](https://www.codacy.com/manual/denvash/dennisvash.com?utm_source=github.com&utm_medium=referral&utm_content=denvash/dennisvash.com&utm_campaign=Badge_Grade)

</h1>

## [Storybook Deployment](https://dennisvash-storybook.netlify.com/?path=/story/*)

> ⚠️ Site still Under construction 🚧

## Features

  <img align="right" height="200" src=".github/assets/ThemesSS.png" alt="3dLogo" >

- [Atomic Design Methodology](https://bradfrost.com/blog/post/atomic-web-design/)
- [Storybook UI Development](https://storybook.js.org/)
- Static site empowered with [Gatsby](https://www.gatsbyjs.org/)
- Hosted by [Netlify](https://www.gatsbyjs.org/docs/deploying-to-netlify)
- Themeable with [`styled-component`](https://www.styled-components.com/) & [`polished`](https://polished.js.org/)
- Markdown Content quired with [GraphQL](https://graphql.org/).

## Installation

1. Clone and install packages

   ```sh
   git clone https://github.com/denvash/dennisvash.com.git
   cd dennisvash.com/
   yarn install
   ```

2. [Generate Github Token](https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line/) and add it as an environment variable

   ```.env
   <!-- .env -->
   GITHUB_TOKEN=fxav8f2a**
   ```

3. Development

   ```sh
   yarn develop
   yarn storybook
   ```

## Building and Running for Production

1. Generate a full static production build

   ```sh
   yarn build
   ```

2. Preview the site as it will appear once deployed

   ```sh
   yarn serve
   ```
