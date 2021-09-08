import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import styled from "styled-components"

const NewsItemsWrapper = styled.div`
  display: flex;
  justify-content: center;
`

const NewsItem = styled.div`
  width: 300px;
  border: 1px solid #efefef;
  padding: 16px;
  margin: 16px;
`

const NewsImage = styled.img`
  max-width: 100%;
`

const NewsItems = () => {
  const { allWordpressWpNews } = useStaticQuery(graphql`
    {
      allWordpressWpNews {
        edges {
          node {
            id
            excerpt
            featured_media {
              source_url
            }
            slug
            title
          }
        }
      }
    }
  `)

  return (
    <NewsItemsWrapper>
      {allWordpressWpNews.edges.map(newsItem => (
        <NewsItem key={newsItem.node.id}>
          <h2>{newsItem.node.title}</h2>
          <NewsImage
            src={newsItem.node.featured_media.source_url}
            alt="thumbnail"
          />
          <div dangerouslySetInnerHTML={{ __html: newsItem.node.excerpt }} />
          <Link to={`/news/${newsItem.node.slug}`}>Read More</Link>
        </NewsItem>
      ))}
    </NewsItemsWrapper>
  )
}

export default NewsItems
