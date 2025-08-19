import React, { useEffect, useState } from "react";
import AuthenticationLayout from "../components/layout/AuthenticationLayout";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Container from "@mui/material/Container";

import { IntlProvider } from "react-intl";
import useSettings from "../hooks/useSettings";

export const WrapLayout = ({ children }) => {
  const { settings } = useSettings();
  const i18nMessages = require(`../data/messages/${settings.lang}`);
  return (
    <IntlProvider
      locale={settings.lang}
      messages={i18nMessages}
      textComponent={React.Fragment}
    >
      {children}
    </IntlProvider>
  );
};

const PageStatus = () => {
  const [isMount, setMount] = useState(false);

  useEffect(() => {
    setMount(true);
  }, []);

  if (!isMount) {
    return <div>loading</div>;
  }

  return <div>Page Not Found</div>;
};

const NotFoundPage = ({ children }) => {
  return (
    <WrapLayout>
      <AuthenticationLayout>
        {!children && (
          <Container>
            <PageStatus />
          </Container>
        )}

        {children}
      </AuthenticationLayout>
    </WrapLayout>
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
            zh
            es
            de
            ja
            fr
            pt
            ko
            ar
            it
            hi
            id
            vi
            tr
            th
            pl
            sv
            no
            da
            fi
            nl
            ru
            cs
            ha
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
