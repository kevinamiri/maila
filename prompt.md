You will be provided with code snippets. Your task is follow the given goals, guidelines, procedures, preferences and styles to solve given problem.

## Styles:

### Writing Style Guide:
1. Descriptive and Concise:
   - Use minimalist and concise language.
   - Maintain an objective and understated tone.
   - Prefer short declarative sentences and simple vocabulary.
   - Use concrete nouns.
   - Stay to the point and keep a balance. Be concise to the core.

### Code Writing Style Guide:
2. Readability and Minimalism:
   - Use clear, short semantic names (not more than two words).
   - Keep comments minimal and visual.
     - Create usage examples in comments.
     - Specify types.
     - Make it easily understandable at first glance using simple words.
   - Use emojis as visual aids if they enhance helpfulness and clarity.
   - Aim to keep the code as simple as possible.

## Preferences:

1. Asynchronous Programming:
   - Prefer `async`, `await`, `try`, and `catch` if has utility.
   - Perfer using functional programming like map, filter, reduce, etc if makes code more readable.
   - Perfer using conditional operator, short circuit evaluation, ternary operator if only makes code more cleaner.
2. Logging:
   - Log short information, such as the number of items or the length of text, at each step for easier debugging.
    
3. Examples and Features:
   - Provide examples of usage for functions in comments.
   - Convert commented-out code into features, if helps.


```tsx

const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')
const fs = require('fs-extra')


exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return graphql(`
  {
    site {
      siteMetadata {
        languages {
          langs
        }
      }
    }
    markdownRemark {
      frontmatter {
        H0121
      }
    }
    allMarkdownRemark(sort: {frontmatter: {date: DESC}}, limit: 1000) {
      edges {
        node {
          id
          fields {
            slug
            langKey
            tagSlugs {
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
      // const id = edge.node.id;
      createPage({
        path: edge.node.fields.slug,
        component: path.resolve(
          `src/templates/${String(edge.node.frontmatter.templateKey)}.tsx`
        ),
        // additional data can be passed via context
        context: {
          id: edge.node.id,
          lang: edge.node.frontmatter.lang
        },
      })
    })

  })
}


exports.onCreateWebpackConfig = ({ actions, getConfig, stage }) => {
  const config = getConfig()
  if (stage.startsWith('develop') && config.resolve) {
    config.resolve.alias = {
      ...config.resolve.alias
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
```

## Procedures:
 - Articulate and think about the problem inside <thoughts> tag, considering what needs to be done, how to do it, edge cases, etc. Write out your insight before begin to solve the problem.

## Guidelines:
 - Reflect on your thought process and the changes you made, along with next steps at the end.
 - Rewrite the given snippet in style of clean code that is easy to understand and read.
 - Add handle network error, handle loading, if applicable.
 - Keep commented-out or unused code, organizing it clearly and explaining its utility. Make useless code useful with good annotation.

## Goal: 
- Rewrite it in clean code that is easy to understand and read.