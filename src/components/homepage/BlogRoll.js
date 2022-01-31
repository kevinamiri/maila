import { useState, useEffect } from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import PropTypes from "prop-types";
import { Link, graphql, StaticQuery } from "gatsby";
import { FormattedMessage } from "react-intl";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';



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

const BlogRoll = (props) => {
  const [url, setUrl] = useState("/en/blog/");

  useEffect(() => {
    setUrl(window.location.pathname);
  }, []);

  const data = props.data;
  const langKey = url.slice(1, 3);

  const { edges: posts } = switchData(data, langKey);

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItem: 'center',
      flexWrap: "wrap",
    }}>
      {posts &&
        posts.map(({ node: post }) => (
          <Box sx={{
            m: 1,
            pt: 2
          }} key={post.id}>
            <Card sx={{ maxWidth: 345 }}>
              <GatsbyImage image={post.frontmatter.image.childImageSharp.gatsbyImageData} alt="post image" />
              <CardContent>
                <Typography gutterBottom variant="h4" component="div">
                  <Button href={post.fields.slug} size="small">{post.frontmatter.title}</Button>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {post.excerpt}
                </Typography>
              </CardContent>
              <CardActions>
                <Typography variant="a" color="initial">
                  <Link to={post.fields.slug}>
                    <FormattedMessage id='K01' />
                  </Link>
                </Typography>
              </CardActions>
            </Card>
          </Box>
        ))}
    </Box>
  );
};

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export default (langKey) => (
  <StaticQuery
    query={graphql`query BlogRollQuery {
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
              gatsbyImageData(width: 500, layout: CONSTRAINED)
            }
          }
        }
      }
    }
  }
  fa: allMarkdownRemark(
    sort: {order: DESC, fields: [frontmatter___date]}
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
    render={(data) => <BlogRoll data={data} />}
  />
);




