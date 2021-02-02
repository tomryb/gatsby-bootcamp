import React from "react"
import Layout from "../components/layout";
import { Link, graphql, useStaticQuery } from 'gatsby';

const BlogPage = () => {

  const data = useStaticQuery(graphql`
query {
  allMarkdownRemark {
    edges {
      node {
        frontmatter {
          title
          date
        }
        fields {
          slug
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
              <Link to={`/blog/${edge.node.fields.slug}`}>
                <h2>{edge.node.frontmatter.title}</h2>
                <p>{edge.node.frontmatter.data}</p>
              </Link>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default BlogPage;