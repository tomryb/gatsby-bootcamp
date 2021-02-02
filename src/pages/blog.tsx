import React from "react"
import Layout from "../components/layout";
import { Link, graphql, useStaticQuery } from 'gatsby';
import Head from '../components/head';

const BlogPage = () => {

  //posty z repo

  //   const data = useStaticQuery(graphql`
  // query {
  //   allMarkdownRemark {
  //     edges {
  //       node {
  //         frontmatter {
  //           title
  //           date
  //         }
  //         fields {
  //           slug
  //         }
  //       }
  //     }
  //   }
  // }
  // `)

  //posty z contentful

  const data = useStaticQuery(graphql`
query {
  allContentfulBlogPost (
    sort: {
     fields: publishedDate,
      order:DESC
    }
  ) {
    edges {
      node {
        title
        slug
        publishedDate(formatString:"MMMM Do, YYYY")
      }
    }
  }
}
`)
  interface MarkdownInterface {
    title: string,
    data: string,
    node: any
  }

  return (

    //posty z repo

    //   <Layout>
    // <Head title="Blog"></Head>
    //   <h1>Blog</h1>
    //   <ol>
    //     {data.allMarkdownRemark.edges.map((edge: MarkdownInterface) => {
    //       return (
    //         <li>
    //           <Link to={`/blog/${edge.node.fields.slug}`}>
    //             <h2>{edge.node.frontmatter.title}</h2>
    //             <p>{edge.node.frontmatter.data}</p>
    //           </Link>
    //         </li>
    //       )
    //     })}
    //   </ol>
    // </Layout>

    //posty z contentful

    <Layout>
      <Head title="Blog"></Head>
      <h1>Blog</h1>
      <ol>
        {data.allContentfulBlogPost.edges.map((edge: MarkdownInterface) => {
          return (
            <li>
              <Link to={`/blog/${edge.node.slug}`}>
                <h2>{edge.node.title}</h2>
                <p>{edge.node.publishedDate}</p>
              </Link>
            </li>
          )
        })}
      </ol>
    </Layout>

  )
}

export default BlogPage;