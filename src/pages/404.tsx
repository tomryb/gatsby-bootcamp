import { Link } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"

const NotFound = () => {
  return (
    <Layout>
      <Head title="Not found"></Head>
      <h1>Page not found</h1>
      <p>
        <Link to="/">Go home u drunk</Link>
      </p>
    </Layout>
  )
}

export default NotFound
