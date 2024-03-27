import * as React from "react"
import { Text } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import "bootstrap/dist/css/bootstrap.min.css"
import "../styles/index.css"
import pfp from '../images/pfp.jpg';

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <div className="introduction">
      <img className="pfpC" src={pfp} align="left" />
      <p>
      Hey! I’m Akshat.
      </p>  
    </div>
  </Layout>
)

export default IndexPage
