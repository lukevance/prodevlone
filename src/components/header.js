import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Box, Heading, Menu } from "grommet";
import { Menu as MenuIcon } from "grommet-icons";

const Header = ({ siteTitle }) => (
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
        maxWidth: 960,
        padding: `0.75rem 1.0875rem 0 1.0875rem`,
      }}
    >
      <Heading margin='none'>
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
      <Menu
        // disabled //TODO: add links and remove
        label={<MenuIcon color="white" size="large"/>}
        dropAlign={{right: 'right', top: 'bottom'}}
        size="large"
        items={[
          { label: 'Projects', href: "/page-2" },
          { label: 'Contact', onClick: () => {} },
          { label: 'Resume', onClick: () => {} },
        ]}
      />
    </Box>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
