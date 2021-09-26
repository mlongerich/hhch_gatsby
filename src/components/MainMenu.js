import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import SiteInfo from "../components/SiteInfo"
import SiteLogo from "../components/SiteLogo"

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
    <>
      <div className="flex flex-col" id="main-menu-wrapper">
        <div
          className="p-2 text-center bg-red-500 text-gray-50"
          id="top-banner"
        >
          <p className="text-sm">
            Top banner for something we want to highlight...
          </p>
        </div>
        <div
          className="container flex flex-row justify-between p-2 mx-auto bg-gray-50"
          id="main-menu-inner"
        >
          <div id="pfa-info" className="flex flex-row">
            <Link to="/">
              <SiteLogo />
            </Link>
            <SiteInfo />
          </div>
          <div id="menu-item-wrappers" className="flex flex-row">
            {allWordpressWpApiMenusMenusItems.edges[0].node.items.map(item => (
              <div className="p-4 my-auto text-gray-900">
                <Link
                  to={
                    item.object_slug === "home" ? "/" : `/${item.object_slug}`
                  }
                  key={item.title}
                >
                  {item.title}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default MainMenu
