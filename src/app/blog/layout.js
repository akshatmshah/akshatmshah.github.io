
import * as React from "react"
import PropTypes from "prop-types"
import "../../styles/layout.css"
import "../../styles/globals.css"


const Layout = ({ children }) => {

  return (
    <>
      {children}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
