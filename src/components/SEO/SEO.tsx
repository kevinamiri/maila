import useSiteMetadata from "hooks/useSiteMetadata"
import React from "react"

export const SEO = ({ title, description, pathname, children }) => {
  const { title: defaultTitle, description: defaultDescription, image, siteUrl, twitterUsername, author } = useSiteMetadata()
  const postTitle = `${title} | ${defaultTitle}`
  console.log(postTitle)
  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}/${image}`,
    url: `${siteUrl}${pathname}`,
    twitterUsername,
  }

  return (
    <>
      <title>{postTitle}</title>
      {postTitle && <meta name="title" content={postTitle} />}
      {seo?.description && <meta name="description" content={seo.description} />}
      {author?.name && <meta name="author" content={author.name} />}
      {seo?.description && <meta name="description" content={seo.description} />}
      {seo?.image && <meta name="image" content={seo.image} />}
      <meta name="twitter:card" content="summary_large_image" />
      {seo?.title && <meta name="twitter:title" content={seo.title} />}
      {seo?.url && <meta name="twitter:url" content={seo.url} />}
      {seo?.description && <meta name="twitter:description" content={seo.description} />}
      {seo?.image && <meta name="twitter:image" content={seo.image} />}
      {seo?.twitterUsername && <meta name="twitter:creator" content={seo.twitterUsername} />}
      {children}
    </>
  )
}