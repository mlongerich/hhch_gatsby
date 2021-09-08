import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"

const NewsImage = styled.img`
  max-width: 300px;
  margin: 16px 0;
`

const News = ({ pageContext }) => (
  <Layout>
    <h1>{pageContext.title}</h1>
    <NewsImage src={pageContext.featured_media.source_url} />
    <div dangerouslySetInnerHTML={{ __html: pageContext.content }} />
  </Layout>
)

export default News
