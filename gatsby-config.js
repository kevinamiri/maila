const languages = require("./src/data/languages");
const siteUrl = `https://maila.ai`
module.exports = {
  siteMetadata: {
    title: `maila.ai`,
    description: `
    A sophisticated copy editing platforms
`,
    siteUrl: "https://maila.ai",
    image: "img/logo-dark.png",
    author: {
      name: "Kevin Amiri",
    },
    organization: {
      name: "NeuralWord",
      url: "https://maila.ai",
      logo: "img/logo-dark.svg",
    },
    social: {
      twitter: "@NeuralWord",
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
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-mui-emotion`,
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: "NeuralWord",
      },
    },
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
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          posts: require.resolve("./src/components/layout/mdx-layout.tsx"),
          default: require.resolve("./src/components/layout/mdx-layout.tsx"),
        },
      },
    },
    "gatsby-transformer-javascript-frontmatter",
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    "gatsby-plugin-resolve-src",
    "gatsby-transformer-remark",

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
        sitemap: "https://maila.ai/sitemap.xml",
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
        description: `A sophisticated copy editing platforms`,
        icon: `src/img/logo.png`,
        localize: [
          {
            start_url: `/sv/`,
            lang: `sv`,
            name: `A sophisticated copy editing platforms`,
            short_name: `Copy tools`,
            description: `What if AI could do sophisticated copy editing of your documents? We did it! But first, let's explain what copy editing is…`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-create-client-paths`,
      options: { prefixes: [`/home/*`, `/app/*`] },
    },
  ],
};
