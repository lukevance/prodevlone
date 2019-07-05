/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React, { Component } from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import { Grommet, Box, Collapsible, Text, Layer } from 'grommet';
import { CaretNext, CaretPrevious } from 'grommet-icons';

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

// const Layout = ({ children }) => (
class Layout extends Component {
  state = {
    showSideBar: false,
  };

  render() {
    const {showSideBar} = this.state;
    const {children} = this.props;
    return (
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
          <Grommet theme={theme}>
            <Header siteTitle={data.site.siteMetadata.title} />
            
            <Box direction='row' flex overflow={{horizontal: 'hidden'}}>
              <Box direction='row'>
                <Collapsible direction="horizontal" open={showSideBar}>
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
                {showSideBar 
                ? <CaretPrevious onClick={() => this.setState(prevState => ({ showSideBar: !prevState.showSideBar }))}/>
                : <CaretNext onClick={() => this.setState(prevState => ({ showSideBar: !prevState.showSideBar }))}/>
                }
              </Box>
              <Box 
                flex 
                align="center" 
                justify="center" 
                style={{
                  margin: `0 auto`,
                  maxWidth: 960,
                  padding: `0px 1.0875rem 1.45rem`,
                  paddingTop: 0,
                }}
              >
                {children}
              </Box>
            </Box>
          </Grommet>
        )}
      />
    );
  }
}
  

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
