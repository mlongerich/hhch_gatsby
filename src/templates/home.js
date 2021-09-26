import React from "react"
import Layout from "../components/layout"
import { graphql, useStaticQuery } from "gatsby"
import Newsletter from "../components/Newsletter"
import Home1 from "../components/Home1"
import Home2 from "../components/Home2"

export default ({ pageContext }) => {
  return (
    <Layout>
      {pageContext.featured_media?.source_url && (
        <div className="relative w-full p-12">
          <div className="relative z-10 py-24 md:py-48"></div>
          <img
            src={pageContext.featured_media.source_url}
            className="absolute inset-0 object-cover h-full min-w-full min-h-full"
          />
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2">
        <Newsletter />
        <div>
          <Home1 />
          <Home2 />
        </div>
      </div>
      <div className="container mx-auto" id="layout-wrapper">
        <h1>HOME TEMPLATE</h1>
        <div> </div>
        <div dangerouslySetInnerHTML={{ __html: pageContext.content }} />
      </div>
    </Layout>
  )
}
