import React from "react"
import { useStaticQuery, graphql } from "gatsby"
const slash = require(`slash`)

const Home2 = () => {
  const { allWordpressPage } = useStaticQuery(graphql`
    {
      allWordpressPage(filter: { slug: { eq: "home2" } }) {
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
    <div className="grid grid-cols-2 py-12 md:pl-0">
      <div className="relative p-4 text-center bg-gray-200">
        <h1
          className="text-lg font-bold text-red-500 font-display"
          dangerouslySetInnerHTML={{
            __html: allWordpressPage.edges[0].node.title,
          }}
        />
        <p
          className="py-4 text-xs"
          dangerouslySetInnerHTML={{
            __html: allWordpressPage.edges[0].node.acf.excerpt,
          }}
        />
        <div className="">
          <a
            href={slash(allWordpressPage.edges[0].node.slug)}
            className="inline-block p-2 px-8 py-4 text-sm tracking-widest text-white uppercase bg-blue-500 font-heading"
          >
            Read more...
          </a>
        </div>
      </div>
      <div className="relative flex items-center justify-center">
        <a href={slash(allWordpressPage.edges[0].node.slug)} className="">
          <img
            src={allWordpressPage.edges[0].node.featured_media.source_url}
            className="absolute inset-0 object-cover h-full min-w-full min-h-full"
          />
        </a>
      </div>
    </div>
  )
}

export default Home2
