import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import { 
  Box, 
  Button,
  Heading, 
  Layer,
  ResponsiveContext
 } from "grommet";
import { Menu as MenuIcon, FormClose } from "grommet-icons";

const menuItems = [
  {
    "title": "Projects",
    "link": "/my-work"
  },
  {
    "title": "About",
    "link": ""
  },
  {
    "title": "Contact",
    "link": ""
  }
];

const Header = ({ siteTitle }) => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <ResponsiveContext.Consumer>
      {size => (
        <header
          style={{
            background: `rebeccapurple`,
          }}
        >
          <Box
            direction="row"
            justify='between'
            fill
            flex
            style={{
              margin: `0 auto`,
              // maxWidth: 960,
              padding: `0.75rem 1.0875rem`,
            }}
          >
            <Heading margin='none' alignSelf="center">
              <Link
                to="/"
                style={{
                  color: `white`,
                  textDecoration: `none`,
                }}
              >
                  {siteTitle}
              </Link>
            </Heading>
            {(size !== "small") ? (
              <Box direction="row">
                {menuItems.map(item => 
                  <Box>
                    <Heading 
                      alignSelf="center" 
                      level="3" 
                      margin="0.75rem 1.0875rem"
                    >
                      <Link
                        to={item.link}
                        style={{
                          color: `white`,
                          textDecoration: `none`,
                        }}
                      >
                          {item.title}
                      </Link>
                    </Heading>
                  </Box>
                )}
              </Box>
            ) : 
            <Button 
              icon={<MenuIcon size="large" color="white"/>} 
              onClick={() => setShowMenu(!showMenu)}
              plain
            />
          }
          </Box>
          {size === "small" && showMenu ? 
            <Layer>
              <Box
                background='light-2'
                align='center'
                justify='end'
                direction='row'
                tag='header'
              >
                <Button
                  icon={<FormClose/>}
                  onClick={() => setShowMenu(!showMenu)}
                />
              </Box>
              <Box
                fill
                background='light-2'
                align='center'
                justify='center'
              >
                Sidebar
              </Box>
            </Layer> 
          : null}
        </header>
        )}
    </ResponsiveContext.Consumer>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
