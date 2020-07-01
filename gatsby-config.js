const path = require('path');
require('dotenv').config();

const {
  NODE_ENV,
  URL: NETLIFY_SITE_URL = 'https://www.joshuawootonn.com',
  DEPLOY_PRIME_URL: NETLIFY_DEPLOY_URL = NETLIFY_SITE_URL,
  CONTEXT: NETLIFY_ENV = NODE_ENV
} = process.env;
const isNetlifyProduction = NETLIFY_ENV === 'production';
const siteUrl = isNetlifyProduction ? NETLIFY_SITE_URL : NETLIFY_DEPLOY_URL;


module.exports = {
  siteMetadata: {
    title: `Joshua Wootonnn`,
    titleTemplate: "%s - Joshua Wootonnn",
    description: `My passion is an intuitive, aesthetic web. My job is to make that a reality for you. I am currently doing this with tools like Gatsby.js and Next.js.`,
    keywords: 'freelancer, creative, web design, web developer, frontend, engineer,  iowa, iowa city, eastern iowa, java script, web designer, seo, branding, frontend , freelance frontend, freelance design',
    image: "/seo.png",
    twitterUsername: `JoshWootonn`,
    siteUrl
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    'gatsby-plugin-typescript',
    `gatsby-plugin-styled-components`,

    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Josh Wootonn`,
        short_name: `Josh`,
        description: 'My passion is an intuitive, aesthetic web. My job is to make that a reality for you. I am currently doing this with tools like Gatsby.js and Next.js.',
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#FBB02D`,
        display: `standalone`,
        icon: `static/favicon.png`,
      },
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: process.env.GOOGLE_TAG_MANAGER_ID,
        includeInDevelopment: false,
        defaultDataLayer: { platform: "gatsby" },
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        resolveEnv: () => NETLIFY_ENV,
        env: {
          production: {
            policy: [{ userAgent: '*' }]
          },
          'branch-deploy': {
            policy: [{ userAgent: '*', disallow: ['/'] }],
            sitemap: null,
            host: null
          },
          'deploy-preview': {
            policy: [{ userAgent: '*', disallow: ['/'] }],
            sitemap: null,
            host: null
          }
        }
      }
    },


    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.GATSBY_CONTENTFUL_SPACE_ID,
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
  ],
};