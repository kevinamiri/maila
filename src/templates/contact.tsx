// ─── Imports ──────────────────────────────────────────────
import React, { memo, FC } from 'react'
import { graphql, PageProps } from 'gatsby'

// ─── MUI ─────────────────────────────────────────────────
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'

// ─── Components ───────────────────────────────────────────
import Layout from '../components/layout/Layout'
import TagList from '../components/landings/modules/TagList'
import Content from '../components/homepage/Content'
import ContactMe from '../components/homepage/contact-me-container'
import { SEO } from '../components/SEO/SEO'

// ─── Types ───────────────────────────────────────────────
interface ContactTemplateProps {
  content: string
  contentComponent?: FC<{ content: string }>
  tags: string[]
  langKey: string
}

interface ContactPageData {
  markdownRemark: {
    html: string
    frontmatter: {
      id: string
      title: string
      description: string
      tags?: string[]
      lang: string
      path?: string
    }
    fields: {
      slug: string
    }
  }
  site: {
    siteMetadata: {
      title: string
      languages: {
        defaultLangKey: string
        langs: string[]
      }
    }
  }
}

interface HeadProps {
  data: {
    markdownRemark: {
      frontmatter: {
        title: string
        description: string
        path?: string
      }
    }
  }
}

// ─── Template ────────────────────────────────────────────
export const ContactTemplate: FC<ContactTemplateProps> = ({
  content,
  contentComponent: PageContent = Content,
  tags,
  langKey,
}) => (
  <Box sx={{ mt: 8 }}>
    <Container sx={{ mt: 5 }}>
      <PageContent content={content} />
      <TagList tags={tags} langKey={langKey} />
    </Container>
  </Box>
)

// ─── Page ────────────────────────────────────────────────
type ContactPageProps = PageProps<ContactPageData>

const ContactPage: FC<ContactPageProps> = ({ data, location }) => {
  const { markdownRemark } = data
  const langKey = markdownRemark.frontmatter.lang

  return (
    <Layout data={data} location={location}>
      <Container>
        <ContactMe langkey={langKey} />
      </Container>
    </Layout>
  )
}

export default memo(ContactPage)

// ─── Query ───────────────────────────────────────────────
export const pageQuery = graphql`
  query ContactPageQuery($id: String!) {
    site {
      siteMetadata {
        title
        languages {
          defaultLangKey
          langs
        }
      }
    }
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        id
        title
        description
        tags
        lang
        path
      }
      fields {
        slug
      }
    }
  }
`

// ─── Head ────────────────────────────────────────────────
export const Head: FC<HeadProps> = ({ data }) => {
  const { markdownRemark: post } = data
  return (
    <SEO
      title={post.frontmatter.title}
      description={post.frontmatter.description}
      pathname={post.frontmatter.path}
    >
      <meta name="description" content={post.frontmatter.description} />
    </SEO>
  )
}