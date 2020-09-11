import React from "react";
import { Link } from "gatsby";
import { Image } from "grommet";

import waller from "../images/darren-waller.jpg";

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="file dir" />
    <h1>Just a place to keep stuff</h1>
    <Link to="/">Go back to the homepage</Link>
    <Image src={waller}></Image>
  </Layout>
)

export default SecondPage
