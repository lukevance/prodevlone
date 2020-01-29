import React, { Component } from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import { Box, Button } from 'grommet';
import {
  CaretNext,
  CaretPrevious
} from 'grommet-icons';


import Header from "./header";
import Sidebar from "./sidebar";
import Footer from "./footer";
import "./layout.css";

class Layout extends Component {
  state = {
    showSideBar: false,
  };

  toggleSidebar = () => this.setState(prevState => ({ showSideBar: !prevState.showSideBar}));

  render() {
    const {showSideBar} = this.state;
    const {children, size} = this.props;
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
          <div>
            <Header siteTitle={data.site.siteMetadata.title} />
            <Box direction='row' flex overflow={{horizontal: 'hidden'}} background={{color: 'light-purple'}}>
              <Sidebar
                size={size} 
                showSideBar={showSideBar}
                // toggleSidebar={this.toggleSidebar}
                />
                <Button
                  margin={{ top: "medium" }}
                  onClick={() => this.toggleSidebar()}
                  plain={true}
                  focusIndicator={false}
                  alignSelf="start"
                  icon={showSideBar
                      ? <CaretPrevious size='large' />
                      : <CaretNext size='large' />
                  }
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
                {children}
              </Box>
            </Box>
            <Footer />
          </div>
        )}
      />
    );
  }
};
  

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
