import React, { useState } from "react"
import { graphql, useStaticQuery, Link } from "gatsby"

const MainMenu2 = () => {
  const [showMenu, setShowMenu] = useState(false)

  const {
    allWordpressWpApiMenusMenusItems,
    allWordpressWpLogo,
  } = useStaticQuery(
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
    `
  )
  return (
    <>
      <div className="container relative z-50 grid h-24 grid-cols-3 px-6 mx-auto">
        {/* <div x-data="{showMenu: false}" className="flex items-center"> */}
        <div className="flex items-center">
          {/* <button x-on:click="showMenu = true"> */}
          <button onclick={() => setShowMenu(true)}>
            <svg
              className="w-8 h-8 text-white"
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

          <div
            className={
              showMenu
                ? "fixed inset-0 w-full h-full bg-white z-50 text-yellow-900"
                : "hidden"
            }
          >
            <div className="container relative z-10 flex flex-col items-center justify-center h-full px-6 py-8 mx-auto space-y-6 text-2xl font-bold tracking-widest uppercase">
              <button
                onClick={() => setShowMenu(false)}
                // x-on:click="showMenu = false"
                className="absolute top-0 left-0 mt-8 ml-6"
              >
                <svg
                  className="w-8 h-8"
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
              </button>
              {allWordpressWpApiMenusMenusItems.edges[0].node.items.map(
                item => (
                  <div className="inline-block border-b-4 border-transparent hover:border-yellow-900">
                    <Link
                      to={
                        item.object_slug === "home"
                          ? "/"
                          : `/${item.object_slug}`
                      }
                      key={item.title}
                    >
                      {item.title}
                    </Link>
                  </div>
                )
              )}
            </div>
            <div className="absolute inset-0 w-full h-full bg-yellow-900 bg-opacity-20"></div>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <a
            href="/"
            className="text-2xl font-bold tracking-widest text-white uppercase"
          >
            <img
              src={allWordpressWpLogo.edges[0].node.url.source_url}
              className="object-contain object-center w-64 h-20"
            />
          </a>
        </div>

        <div className="flex items-center justify-end">
          <a href="/contact">
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              ></path>
            </svg>
          </a>
        </div>
      </div>

      <div className="absolute top-0 left-0 w-full h-24 bg-yellow-900 bg-opacity-95"></div>
    </>
  )
}

export default MainMenu2
