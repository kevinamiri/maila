import React from "react";
import { StaticQuery, graphql } from "gatsby";
import SchemaOrg from "./SchemaOrg";

// Define types for better type safety
type Frontmatter = {
  title: string;
  description: string;
  date: string;
  image: string;
  slug: string;
};

type SEOProps = {
  isBlogPost?: boolean;
  frontmatter?: Frontmatter;
  postImage?: string;
  langKey?: string;
};

type SiteMetadata = {
  title: string;
  description: string;
  siteUrl: string;
  image: string;
  author: { name: string };
  organization: { name: string; url: string; logo: string };
};

// SEO component for optimizing meta tags and schema.org data
export const Head: React.FC<SEOProps> = ({ 
  frontmatter = {
    title: '',
    description: '',
    date: '',
    image: '',
    slug: '',
  }, 
  postImage, 
  isBlogPost, 
  langKey 
}) => (
  <StaticQuery
    query={graphql`
      {
        site {
          siteMetadata {
            title
            description
            siteUrl
            image
            author { name }
            organization { name url logo }
          }
        }
      }
    `}
    render={(data: { site: { siteMetadata: SiteMetadata } }) => {
      const seo = data.site.siteMetadata;
      const title = frontmatter.title || seo.title;
      const description = frontmatter.description || seo.description;
      const image = postImage ? `${seo.siteUrl}${postImage}` : seo.image;
      const url = frontmatter.slug ? `${seo.siteUrl}${frontmatter.slug}/` : seo.siteUrl;

      return (
        <>
          <html lang={langKey} />
          <title>{title}</title>
          <meta name="description" content={description} />
          <meta name="author" content={seo.author.name} />
          {image && <meta name="image" content={image} />}
          <meta property="og:url" content={url} />
          {isBlogPost && <meta property="og:type" content="article" />}
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta property="og:site_name" content={title} />
          {image && <meta property="og:image" content={image} />}
          <SchemaOrg
            isBlogPost={!!isBlogPost}
            url={url}
            title={title}
            image={image}
            description={description}
            author={{ name: seo.author.name }}
            datePublished={frontmatter.date}
            siteUrl={seo.siteUrl}
            organization={seo.organization}
            defaultTitle={seo.title}
          />
        </>
      );
    }}
  />
);

// Export the Head component directly
export default Head;

// Usage example:
// <SEO frontmatter={post.frontmatter} postImage={post.image} isBlogPost langKey="en" />