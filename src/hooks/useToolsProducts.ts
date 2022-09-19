import React from "react";
import { useStaticQuery, graphql } from "gatsby";

export const useToolsProducts = () => {
  const lang = useStaticQuery(
    graphql`
      query UseProducts {
        en: allMarkdownRemark(
          filter: {
            frontmatter: {
              templateKey: { eq: "tools-body" }
              lang: { eq: "en" }
            }
          }
        ) {
          edges {
            node {
              frontmatter {
                title
                description
                header
                usage
                id
                placeholder
                help_hint
                tags
                date
                tone
                hasCustomTemplate
                hasCustomTextArea
                editor_height
                loadFromUrl
                extraFields {
                  company {
                    name
                    id
                    label
                    type
                    placeholder
                  }
                  purpose {
                    name
                    id
                    label
                    type
                    placeholder
                  }
                  mission {
                    name
                    id
                    label
                    type
                    placeholder
                  }
                  outputType {
                    name
                    id
                    label
                    type
                    options
                    placeholder
                  }
                  features {
                    name
                    id
                    label
                    type
                    placeholder
                  }
                  keywords {
                    name
                    id
                    label
                    type
                    placeholder
                  }
                }
                slug
                lang
                product_type
                url
                jsonId
                icon
              }
            }
          }
        }
        sv: allMarkdownRemark(
          filter: {
            frontmatter: {
              templateKey: { eq: "tools-body" }
              lang: { eq: "sv" }
            }
          }
        ) {
          edges {
            node {
              frontmatter {
                title
                description
                header
                usage
                id
                placeholder
                help_hint
                tags
                date
                tone
                hasCustomTemplate
                hasCustomTextArea
                editor_height
                loadFromUrl
                extraFields {
                  company {
                    name
                    id
                    label
                    type
                    placeholder
                  }
                  purpose {
                    name
                    id
                    label
                    type
                    placeholder
                  }
                  mission {
                    name
                    id
                    label
                    type
                    placeholder
                  }
                  features {
                    name
                    id
                    label
                    type
                    placeholder
                  }
                  keywords {
                    name
                    id
                    label
                    type
                    placeholder
                  }
                  outputType {
                    name
                    id
                    label
                    type
                    options
                    placeholder
                  }
                }
                slug
                lang
                product_type
                url
                jsonId
                icon
              }
            }
          }
        }
        da: allMarkdownRemark(
          filter: {
            frontmatter: {
              templateKey: { eq: "tools-body" }
              lang: { eq: "da" }
            }
          }
        ) {
          edges {
            node {
              frontmatter {
                title
                description
                header
                usage
                id
                placeholder
                help_hint
                tags
                date
                tone
                hasCustomTemplate
                hasCustomTextArea
                editor_height
                loadFromUrl
                extraFields {
                  company {
                    name
                    id
                    label
                    type
                    placeholder
                  }
                  purpose {
                    name
                    id
                    label
                    type
                    placeholder
                  }
                  mission {
                    name
                    id
                    label
                    type
                    placeholder
                  }
                  features {
                    name
                    id
                    label
                    type
                    placeholder
                  }
                  keywords {
                    name
                    id
                    label
                    type
                    placeholder
                  }
                  outputType {
                    name
                    id
                    label
                    type
                    options
                    placeholder
                  }
                }
                slug
                lang
                product_type
                url
                jsonId
                icon
              }
            }
          }
        }
        fi: allMarkdownRemark(
          filter: {
            frontmatter: {
              templateKey: { eq: "tools-body" }
              lang: { eq: "fi" }
            }
          }
        ) {
          edges {
            node {
              frontmatter {
                title
                description
                header
                usage
                id
                placeholder
                help_hint
                tags
                date
                tone
                hasCustomTemplate
                hasCustomTextArea
                editor_height
                loadFromUrl
                extraFields {
                  company {
                    name
                    id
                    label
                    type
                    placeholder
                  }
                  purpose {
                    name
                    id
                    label
                    type
                    placeholder
                  }
                  mission {
                    name
                    id
                    label
                    type
                    placeholder
                  }
                  outputType {
                    name
                    id
                    label
                    type
                    options
                    placeholder
                  }
                  features {
                    name
                    id
                    label
                    type
                    placeholder
                  }
                  keywords {
                    name
                    id
                    label
                    type
                    placeholder
                  }
                }
                slug
                lang
                product_type
                url
                jsonId
                icon
              }
            }
          }
        }
      }
    `
  );
  return lang;
};

export default useToolsProducts;
