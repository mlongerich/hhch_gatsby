import React, { useState } from "react"
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

  const [menuIsOpen, setMenuIsOpen] = useState(false)

  return (
    <>
      <div className="flex flex-col" id="main-menu-wrapper">
        <div
          className="p-2 text-center bg-red-500 text-gray-50"
          id="top-banner"
        >
          <p className="text-sm">
            <a href="/kidz-club">Kidz Club starting November 1!</a>
          </p>
        </div>
        <div
          className="container flex flex-row justify-between mx-auto bg-gray-50"
          id="main-menu-inner"
        >
          <div id="pfa-info" className="flex flex-row">
            <Link to="/">
              <SiteLogo />
            </Link>
            <SiteInfo />
          </div>
          <div id="menu-item-wrappers" className="flex-row hidden md:flex">
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
          <button
            onClick={() => setMenuIsOpen(true)}
            className="mr-8 md:hidden"
          >
            <svg
              class="w-8 h-8 text-black my-auto"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      {menuIsOpen && (
        <div class="fixed inset-0 w-full h-full bg-gray-50 z-50 text-gray-900">
          <div class="container h-full mx-auto px-6 py-8 relative z-10 flex flex-col items-center justify-center text-2xl uppercase font-bold tracking-widest space-y-6">
            <button
              onClick={() => setMenuIsOpen(false)}
              class="absolute top-0 right-0 mt-8 ml-6 mr-8"
            >
              <svg
                class="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            </button>{" "}
            {allWordpressWpApiMenusMenusItems.edges[0].node.items.map(item => (
              <div className="">
                <Link
                  to={
                    item.object_slug === "home" ? "/" : `/${item.object_slug}`
                  }
                  key={item.title}
                  className="inline-block border-b-4 border-transparent hover:border-gray-900"
                >
                  {item.title}
                </Link>
              </div>
            ))}
          </div>
          <div class="absolute inset-0 w-full h-full bg-gray-200 bg-opacity-20"></div>
        </div>
      )}
    </>
  )
}

export default MainMenu
