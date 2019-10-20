import React from "react";
import { 
  Box, 
  Grommet,
  Heading, 
  Text, 
  Image,
  ResponsiveContext 
} from "grommet";

import Layout from "../components/layout";
import SEO from "../components/seo";
import BioSection from "../components/bio-section";
import salkantay from "../images/luke-salkantay.jpg";

const theme = {
  global: {
    color: {
      'light-2': '#f5f5f5',
      'light-purple': '#A079C8'
    },
    font: {
      family: 'Roboto',
      size: '14px',
      height: '20px',
    },
  },
  main: {
    align: 'left'
  }
};

const IndexPage = () => {
  return (
    <Grommet theme={theme}>
      <ResponsiveContext.Consumer>
        {size => (
          <Layout size={size}>
          <SEO title="Home" />
          <Box
            fill="horizontal"
            align={theme.main.align}
            pad={{ top: 'xlarge' }}
            height='medium'
          >
            <Heading>Hi, I'm Luke</Heading>
            <Text size='large'>I am a failed founder, after-hours developer and day-time product manager.
          In my free time I like to run, garden and watch sci-fi movies.</Text>
          </Box>
          <Box height="medium" width="large">
            <Image
              fit="cover"
              src={salkantay}
            />
          </Box>
          <BioSection />
        </Layout>
        )}
      </ResponsiveContext.Consumer>
    </Grommet>
  )
};

export default IndexPage;
