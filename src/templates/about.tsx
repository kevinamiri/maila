import React from "react";
import TagList from "../components/landings/modules/TagList";
import { graphql } from "gatsby";
import Layout from "../components/layout/Layout";
import Content, { HTMLContent } from "../components/homepage/Content";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

interface AboutPageTemplateProps {
  title: string;
  content?: string;
  contentComponent?: React.ComponentType<any>;
  tags?: string[];
  langKey?: string;
}

const AboutPageTemplate: React.FC<AboutPageTemplateProps> = ({
  title,
  content,
  contentComponent,
  tags,
  langKey,
}) => {
  const PageContent = contentComponent || Content;
  return (
    <Box
      sx={{
        mt: 8
      }}
    >
      <Container
        sx={{
          mt: 5,
        }}
      >
        <PageContent content={content} />
        <TagList tags={tags} langKey={langKey} />
      </Container>
    </Box>
  );
};

interface AboutPageProps {
  data: {
    markdownRemark: {
      html: string;
      frontmatter: {
        title: string;
        description: string;
        tags: string[];
        lang: string;
      };
    };
    allArticlesJson: {
      edges: {
        node: {
          articles: {
            en: string;
            sv: string;
            da: string;
            no: string;
            fi: string;
          };
        };
      }[];
    };
    site: {
      siteMetadata: {
        title: string;
        languages: {
          langs: string[];
          defaultLangKey: string;
        };
      };
    };
  };
  location: Location;
}

const AboutPage: React.FC<AboutPageProps> = (props) => {
  const data = props.data;
  const markdownRemark = props.data.markdownRemark;
  const jsonData = props.data.allArticlesJson.edges[0].node.articles;
  const langKey = markdownRemark.frontmatter.lang;
  const tags = markdownRemark.frontmatter.tags;
  return (
    <Layout data={props.data} jsonData={jsonData} location={props.location}>
      <Container>
        <AboutPageTemplate
          contentComponent={HTMLContent}
          title={markdownRemark.frontmatter.title}
          content={markdownRemark.html}
          tags={tags}
          langKey={langKey}
        />
      </Container>
    </Layout>
  );
};


export default AboutPage;

export const pageQuery = graphql`
  query AboutPageQuery($id: String!) {
    site {
      siteMetadata {
        languages {
          defaultLangKey
          langs
        }
      }
    }
    allArticlesJson(filter: { title: { eq: "home" } }) {
      edges {
        node {
          articles {
            en
            sv
            da
            no
            fi
          }
        }
      }
    }
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        id
        title
        description
        tags
        lang
      }
      fields {
        slug
      }
    }
  }
`;


import { SEO } from "../components/SEO/SEO";


export const Head = (props) => {
  const { data } = props;
  const { markdownRemark: post } = data;
  return (
  <SEO title={post.frontmatter.title} description={post.frontmatter.description} pathname={post.frontmatter.path}>
    <meta name="description" content={post.frontmatter.description} />
  </SEO>
  )
}