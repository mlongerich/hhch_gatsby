import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"

const SiteInfoWrapper = styled.div`
  color: white;
  flex-grow: 1;
  margin: auto 0;
`

const SiteInfoTitle = styled.div`
  font-weight: bold;
`

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
    <SiteInfoWrapper>
      <SiteInfoTitle
        dangerouslySetInnerHTML={{
          __html: allWordpressSiteMetadata.edges[0].node.name,
        }}
      />
      <div
        dangerouslySetInnerHTML={{
          __html: allWordpressSiteMetadata.edges[0].node.description,
        }}
      />
    </SiteInfoWrapper>
  )
}

export default SiteInfo
