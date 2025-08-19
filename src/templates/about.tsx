// ─── 📦 Imports ────────────────────────────────────────────────────────────────
import React from "react";
import { graphql } from "gatsby";

// 🔹 MUI
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

// 🔹 Components
import Layout from "../components/layout/Layout";
import Content, { HTMLContent } from "../components/homepage/Content";
import TagList from "../components/landings/modules/TagList";
import { SEO } from "../components/SEO/SEO";

// ─── 🧩 Types ──────────────────────────────────────────────────────────────────
interface AboutPageTemplateProps {
  title: string;
  content?: string;
  contentComponent?: React.ComponentType<any>;
  tags?: string[];
  langKey?: string;
}

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

// ─── 📄 Template Component ─────────────────────────────────────────────────────
const AboutPageTemplate: React.FC<AboutPageTemplateProps> = ({
  title,
  content,
  contentComponent,
  tags,
  langKey,
}) => {
  const PageContent = contentComponent || Content;

  return (
    <Box sx={{ mt: 8 }}>
      <Container sx={{ mt: 5 }}>
        <PageContent content={content} />
        <TagList tags={tags} langKey={langKey} />
      </Container>
    </Box>
  );
};

// ─── 📄 Page Component ─────────────────────────────────────────────────────────
const AboutPage: React.FC<AboutPageProps> = ({ data, location }) => {
  const { markdownRemark } = data;
  const { html, frontmatter } = markdownRemark;
  const { tags, lang, title } = frontmatter;

  return (
    <Layout data={data} location={location}>
      <Container>
        <AboutPageTemplate
          contentComponent={HTMLContent}
          title={title}
          content={html}
          tags={tags}
          langKey={lang}
        />
      </Container>
    </Layout>
  );
};

export default AboutPage;

// ─── 🔍 GraphQL Query ──────────────────────────────────────────────────────────
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

// ─── 🧠 SEO Head ───────────────────────────────────────────────────────────────
export const Head = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <SEO
      title={post.frontmatter.title}
      description={post.frontmatter.description}
      pathname={post.frontmatter.path}
      key="seo-component"
    >
      <meta name="description" content={post.frontmatter.description} />
    </SEO>
  );
};