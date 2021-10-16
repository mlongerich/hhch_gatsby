import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"

const SiteInfo = () => {
  const { allWordpressSiteMetadata } = useStaticQuery(graphql`
    {
      allWordpressSiteMetadata {
        edges {
          node {
            name
            description
          }
        }
      }
    }
  `)

  return (
    <div
      className="invisible my-auto text-gray-900 md:visible"
      id="site-info-wrapper"
    >
      <Link to="https://projectsforasia.com/hope-house">
        <div
          dangerouslySetInnerHTML={{
            __html: allWordpressSiteMetadata.edges[0].node.name,
          }}
          className="font-bold"
        />
      </Link>
      <Link to="https://projectsforasia.com/hope-house">
        <div
          dangerouslySetInnerHTML={{
            __html: allWordpressSiteMetadata.edges[0].node.description,
          }}
        />
      </Link>
    </div>
  )
}

export default SiteInfo
