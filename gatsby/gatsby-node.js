const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const blogTemplate = path.resolve(`src/templates/blog.js`)
  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              path
            }
          }
        }
      }
    }
  `)
  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    const path = node.fields.path
    createPage({
      path,
      component: blogTemplate,
      context: {}, // additional data can be passed via context
    })
  })
}

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const path = createFilePath({ node, getNode })

    createNodeField({
      node,
      name: `path`,
      value: path,
    })
  }
}
