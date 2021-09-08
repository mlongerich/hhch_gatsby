import React from "react"
import Layout from "../components/layout"
import NewsItems from "../components/NewsItems"

export default ({ pageContext }) => {
  console.log(pageContext)
  return (
    <Layout>
      <h1 dangerouslySetInnerHTML={{ __html: pageContext.title }} />
      <div dangerouslySetInnerHTML={{ __html: pageContext.content }} />
      <NewsItems />
    </Layout>
  )
}
