import React, { memo } from "react";
import { graphql } from "gatsby";

// MUI Components
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

// Custom Components
import Layout from "../components/layout/Layout";
import Content from "../components/homepage/Content";
import TagList from "../components/landings/modules/TagList";
import FeatureSection from "../components/landings/feature-section";
import DiscussionFeature from "../components/landings/landing-feature";
import { SEO } from "../components/SEO/SEO";

// =============================================
// Interfaces
// =============================================
interface PluginsPageTemplateProps {
  content: string;
  contentComponent?: React.ComponentType<any>;
  tags: string[];
  langKey: string;
}

interface PluginsPageProps {
  data: {
    markdownRemark: {
      frontmatter: {
        [key: string]: any;
        image?: any;
      }
    };
    site: {
      siteMetadata: {
        title: string;
        languages: {
          defaultLangKey: string;
          langs: string[];
        }
      }
    }
  };
  location: {
    pathname: string;
  };
}

interface HeadProps {
  data: {
    markdownRemark: {
      frontmatter: {
        title: string;
        description: string;
        path: string;
      }
    }
  };
}

// =============================================
// Template Component
// =============================================
const PluginsPageTemplate = ({ 
  content, 
  contentComponent: PageContent = Content, 
  tags, 
  langKey 
}: PluginsPageTemplateProps) => (
  <Box sx={{ mt: 8 }}>
    <Container sx={{ mt: 5 }}>
      <PageContent content={content} />
      <TagList tags={tags} langKey={langKey} />
    </Container>
  </Box>
);

// =============================================
// Main Page Component
// =============================================
const PluginsPage = ({ data, location }: PluginsPageProps) => {
  const { markdownRemark } = data;

  return (
    <Layout data={data} location={location}>
      <Container>
        <FeatureSection 
          title="Feature Title" 
          description="Feature Description" 
          primaryButtonText="Primary Button" 
        />
        <DiscussionFeature />
      </Container>
    </Layout>
  );
};

export default memo(PluginsPage);

// =============================================
// Head Component for SEO
// =============================================
export const Head = ({ data }: HeadProps) => {
  const { markdownRemark: post } = data;
  return (
    <SEO 
      title={post.frontmatter.title} 
      description={post.frontmatter.description} 
      pathname={post.frontmatter.path}
    >
      <meta name="description" content={post.frontmatter.description} />
    </SEO>
  );
};

// =============================================
// GraphQL Query
// =============================================
export const pageQuery = graphql`
  query PluginsPageQuery($id: String!) {
    site {
      siteMetadata {
        title
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
        path
        plugins {
          name
          price
          description
          primaryButtonText
          url
        }
      }
      fields {
        slug
      }
    }
  }
`;