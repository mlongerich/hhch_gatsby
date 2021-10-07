import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
const slash = require(`slash`)

const Newsletter = () => {
  const { allWordpressPage } = useStaticQuery(graphql`
    {
      allWordpressPage(filter: { slug: { eq: "newsletter" } }) {
        edges {
          node {
            title
            featured_media {
              source_url
            }
            acf {
              excerpt
            }
            slug
          }
        }
      }
    }
  `)

  return (
    <div className="w-full py-12 md:pr-12">
      <div className="relative flex items-center justify-center h-full bg-red-500">
        <div className="relative z-10 py-4 text-center text-gray-50">
          <h1
            className="px-8 text-3xl font-bold font-display"
            dangerouslySetInnerHTML={{
              __html: allWordpressPage.edges[0].node.title,
            }}
          />
          <p
            className="p-8"
            dangerouslySetInnerHTML={{
              __html: allWordpressPage.edges[0].node.acf.excerpt,
            }}
          />
          <a
            href={slash(allWordpressPage.edges[0].node.slug)}
            className="inline-block p-2 px-8 py-4 text-sm tracking-widest text-white uppercase bg-blue-500 font-heading"
          >
            Sign up now
          </a>
        </div>
        <a href="/">
          <img
            src={allWordpressPage.edges[0].node.featured_media.source_url}
            className="absolute inset-0 object-cover h-full min-w-full min-h-full opacity-20"
          />
        </a>
      </div>
    </div>
  )
}

export default Newsletter
