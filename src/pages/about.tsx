import { Link } from "gatsby";
import React from "react"
import Layout from "../components/layout";
import { graphql, useStaticQuery } from 'gatsby';

const AboutSite = () => {

  const data = useStaticQuery(graphql`
  query {
    site {
      siteMetadata {
        author
      }
    }
  }
  `)

  return (
    <>
      <Layout>
        <h1>About {data.site.siteMetadata.author}</h1>
        <Link to="/contact-site">Write to me</Link>
      </Layout>
    </>
  )
}

export default AboutSite;