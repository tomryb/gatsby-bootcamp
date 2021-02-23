import { Link } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"

const ContactSite = () => {
  return (
    <Layout>
      <Head title="Contact site"></Head>
      <h1>Contact</h1>
      <p>test</p>
      <Link to="https://www.google.com">Google</Link>
    </Layout>
  )
}

export default ContactSite
