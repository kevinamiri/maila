import React, { useState, useEffect } from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import PropTypes from "prop-types";
import { Link, graphql, StaticQuery } from "gatsby";
import { FormattedMessage } from "react-intl";

const switchData = (data, langKey) => {
  var posts;
  switch (langKey) {
    case "en":
      return (posts = data.en);
      break;
    case "fa":
      return (posts = data.fa);
      break;
    default:
      return " ";
  }
  return posts;
};

const LastNewsRoll = (props) => {
  const [url, setUrl] = useState("/en/blog/");

  useEffect(() => {
    setUrl(window.location.pathname);
  }, []);

  const data = props.data;
  const langKey = url.slice(1, 3);

  const { edges: posts } = switchData(data, langKey);

  return (
    <section className='section bg-gray'>
      <div className='container'>
        <h2 className='text-center'><FormattedMessage id='LP01' /></h2>
        <div className='row gap-y mt-8'>
          {posts &&
            posts.map(({ node: post }, index) => (
              <div className='col-md-6 col-lg-4' key={index}>
                <div className='card border hover-shadow-6 d-block'>
                  <div className='card-body hover-shadow-2 rounded-md'>
                    <h5 className='card-title fw-500'>
                      <Link
                        className='title has-text-primary is-size-4'
                        to={post.fields.slug}
                      >
                        {post.frontmatter.title}
                      </Link>
                    </h5>
                    <p>{post.excerpt}</p>
                    <Link className='fw-600 fs-12' to={post.fields.slug}>
                      <FormattedMessage id='keepreading' />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
        </div>
        <div className='d-flex justify-content-center mt-5'>
          <p className='text-center'>
            <button type='button' className='btn btn-outline-secondary'>
              <Link to={"/" + langKey + "/blog/"}><FormattedMessage id='BP02' /></Link>
            </button>
          </p>
        </div>
      </div>
    </section>
  );
};

LastNewsRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export default (langKey) => (
  <StaticQuery
    query={graphql`query LastNewsRollQuery {
  site {
    siteMetadata {
      title
      languages {
        langs
        defaultLangKey
      }
    }
  }
  en: allMarkdownRemark(
    sort: {order: DESC, fields: [frontmatter___date]}
    limit: 3
    filter: {frontmatter: {templateKey: {eq: "blog-post"}, lang: {regex: "/(en|any)/"}}}
  ) {
    edges {
      node {
        excerpt(pruneLength: 300)
        id
        fields {
          slug
        }
        frontmatter {
          title
          templateKey
          date
          lang
          image {
            childImageSharp {
              gatsbyImageData(width: 500, height: 450, layout: CONSTRAINED)
            }
          }
        }
      }
    }
  }
  fa: allMarkdownRemark(
    sort: {order: DESC, fields: [frontmatter___date]}
    limit: 3
    filter: {frontmatter: {templateKey: {eq: "blog-post"}, lang: {regex: "/(fa|any)/"}}}
  ) {
    edges {
      node {
        excerpt(truncate: true, pruneLength: 300)
        id
        fields {
          slug
        }
        frontmatter {
          title
          templateKey
          date
          lang
          image {
            childImageSharp {
              gatsbyImageData(width: 500, height: 450, layout: CONSTRAINED)
            }
          }
        }
      }
    }
  }
}
`}
    render={(data) => <LastNewsRoll data={data} />}
  />
);
