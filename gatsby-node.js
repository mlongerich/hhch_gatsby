const path = require(`path`)
const slash = require(`slash`)

// Implement the Gatsby API “createPages”. This is
// called after the Gatsby bootstrap is finished so you have
// access to any information necessary to programmatically
// create pages.
// Will create pages for WordPress pages (route : /{slug})
// Will create pages for WordPress posts (route : /post/{slug})
exports.createPages = async ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions
  // The “graphql” function allows us to run arbitrary
  // queries against the local WordPress graphql schema. Think of
  // it like the site has a built-in database constructed
  // from the fetched data that you can run queries against.
  const result = await graphql(`
    {
      allWordpressPage {
        edges {
          node {
            id
            link
            status
            template
            slug
            title
            content
            template
          }
        }
      }
      allWordpressWpNews {
        edges {
          node {
            id
            excerpt
            content
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

  // Check for any errors
  if (result.errors) {
    throw new Error(result.errors)
  }

  // Access query results via object destructuring
  const { allWordpressPage, allWordpressWpNews } = result.data

  // Create Page pages.
  const pageTemplate = path.resolve(`./src/templates/page.js`)
  const newsUnderContentTemplate = path.resolve(
    `./src/templates/newsUnderContent.js`
  )
  // We want to create a detailed page for each
  // page node. We'll just use the WordPress Slug for the slug.
  // The Page ID is prefixed with 'PAGE_'
  allWordpressPage.edges.forEach(edge => {
    // Gatsby uses Redux to manage its internal state.
    // Plugins and sites can use functions like "createPage"
    // to interact with Gatsby.
    createPage({
      // Each page is required to have a `path` as well
      // as a template component. The `context` is
      // optional but is often necessary so the template
      // can query data specific to each page.
      path: edge.node.slug === "home" ? "/" : `/${edge.node.slug}/`,
      component: slash(
        edge.node.template === "news_under_content.php"
          ? newsUnderContentTemplate
          : pageTemplate
      ),
      context: edge.node,
    })
  })

  // Create Post pages
  const newsTemplate = path.resolve(`./src/templates/news.js`)
  // We want to create a detailed page for each
  // post node. We'll just use the WordPress Slug for the slug.
  // The Post ID is prefixed with 'POST_'
  allWordpressWpNews.edges.forEach(edge => {
    createPage({
      path: `/news/${edge.node.slug}/`,
      component: slash(newsTemplate),
      context: edge.node,
    })
  })
}
