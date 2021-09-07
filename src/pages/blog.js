import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql, Link } from "gatsby"
import "../styles/blog-layout.css"



const BlogPage = ({ data: { allMarkdownRemark: { edges } } }) => {
  return (
    <Layout>
      <SEO title="Blog posts" />
      <main>
        {edges.map(({ node }, i) => (
          <div key={i} className="my-5">
            <div>
            <h2 style={{ width: '40rem' }}>
                <Link to={node.frontmatter.path} className="link">
                    {node.frontmatter.title} 
                </Link>
            </h2>
            </div>
            <div className="date">
              {node.frontmatter.date}
            </div>
          </div>
        ))}
      </main>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM, DD, YYYY")
            path
            title
          }
        }
      }
    }
  }
`

export default BlogPage