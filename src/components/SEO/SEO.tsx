import React from "react";
import Helmet from "react-helmet";
import { StaticQuery, graphql } from "gatsby";
import SchemaOrg from "./SchemaOrg";

interface frontmatter {
  title: string;
  description: string;
  date: string;
  image: string;
  slug: string;
}
interface SEOProps {
  isBlogPost?: boolean;
  frontmatter?: frontmatter;
  postImage?: string;
  langKey?: string;
}

const SEO = ({ frontmatter, postImage, isBlogPost, langKey }: SEOProps) => (
  <StaticQuery
    query={graphql`
      {
        site {
          siteMetadata {
            title
            description
            siteUrl
            image
            author {
              name
            }
            organization {
              name
              url
              logo
            }
            social {
              twitter
            }
          }
        }
      }
    `}
    render={({ site: { siteMetadata: seo } }) => {
      const title = frontmatter.title || seo.title;
      const description = frontmatter.description || seo.description;
      const image = postImage ? `${seo.siteUrl}${postImage}` : seo.image;

      const url = frontmatter.slug
        ? `${seo.siteUrl}/${frontmatter.slug}/`
        : seo.siteUrl;
      const datePublished = frontmatter.date;

      return (
        <React.Fragment>
          <Helmet
            key='app-head'
            defaultTitle={title}
            titleTemplate={`%s | ${seo.title}`}
          >
            <html lang={langKey} />
            <title>{title}</title>
            <meta name='description' content={description} />
            <meta name='author' content={seo.author.name} />
            <meta name='image' content={image} />
            <meta property='og:url' content={url} />
            {isBlogPost ? <meta property='og:type' content='article' /> : null}
            <link rel='canonical' href={seo.siteUrl} />
            <meta property='og:title' content={title} />
            <meta property='og:description' content={description} />
            <meta property='og:site_name' content={title} />
            <meta property='og:image' content={image} />
            {image ? <meta property='og:image' content={image} /> : ""}
            {/* Twitter Card tags */}
            <meta name='twitter:card' content='summary_large_image' />
            <meta name='twitter:site' content={seo.social.twitter} />
            <meta name='twitter:creator' content={seo.social.twitter} />
            <meta name='twitter:title' content={title} />
            <meta name='twitter:description' content={description} />
            <meta name='twitter:image' content={image} />
          </Helmet>
          <SchemaOrg
            isBlogPost={isBlogPost ? true : false}
            url={url}
            title={title}
            image={image}
            description={description}
            author={seo.author.name}
            datePublished={datePublished}
            siteUrl={seo.siteUrl}
            organization={seo.organization}
            defaultTitle={seo.title}
          />
        </React.Fragment>
      );
    }}
  />
);

export default SEO;
