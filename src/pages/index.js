import * as React from "react"
import { Link, Text} from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import "bootstrap/dist/css/bootstrap.min.css"
import "../styles/index.css"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <div className="introduction">
      <p>
        I am a sophomore at the University of Pennsylvania studying Computer
        Science. In my free time, I like to play spikeball, eat tacos, and
        listen to underground rap.
      </p>
    </div>
  </Layout>
)

export default IndexPage
