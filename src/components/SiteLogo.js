import React from "react"
import { graphql, StaticQuery } from "gatsby"
import styled from "styled-components"

const SiteLogoStyle = styled.img`
  width: 64px;
  height: 64px;
  margin: 8px;
`

const SiteLogo = () => (
  <StaticQuery
    query={graphql`
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
    `}
    render={props => (
      <SiteLogoStyle
        src={props.allWordpressWpLogo.edges[0].node.url.source_url}
        alt="logo"
      />
    )}
  />
)

export default SiteLogo
