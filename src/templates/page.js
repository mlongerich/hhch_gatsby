import React from "react"
import Layout from "../components/layout"

export default ({ pageContext }) => {
  console.log(pageContext)
  return (
    <Layout>
      {pageContext.featured_media?.source_url && (
        <div className="relative w-full px-12 py-12">
          <div className="relative z-10 py-24 md:py-48"></div>
          <img
            src={pageContext.featured_media.source_url}
            className="absolute inset-0 object-cover h-full min-w-full min-h-full"
          />
        </div>
      )}
      <div className="container mx-auto" id="layout-wrapper">
        <h1 dangerouslySetInnerHTML={{ __html: pageContext.title }} />
        <div dangerouslySetInnerHTML={{ __html: pageContext.content }} />
      </div>
    </Layout>
  )
}
