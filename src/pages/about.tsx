import { Link } from "gatsby";
import React from "react"
import Footer from "../components/footer";

const AboutSite = () => {
  return (
    <>
      <h1>About</h1>
      <Link to="/contact-site">Write to me</Link>
      <Footer></Footer>
    </>
  )
}

export default AboutSite;