import React from "react";
import * as PropTypes from "prop-types";
import TagList from "../components/landings/modules/TagList";
import { graphql } from "gatsby";
import Layout from "../components/layout/Layout";
import SEO from "../components/SEO/SEO";
import Content, { HTMLContent } from "../components/homepage/Content";
import { Typography, Container, Box } from '@mui/material'


const AboutPageTemplate = ({
  title,
  content,
  contentComponent,
  tags,
  langKey,
}) => {
  const PageContent = contentComponent || Content;
  return (
    <Box>
      <Typography variant="h1" color="primary">
        {title}
      </Typography>
      <Container sx={{
        mt: 5
      }}>
        <PageContent content={content} />
        <TagList tags={tags} langKey={langKey} />
      </Container>
    </Box>
  );
};


AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
  tags: PropTypes.array,
  langKey: PropTypes.string,
};


const AboutPage = (props) => {
  var dataMarkdown = [];
  if (props.data !== null) {
    dataMarkdown = props.data.markdownRemark;
  }
  const jsonData = props.data.allArticlesJson.edges[0].node.articles;
  const { frontmatter } = dataMarkdown;
  const image = frontmatter.image.childImageSharp.gatsbyImageData.src | ""
  const langKey = frontmatter.lang;
  const tags = frontmatter.tags;
  return (
    <Layout
      data={props.data}
      jsonData={jsonData}
      location={props.location}
    >
      <SEO frontmatter={frontmatter} postImage={image} />
      <Container>
        <AboutPageTemplate
          contentComponent={HTMLContent}
          title={dataMarkdown.frontmatter.title}
          content={dataMarkdown.html}
          tags={tags}
          langKey={langKey}
        />
      </Container>
    </Layout>
  );
}


AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default AboutPage;

export const pageQuery = graphql`query AboutPageQuery($id: String!) {
  site {
    siteMetadata {
      languages {
        defaultLangKey
        langs
      }
    }
  }
  allArticlesJson(filter: {title: {eq: "home"}}) {
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
  markdownRemark(id: {eq: $id}) {
    html
    frontmatter {
      id
      title
      description
      tags
      lang
      image {
        childImageSharp {
          gatsbyImageData(quality: 100, layout: FULL_WIDTH)
        }
      }
    }
    fields {
      slug
    }
  }
}
`;
