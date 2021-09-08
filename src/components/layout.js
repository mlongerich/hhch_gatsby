/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { Helmet } from "react-helmet"
import styled, { createGlobalStyle } from "styled-components"
import MainMenu from "./MainMenu"

const GlobalStyle = createGlobalStyle`
  body{
    font-family: 'Open Sans', sans-serif;
    margin: 0;
    padding: 0;
  }
`

const LayoutWrapper = styled.div`
  margin: 0 auto;
  max-width: 960px;
`

const Layout = ({ children }) => (
  <>
    <Helmet>
      <link
        href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800"
        rel="stylesheet"
      />
    </Helmet>
    <GlobalStyle />
    <MainMenu />
    <LayoutWrapper>{children}</LayoutWrapper>
  </>
)

export default Layout
