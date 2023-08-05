import React from "react";
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

export const Head = ({
  frontmatter,
  postImage,
  isBlogPost,
  langKey,
}: SEOProps) => (
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
          }
        }
      }
    `}
    render={({ site: { siteMetadata: seo } }) => {
      const title = frontmatter.title || seo.title;
      const description = frontmatter.description || seo.description;
      const image = postImage ? `${seo.siteUrl}${postImage}` : seo.image;
      const url = frontmatter.slug
        ? `${seo.siteUrl}${frontmatter.slug}/`
        : seo.siteUrl;
      const datePublished = frontmatter.date;

      return (
        <>
          <html lang={langKey} />
          <title>{title}</title>
          <meta name='description' content={description} />
          <meta name='author' content={seo.author.name} />
          {image ? <meta name='image' content={image} /> : ""}
          <meta property='og:url' content={url} />
          {isBlogPost ? <meta property='og:type' content='article' /> : null}
          <meta property='og:title' content={title} />
          <meta property='og:description' content={description} />
          <meta property='og:site_name' content={title} />
          {image ? <meta property='og:image' content={image} /> : ""}
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
        </>
      );
    }}
  />
);
