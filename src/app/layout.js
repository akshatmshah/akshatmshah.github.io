
import * as React from "react"
import PropTypes from "prop-types"
import "../styles/layout.css"
import '../styles/globals.css'


const Layout = ({ children }) => {

  return (
    <>
      <html>
        <body>
          <div
            style={{
              margin: `0 auto`,
              maxWidth: 960,
              padding: `1.45rem 1.0875rem 1.45rem`,
            }}
          >
            <main>{children}</main>
          </div>
        </body>
      </html>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
