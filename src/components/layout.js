/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { Helmet } from "react-helmet"
import { createGlobalStyle } from "styled-components"
import MainMenu from "./MainMenu"
import "@wordpress/block-library/build-style/style.css"
import "react-modal-video/css/modal-video.min.css"

// import MainMenu2 from "./MainMenu2"

const GlobalStyle = createGlobalStyle`
  body{
    font-family: 'Quicksand', 'Open Sans', sans-serif;
  }
  h1, h2, h3, h4, h5, h6{
    font-family: "M PLUS Rounded 1c", sans-serif;
  }
`
const Layout = ({ children }) => (
  <div className="debug-screens bg-gray-50">
    <Helmet>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@100;300;400;500;700;800;900"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700"
        rel="stylesheet"
      />
    </Helmet>
    <GlobalStyle />
    <MainMenu />
    {children}
  </div>
)

export default Layout
