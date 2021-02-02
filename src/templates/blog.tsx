import React from 'react';
import Layout from '../components/layout';
import { graphql } from 'gatsby';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

// do wyświetlania postów z repo

// export const query = graphql`
// query (
//   $slug: String!
// ) {
//   markdownRemark (
//     fields: {
//       slug: {
//         eq: $slug
//       }
//     }
//   ) {
//     frontmatter {
//       title
//       date
//     }
//     html
//   }
// }`

export const query = graphql`
query($slug: String!) {
  contentfulBlogPost(slug: { eq: $slug }) {
    title
    publishedDate(formatString: "MMMM Do, YYYY")
    body {
      json
    }
  }
}
`

const Blog = (props: any) => {
  return (
    <Layout>
      {/* <h1>{props.data.markdownRemark.frontmatter.title}</h1>
      <p>{props.data.markdownRemark.frontmatter.date}</p>
      <div dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html}}></div> */}
      <h1>{props.data.contentfulBlogPost.title}</h1>
      <p>{props.data.contentfulBlogPost.publishedDate}</p>
      {documentToReactComponents(props.data.contentfulBlogPost.body.json)}
    </Layout>
  )
}

export default Blog;