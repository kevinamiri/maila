const languages = require("./src/data/languages");
const siteUrl = `https://maila.ai/en`
module.exports = {
  siteMetadata: {
    title: `MAILA AI`,
    description: `AI Copywriting & Writing Assistant`,
    siteUrl: "https://maila.ai/en",
    image: "img/logo/mstile-150x150.png",
    author: {
      name: "Kevin Amiri",
    },
    organization: {
      name: "MAILA AI",
      url: "https://maila.ai/en",
      logo: "img/logo/logo-dark.svg",
    },
    languages,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true, // defaults to false
        jsxPragma: `jsx`, // defaults to "React"
        allExtensions: true, // defaults to false
      },
    },
    `gatsby-plugin-mui-emotion`,
    {
      resolve: "gatsby-plugin-i18n",
      options: {
        langKeyForNull: "any",
        langKeyDefault: languages.defaultLangKey,
        useLangKeyLayout: false,
      },
    },
    {
      resolve: "gatsby-plugin-i18n-tags",
      options: {
        // Default options
        tagPage: "src/templates/tags.tsx",
        tagsUrl: "/tags/",
        langKeyForNull: "any",
      },
    },
    `gatsby-transformer-json`,
    `gatsby-transformer-csv`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/data/articles`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/data/sheets`,
        name: "sheets",
      },
    },
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/static/img`,
        name: "uploads",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/img/`,
        name: "images",
      },
    },
    "gatsby-transformer-javascript-frontmatter",
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    "gatsby-plugin-resolve-src",
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-table-of-contents`,
            options: {
              exclude: "Table of Contents",
              tight: false,
              ordered: false,
              fromHeading: 1,
              toHeading: 6,
              className: "table-of-contents"
            },
          },
          `gatsby-remark-autolink-headers`
        ],
      },
    },

    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        query: `
        {
          allSitePage {
            nodes {
              path
            }
          }
        }
      `,
        resolveSiteUrl: () => "https://maila.ai",
        resolvePages: ({
          allSitePage: { nodes: allPages }
        }) => {
          return allPages.map(page => {
            return { ...page }
          })
        },
        serialize: ({ path, modifiedGmt }) => {
          return {
            url: path,
            lastmod: modifiedGmt,
          }
        },
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://maila.ai",
        sitemap: "https://maila.ai/sitemap/sitemap-0.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `maila.ai`,
        short_name: `maila.ai`,
        lang: `en`,
        background_color: `#ffba00`,
        theme_color: `#50a1ff`,
        start_url: `/en/`,
        display: `standalone`,
        description: `AI Copywriting & Writing Assistant`,
        icon: `${__dirname}/src/img/logo/mstile-150x150.png`,
        localize: [
          {
            start_url: `/sv/`,
            lang: `sv`,
            name: `AI skrivassistent`,
            short_name: `Maila AI`,
            description: `An AI-powered copywriting and writing assistance platform that enables you to produce professional-grade content in a few minutes`,
          },
        ],
      },
    },
  ],
};
