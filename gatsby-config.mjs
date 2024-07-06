import { dirname } from "path"
import { fileURLToPath } from "url"
import languages from "./src/data/languages.js"

const siteUrl = "https://maila.ai"
const __dirname = dirname(fileURLToPath(import.meta.url))

// Common file paths
const paths = {
  static: `${__dirname}/static`,
  uploads: `${__dirname}/static/img`,
  pages: `${__dirname}/src/pages`,
  images: `${__dirname}/src/img/`,
  articles: `${__dirname}/src/data/articles`,
  sheets: `${__dirname}/src/data/sheets`,
}

const siteMetadata = {
  title: `MAILA AI`,
  description: `AI Copywriting & Writing Assistant`,
  siteUrl,
  image: "img/logo/mstile-150x150.png",
  author: { name: "Kevin Amiri" },
  organization: {
    name: "MAILA AI",
    url: `${siteUrl}/en`,
    logo: "img/logo/logo-dark.svg",
  },
  languages,
}

const config = {
  flags: { DEV_SSR: true },
  siteMetadata,
  plugins: [
    // TypeScript support
    {
      resolve: `gatsby-plugin-typescript`,
      options: { isTSX: true, jsxPragma: `jsx`, allExtensions: true },
    },

    // UI and styling
    `gatsby-plugin-mui-emotion`,

    // Internationalization
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
      options: { tagPage: "src/templates/tags.tsx", tagsUrl: "/tags/", langKeyForNull: "any" },
    },

    // Data transformers
    `gatsby-transformer-json`,
    `gatsby-transformer-csv`,
    `gatsby-plugin-mdx`,
    `gatsby-transformer-javascript-frontmatter`,

    // File system sources
    ...Object.entries(paths).map(([name, path]) => ({
      resolve: `gatsby-source-filesystem`,
      options: { path, name },
    })),

    // Image processing
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,

    // Utility plugins
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

    // SEO and site metadata
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        query: `{ allSitePage { nodes { path } } }`,
        resolveSiteUrl: () => siteUrl,
        resolvePages: ({ allSitePage: { nodes: allPages } }) => allPages,
        serialize: ({ path, modifiedGmt }) => ({ url: path, lastmod: modifiedGmt }),
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: siteUrl,
        sitemap: `${siteUrl}/sitemap/sitemap-0.xml`,
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
        description: siteMetadata.description,
        icon: `${paths.images}/logo/mstile-150x150.png`,
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
}

export default config