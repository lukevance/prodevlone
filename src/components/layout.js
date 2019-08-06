/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React, { Component } from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import { Grommet, Box, ResponsiveContext, Tabs, Tab } from 'grommet';

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
            <ResponsiveContext.Consumer>
              {size => (
                <div>
                  <Header siteTitle={data.site.siteMetadata.title} />
                  <Box direction='row' flex overflow={{horizontal: 'hidden'}}>
                    <Sidebar
                      size={size} 
                      showSideBar={showSideBar}
                      toggleSidebar={this.toggleSidebar}
                      />
                    <Box 
                      flex 
                      align="center" 
                      justify="start"
                      style={{
                        margin: `0 auto`,
                        maxWidth: 960,
                        padding: `0px 1.0875rem 1.45rem`,
                        paddingTop: `1rem`,
                      }}
                    >
                      <Box direction='row'>
                        <Tabs>
                        <Tab title="tab 1">
                          <Box pad="medium">One</Box>
                        </Tab>
                        <Tab title="tab 2">
                          <Box pad="medium">Two</Box>
                        </Tab>
                      </Tabs>
                      </Box>
                      {children}
                    </Box>
                  </Box>
                </div>
              )}
            </ResponsiveContext.Consumer>
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
