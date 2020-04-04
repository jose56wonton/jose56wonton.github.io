const path = require('path');
require('dotenv').config();
module.exports = {
  siteMetadata: {
    title: `Joshua Wootonnn`,
    description: `Cowboy Hacker`,
    author: `@joshuawootonn`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          process.env.GOOGLE_ANALYTICS_TRACKING_ID
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        gtagConfig: {
          send_page_view: true
        },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: false,
          // Setting this parameter is also optional
          respectDNT: true,
        },
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Joshua Wootonn`,
        short_name: `JW`,
        start_url: `/`,
        background_color: `#FBB02D`,
        theme_color: `#FBB02D`,
        display: `minimal-ui`,
        icon: `${__dirname}/src/images/logo.png`,
      },
    },
    'gatsby-plugin-typescript',
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.GATSBY_CONTENTFUL_SPACE_ID,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.GATSBY_CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        src: path.join(__dirname, 'src'),
        pages: path.join(__dirname, 'src/pages'),
        helpers: path.join(__dirname, 'src/utils'),
        models: path.join(__dirname, 'src/models'),
        repositories: path.join(__dirname, 'src/repositories'),
        components: path.join(__dirname, 'src/components'),
        images: path.join(__dirname, 'src/images'),
      }
    },
    `gatsby-plugin-styled-components`
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,

  ],
};
