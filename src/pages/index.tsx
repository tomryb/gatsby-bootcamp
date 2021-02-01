import React from "react";
import { Link } from 'gatsby';
import Footer from "../components/footer";
import Header from '../components/header';

const IndexRoute = () => {
  return (
    <>
      <Header></Header>
      <h1>Hello</h1>
      <p>need a help <Link to="/contact-site">Contact me</Link></p>
      <Footer></Footer>
    </>
  )
}

export default IndexRoute;