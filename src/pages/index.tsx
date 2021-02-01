import React from "react";
import { Link } from 'gatsby';
import Layout from '../components/layout';
import '../styles/index.scss'
import { Col } from "react-bootstrap";

const IndexRoute = () => {
  return (
    <Layout>
      <Col><h1>Hello<span>dzbanie</span></h1></Col>
      <p>need a help <Link to="/contact-site">Contact me</Link></p>
    </Layout>
  )
}

export default IndexRoute;