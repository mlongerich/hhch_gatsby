import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"

const SiteLogoStyle = styled.img`
  width: 64px;
  height: 64px;
  margin: 8px 8px 8px 0;
`

const SiteLogo = () => {
  const { allWordpressWpLogo } = useStaticQuery(graphql`
    {
      allWordpressWpLogo {
        edges {
          node {
            url {
              source_url
            }
          }
        }
      }
    }
  `)

  return (
    <SiteLogoStyle
      src={allWordpressWpLogo.edges[0].node.url.source_url}
      alt="logo"
    />
  )
}

export default SiteLogo
