import { Link } from "gatsby"
import React from "react"
import Layout from "../components/layout"


const NotFound = () => {
  return (
    <Layout>
      <h1>Page not found</h1>
      <p><Link to="/">Go home u drunk</Link></p>
    </Layout>
  )
}

export default NotFound