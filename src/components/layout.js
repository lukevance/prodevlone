/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React, { Component } from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import { Grommet, Box } from 'grommet';

import Header from "./header";
import Sidebar from "./sidebar";
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

class Layout extends Component {
  state = {
    showSideBar: false,
  };

  toggleSidebar = () => this.setState(prevState => ({ showSideBar: !prevState.showSideBar}));

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
              <Sidebar 
                showSideBar={showSideBar}
                toggleSidebar={this.toggleSidebar}
                />
              <Box 
                flex 
                align="center" 
                justify="center"
                style={{
                  margin: `0 auto`,
                  maxWidth: 960,
                  padding: `0px 1.0875rem 1.45rem`,
                  paddingTop: `1rem`,
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
