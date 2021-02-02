import React from "react";
import { Link } from 'gatsby';
import Layout from '../components/layout';
import '../styles/index.scss'
import { Col } from "react-bootstrap";
import Head from '../components/head';

const IndexRoute = () => {
  return (
    <Layout>
      <Head title="Home sweet home"></Head>
      <Col><h1>Hello<span>dzbanie</span></h1></Col>
      <p>need a help <Link to="/contact-site">Contact me</Link></p>
    </Layout>
  )
}

export default IndexRoute;