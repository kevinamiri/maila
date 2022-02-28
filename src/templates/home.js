import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout/Layout";
import SEO from "../components/SEO/SEO";
import CardFeatureBlock from '../components/landings/CardFeatureBlock'
import HomeBlock03 from '../components/landings/HomeBlock03'
import AccordionBlock from '../components/landings/AccordionBlock'
import HomeHeroPage from '../components/landings/HomeHeroPage'
import _ from "lodash";


const HomePage = (props) => {

  let data;
  let dataMarkdown = [];
  if (props.data !== null) {
    dataMarkdown = props.data.markdownRemark;
    data = props.data;
  }
  const jsonData = data.allArticlesJson.edges[0].node.articles;
  const langKey = dataMarkdown.frontmatter.lang;
  return (
    <Layout
      data={props.data}
      jsonData={jsonData}
      location={props.location}
    >

      <HomeHeroPage header={dataMarkdown.frontmatter.H0121} cta={dataMarkdown.frontmatter.H01051} title={dataMarkdown.frontmatter.T0152} labelbutton={dataMarkdown.frontmatter.L0401[0]} helpernotice={dataMarkdown.frontmatter.H01047} />
      <CardFeatureBlock titles={dataMarkdown.frontmatter.T100} bodys={dataMarkdown.frontmatter.B100} />
      <HomeBlock03
        langKey={langKey}
        list={_.chunk(dataMarkdown.frontmatter.F100, 2)}
      />
      <AccordionBlock questions={_.chunk(dataMarkdown.frontmatter.H0118.A0117q, 2)} />
    </Layout>
  )
}

export default HomePage;

export const pageQuery = graphql`query HomePageQuery($id: String!) {
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
          da
          sv
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
      T100
      B100
      F100
      image {
        childImageSharp {
          gatsbyImageData(width: 248, quality: 100, layout: CONSTRAINED)
        }
      }
      T0152
      H0121
      H01047
      H01051
      H0118 {
        A0117q
        H01194
      }
      L0401
    }
    fields {
      slug
    }
  }
}
`;
