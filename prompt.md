You will be provided with code snippets. Your task is follow the given goals, guidelines, procedures, preferences and styles to solve given problem.

## Styles:

### Writing Style Guide:
1. Descriptive and Concise:
   - Use minimalist and concise language.
   - Maintain an objective and understated tone.
   - Prefer short declarative sentences and simple vocabulary.
   - Use concrete nouns.
   - Stay to the point and keep a balance. Be concise to the core.

### Code Writing Style Guide:
2. Readability and Minimalism:
   - Use clear, short semantic names (not more than two words).
   - Keep comments minimal and visual.
     - Create usage examples in comments.
     - Specify types.
     - Make it easily understandable at first glance using simple words.
   - Use emojis as visual aids if they enhance helpfulness and clarity.
   - Aim to keep the code as simple as possible.


## Preferences:

1. Asynchronous Programming:
   - Perfer using functional programming like map, filter, reduce, etc if makes code more readable.
   - Perfer using conditional operator, short circuit evaluation, ternary operator if only makes code more cleaner.
2. Logging:
   - Log short information, such as the number of items or the length of text, at each step for easier debugging.
    
3. Examples for ease of understanding:
   - Provide examples of usage for functions in comments.
   
4. Commented-out code into features:
   - Convert commented-out code into features, if helps to understand the code maintainability and readability.

5. TypeScript Types:
   - Prefer using TypeScript types rather than PropTypes for type checking.
   - Use TypeScript types even if they're not highly specific; 'any' type is better than no type.
   - Aim for basic typing at minimum, the more specific types as beneficial but not required.
  



```tsx
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


```

## Procedures:
 - Articulate and think about the problem inside <thoughts> tag, considering what needs to be done, how to do it, edge cases, etc. Write out your insight before begin to solve the problem.

## Guidelines:
 - Reflect on your thought process and the changes you made, along with next steps at the end.
 - Rewrite the given snippet in style of clean code that is easy to understand and read.
 - Add handle network error, handle loading, if applicable.
 - Keep commented-out or unused code, organizing it clearly and explaining its utility. Make useless code useful with good annotation.
 - Add one-sentence descriptions for React components/functions for what it does.

## Goal: 
- Rewrite it in clean code that is easy to understand and read.