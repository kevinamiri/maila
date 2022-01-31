import React, { useEffect, useState } from 'react';
import AuthenticationLayout from "../components/layout/AuthenticationLayout";
import { FormattedMessage } from "react-intl";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { Container, Typography } from "@mui/material"


const PageStatus = () => {
  const [isMount, setMount] = useState(false);

  useEffect(() => {
    setMount(true);
  }, [])

  if (!isMount) {
    return (
      <div>loading</div>
    )
  }

  return (
    <div>Page Not Found</div>
  )


}


const NotFoundPage = ({ children }) => {
  // const jsonData = data.allArticlesJson.edges[0].node.articles;
  return (
    <AuthenticationLayout>
      {!children && <Container>
        <PageStatus />
      </Container>}

      {children}
    </AuthenticationLayout>
  );
};

NotFoundPage.propTypes = {
  data: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

export default NotFoundPage;

export const pageQuery = graphql`
  query NotFoundPageQuery {
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
            fa
          }
        }
      }
    }
    markdownRemark {
      html
      frontmatter {
        id
        title
      }
      fields {
        slug
      }
    }
  }
`;
