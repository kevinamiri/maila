import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout/Layout";
import CardFeatureBlock from "../components/landings/CardFeatureBlock";
import AccordionBlock from "../components/landings/AccordionBlock";
import HomeHeroPage from "../components/landings/HomeHeroPage";
import _ from "lodash";
import LandingsFeature from "../components/landings/landings-feature";
import Container from "@mui/material/Container";
import WithIllustrationFeatures from "../components/landings/WithIllustrationFeatures";
import { Pricing } from "../components/landings/pricing";
import Email from "components/landings/email";

const HomePage = (props) => {
  const data = props.data;
  const dataMarkdown = props.data.markdownRemark;
  const jsonData = data.allArticlesJson.edges[0].node.articles;
  const langKey = dataMarkdown.frontmatter.lang;
  const features = [
    dataMarkdown.frontmatter.section1,
    dataMarkdown.frontmatter.section2,
    dataMarkdown.frontmatter.section3,
  ];
  return (
    <Layout data={props.data} jsonData={jsonData} location={props.location}>
      <Container
        maxWidth='xl'
        sx={{
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <HomeHeroPage
          header={dataMarkdown.frontmatter.HeroTaglineDescription}
          cta={dataMarkdown.frontmatter.H01051}
          title={dataMarkdown.frontmatter.T0152}
          labelbutton={dataMarkdown.frontmatter.L0401[0]}
          helpernotice={dataMarkdown.frontmatter.H01047}
        />
        <Email />
        <LandingsFeature
          headerRight={dataMarkdown.frontmatter.H01194[0]}
          descriptionRight={dataMarkdown.frontmatter.H01194[1]}
          headerLeft={dataMarkdown.frontmatter.H01194[2]}
          descriptionLeft={dataMarkdown.frontmatter.H01194[3]}
        />
        <CardFeatureBlock
          titles={dataMarkdown.frontmatter.T100}
          bodys={dataMarkdown.frontmatter.B100}
        />

        <WithIllustrationFeatures
          features={features}
          sectionlabel={dataMarkdown.frontmatter.sectionlabel}
        />
        <Pricing
          tables={dataMarkdown.frontmatter.tables}
          plans={dataMarkdown.frontmatter.plans}
        />
        <AccordionBlock
          questions={_.chunk(dataMarkdown.frontmatter.H0118.A0117q, 2)}
        />
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
