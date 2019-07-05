/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import { Grommet, Box, Collapsible, Text } from 'grommet';

import Header from "./header";
import "./layout.css";

const theme = {
  global: {
    color: {
      'light-2': '#f5f5f5'
    },
    font: {
      family: 'Roboto',
      size: '14px',
      height: '20px',
    },
  },
};

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Grommet theme={theme}>
          <Header siteTitle={data.site.siteMetadata.title} />
          <Box direction='row' flex overflow={{horizontal: 'hidden'}}>

          {/* <div
            style={{
              margin: `0 auto`,
              maxWidth: 960,
              padding: `0px 1.0875rem 1.45rem`,
              paddingTop: 0,
            }}
          > */}
            <Collapsible direction="horizontal" open={true}>
                <Box
                  flex
                  width="medium"
                  background="light-2"
                  pad="small"
                  elevation="small"
                >
                  <Text size="xlarge">Sidebar</Text>
                </Box>
              </Collapsible>
            {/* <main> */}
              <Box flex align="center" justify="center">
                {children}
              </Box>
            {/* </main> */}
            <footer>
              © {new Date().getFullYear()}, Built with
              {` `}
              <a href="https://www.gatsbyjs.org">Gatsby</a>
            </footer>
          {/* </div> */}
          </Box>
        </Grommet>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
