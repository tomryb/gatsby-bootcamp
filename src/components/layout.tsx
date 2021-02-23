import React from "react"
import Header from "./header"
import Footer from "./footer"
import { graphql, useStaticQuery } from "gatsby"

const Layout = (props: { children: React.ReactNode }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div>
      <h1>{data.site.siteMetadata.title}</h1>
      <Header></Header>
      {props.children}
      <Footer></Footer>
    </div>
  )
}

export default Layout
