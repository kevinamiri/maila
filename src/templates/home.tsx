import React from "react";
import { graphql } from "gatsby";
import Container from "@mui/material/Container";

// Layout components
import Layout from "../components/layout/Layout";
import { SEO } from "../components/SEO/SEO";

// Page sections
import HomeHeroPage from "../components/landings/HomeHeroPage";
import LandingCta from "sections/landing-cta";

const HomePage = ({ data, location }) => {
  const { markdownRemark, allArticlesJson } = data;
  const { frontmatter } = markdownRemark;
  const articles = allArticlesJson.edges[0].node.articles;

  return (
    <Layout data={data} jsonData={articles} location={location}>
      <Container
        maxWidth="xl"
        sx={{ alignItems: "center", justifyContent: "center" }}
      >
        <HomeHeroPage
          header={frontmatter.HeroTaglineDescription}
          cta={frontmatter.H01051}
          title={frontmatter.T0152}
          labelbutton={frontmatter.L0401[0]}
          helpernotice={frontmatter.H01047}
        />
        
        <LandingCta />

      </Container>
    </Layout>
  );
};

export default HomePage;

export const pageQuery = graphql`
  query HomePageQuery($id: String!) {
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
            da
            sv
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
        path
        sectionlabel
        plans {
          corporate {
            features
            name
            price
          }
          free {
            features
            name
            price
          }
          growth {
            features
            name
            price
          }
        }
        tables {
          button
          link
          header
          caption
          cta
          cta_link
          cta_button
          cta_caption
        }
        section1 {
          title
          description
        }
        section2 {
          title
          description
        }
        section3 {
          title
          description
        }
        T100
        B100
        F100
        T0152
        HeroTaglineDescription
        H01047
        H01051
        H0118 {
          A0117q
        }
        H01194
        L0401
      }
      fields {
        slug
      }
    }
  }
`;

export const Head = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  
  return (
    <SEO
      title={frontmatter.title}
      description={frontmatter.description}
      pathname={frontmatter.path}
    >
      <meta name="description" content={frontmatter.description} />
    </SEO>
  );
};