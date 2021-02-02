import React from "react"
import Layout from "../components/layout";
import { graphql, useStaticQuery } from 'gatsby';

const BlogPage = () => {

  const data = useStaticQuery(graphql`
query {
  allMarkdownRemark {
    edges {
      node {
        frontmatter {
          title
          data
        }
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
    <Layout>
      <h1>Blog</h1>
      <ol>
        {data.allMarkdownRemark.edges.map((edge: MarkdownInterface) => {
          return (
            <li>
              <h2>{edge.node.frontmatter.title}</h2>
              <p>{edge.node.frontmatter.data}</p>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default BlogPage;