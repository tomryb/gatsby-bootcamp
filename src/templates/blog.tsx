import React from 'react';
import Layout from '../components/layout';
import { graphql } from 'gatsby';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Head from '../components/head';

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

  const options = {
    renderNode: {
      "embedded-asset-block": (node: any) => {
        const alt = node.data.target.fields.title['en-US'];
        const url = node.data.target.fields.file['en-US'].url;
        return <img alt={alt} src={url}></img>
      }
    }
  }

  return (
    <Layout>
      <Head title={props.data.contentfulBlogPost.title}></Head>
      {/* <h1>{props.data.markdownRemark.frontmatter.title}</h1>
      <p>{props.data.markdownRemark.frontmatter.date}</p>
      <div dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html}}></div> */}
      <h1>{props.data.contentfulBlogPost.title}</h1>
      <p>{props.data.contentfulBlogPost.publishedDate}</p>
      {documentToReactComponents(props.data.contentfulBlogPost.body.json, options)}
    </Layout>
  )
}

export default Blog;