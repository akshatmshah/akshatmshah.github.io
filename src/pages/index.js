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
      Hey! I’m <code className="emph"><b>Akshat Shah</b></code>&nbsp;. I am a sophomore at 
      the University of Pennsylvania studying Computer and Information Sciences. 
      I am currently a full-stack developer for <code className="emph"><b>PennApps</b></code>&nbsp;(the organizing community for our 
      school hackathon) and  a teaching assistant for <code className="emph"><b> CIS 262 Automata., Computability, and Complexity</b></code>. 
      </p>
      {"\n"}
      <p>
      Throughout high school, I worked on research to help marginalized 
      communities using <code className="emph"><b>computer vision</b></code>&nbsp;and <code className="emph"><b>machine learning</b></code>, but now I 
      want to help bring my out-of-the-box thinking to integrate new 
      technologies with companies! 
      </p>
      
      <p>
      I enjoy <code className="emph"><b>cooking</b></code>, finding new underground <code className="emph"><b>rappers</b></code>, and partaking 
      in activities that force me out of my <code className="emph"><b>comfort zone</b></code>&nbsp;(like my blog).
      Since I've been in Philly, I've become an avid <code className="emph"><b>vegetarian</b></code>&nbsp;taco 
      enthusiast and a <i>professional</i> spikeball player.
      </p>
    </div>
  </Layout>
)

export default IndexPage
