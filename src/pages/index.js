import * as React from 'react'
import { graphql, Link } from 'gatsby'
import styled from 'styled-components'
// import { StaticImage } from 'gatsby-plugin-image'

import Layout from '../components/layout'
import Seo from '../components/seo'

const BlogTitle = styled.h3`
  margin-bottom: 20px;
  color: blue;
`

const BlogLink = styled(Link)`
  text-decoration: none;
`

const IndexPage = ({ data }) => {
  // console.log(data)
  return (
    <Layout>
      <Seo title="Home" />
      <div>
        <h1>Sergei's Thoughts</h1>
        <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <BlogLink to={node.fields.slug}>
              <BlogTitle>
                {node.frontmatter.title} - {node.frontmatter.date}
              </BlogTitle>
            </BlogLink>
            <p>{node.excerpt}</p>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export default IndexPage

// Gatsby automatically passes data prop
// to IndexPage when we export query
export const query = graphql`
  {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            date
            description
            title
          }
          fields {
            slug
          }
          excerpt
        }
      }
      totalCount
    }
  }
`
