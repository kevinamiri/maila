const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')
const fs = require('fs-extra')


exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return graphql(`
    {
      site{
        siteMetadata{
          languages{
            langs
          }
        }
      }
      markdownRemark{
        frontmatter{
          H0121
        }
      }
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            id
            fields {
              slug
              langKey
              tagSlugs{
                tag
                link
              }
            }
            frontmatter {
              id
              date
              path
              tags
              templateKey
              lang
              title
              H0121
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()))
      return Promise.reject(result.errors)
    }

    const posts = result.data.allMarkdownRemark.edges

    posts.forEach(edge => {
      const id = edge.node.id;
      createPage({
        path: edge.node.fields.slug,
        component: path.resolve(
          `src/templates/${String(edge.node.frontmatter.templateKey)}.js`
        ),
        // additional data can be passed via context
        context: {
          id,
        },
      })
    })

  })
}


exports.onCreateWebpackConfig = ({ actions, getConfig, stage }) => {
  const config = getConfig()
  if (stage.startsWith('develop') && config.resolve) {
    config.resolve.alias = {
      ...config.resolve.alias,
      'react-dom': '@hot-loader/react-dom'
    }
  }
  if (stage === 'build-javascript') {
    actions.setWebpackConfig({
      devtool: false
    })
  }
}


exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions
  // page.matchPath is a special key that's used for matching pages
  // only on the client.
  if (page.path.match(/^\/app/)) {
    page.matchPath = "/app/*"
    // Update the page.
    createPage(page)
  }
}