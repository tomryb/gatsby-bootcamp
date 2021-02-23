import React from "react"
import { Helmet } from "react-helmet"
import { Link, graphql, useStaticQuery } from "gatsby"

interface HeadInterface {
  title: string
}

const Head = ({ title }: HeadInterface) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return <Helmet title={`${title} | ${data.site.siteMetadata.title}`}></Helmet>
}

export default Head
