const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const postTemplate = path.resolve(`src/templates/post.js`)
  const blogTemplate = path.resolve(`src/templates/blog.js`)
  const result = await graphql(`
    query {
      allMarkdownRemark {
        distinct(field: frontmatter___category)
        nodes {
          fields {
            path
          }
          frontmatter {
            category
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
  const { nodes, distinct } = result.data.allMarkdownRemark
  nodes.forEach(node => {
    const { path } = node.fields
    createPage({
      path,
      component: postTemplate,
      context: {}, // additional data can be passed via context
    })
  })
  distinct.forEach(category => {
    const path = `/blog/${category}`
    createPage({
      path,
      component: blogTemplate,
      context: { category }, // additional data can be passed via context
    })
  })
}

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const filePath = createFilePath({ node, getNode })
    const path = filePath.replace(
      "/blog/",
      `/blog/${node.frontmatter.category}/`
    )
    createNodeField({
      node,
      name: `path`,
      value: path,
    })
  }
}
