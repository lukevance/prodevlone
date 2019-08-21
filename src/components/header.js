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
        padding: `0.75rem 1.0875rem`,
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
        disabled //TODO: add links and remove
        label={<MenuIcon color="gray" size="medium"/>}
        dropAlign={{right: 'right', top: 'bottom'}}
        items={[
          { label: 'First Action', onClick: () => {} },
          { label: 'Second Action', onClick: () => {} },
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
