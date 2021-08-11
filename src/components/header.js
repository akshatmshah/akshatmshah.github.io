import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import "../styles/index.css"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `white`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <div class="container">
        <div class="nav">
          <h1 id="name" style={{ margin: 0 }}>
            <Link
              to="/"
              style={{
                color: `black`,
                textDecoration: `none`,
                fontSize: 30,
              }}
            >
              {siteTitle}
            </Link>
          </h1>
          <ul id = "navbar-items">
            <li>
              <a href="https://github.com/akshatmshah">github</a>
              <Link to="/blog">blog</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
