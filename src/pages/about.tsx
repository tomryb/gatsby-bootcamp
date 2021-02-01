import { Link } from "gatsby";
import React from "react"
import Layout from "../components/layout";

const AboutSite = () => {
  return (
    <>
      <Layout>
        <h1>About</h1>
        <Link to="/contact-site">Write to me</Link>
      </Layout>
    </>
  )
}

export default AboutSite;