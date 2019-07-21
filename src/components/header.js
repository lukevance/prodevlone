import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Box, Heading } from "grommet";

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
    }}
  >
    <Box
      direction="row"
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
