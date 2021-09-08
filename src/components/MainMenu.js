import React from "react"
import { Link, useStaticQuery } from "gatsby"
import styled from "styled-components"
import SiteInfo from "../components/SiteInfo"
import SiteLogo from "../components/SiteLogo"

const MainMenuWrapper = styled.div`
  display: flex;
  background-color: rgb(3, 27, 77);
`
const MenuItem = styled(Link)`
  color: white;
  display: block;
  padding: 8px 16px;
  margin: auto;
`

const MainMenuInner = styled.div`
  max-width: 960px;
  margin: 0 auto;
  display: flex;
  width: 960px;
  height: 100%;
`

const MainMenu = () => {
  const { allWordpressWpApiMenusMenusItems } = useStaticQuery(
    graphql`
      {
        allWordpressWpApiMenusMenusItems(
          filter: { name: { eq: "Main Menu" } }
        ) {
          edges {
            node {
              items {
                title
                object_slug
              }
            }
          }
        }
      }
    `
  )

  return (
    <MainMenuWrapper>
      <MainMenuInner>
        <SiteLogo />
        <SiteInfo />
        {allWordpressWpApiMenusMenusItems.edges[0].node.items.map(item => (
          <MenuItem
            to={item.object_slug === "home" ? "/" : `/${item.object_slug}`}
            key={item.title}
          >
            {item.title}
          </MenuItem>
        ))}
      </MainMenuInner>
    </MainMenuWrapper>
  )
}

export default MainMenu
