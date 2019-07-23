import React from "react";
import { Link } from "gatsby";
import { Heading, Text } from "grommet";

import Layout from "../components/layout";
import SEO from "../components/seo";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Heading>Welcome</Heading>
    <Text size='large'>I am a failed founder, after-hours developer and day-time product manager. 
      In my free time I like to run, garden and watch sci-fi movies.</Text>
    
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
);

export default IndexPage;
