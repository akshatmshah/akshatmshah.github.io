import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";
import styles from "../styles/layout.css";

const Header = ({siteTitle}) => (
  <header className={styles.header}>
    <div className={styles.container}>

      <nav className={styles.nav}>
        <ul className="menu">
          <li>
            <Link href="/">
              {siteTitle}
            </Link>
          </li>
          <li>
            <Link href="/blog">
              Blog
            </Link>
          </li>
          <li>
            <Link href="https://github.com/akshatmshah">
              Github
            </Link>
          </li>
          <li>
            <Link href="mailto:akshats@seas.upenn.edu">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: "Home",
};

export default Header;
