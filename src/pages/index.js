import React from "react";
import { 
  Box, 
  Grommet,
  Heading, 
  Text, 
  Image,
  ResponsiveContext 
} from "grommet";
import {Phone} from "grommet-icons";

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
            pad={{ top: 'xlarge', bottom: 'medium' }}
            // height='medium'
          >
            <Heading>Hi, I'm Luke</Heading>
            <Text size='large'>I am a failed founder, after-hours developer and day-time product manager.
          In my free time I like to run, garden and watch sci-fi movies.</Text>
          </Box>
          <Box 
            height="medium" 
            // width="large"
            fill="horizontal"
          >
            <Image
              fit="cover"
              src={salkantay}
            />
          </Box>
          <BioSection />
          <Box pad={{top: "medium"}}>
            <Heading>Contact</Heading>
            <Box direction="row">
              <Phone size="xlarge"/>
              <Box pad={{left: "medium"}}>
                <Text size="xlarge">
                  Text LukeBot +1 (720)-123-0987
                </Text>
                <Text>
                  You can use LukeBot to pass a message along to me, schedule a coffee meeting, or even get free fantasy football advice! 
                </Text>
              </Box>
            </Box>
          </Box>
        </Layout>
        )}
      </ResponsiveContext.Consumer>
    </Grommet>
  )
};

export default IndexPage;
