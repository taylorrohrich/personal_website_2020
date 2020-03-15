import React from "react"
import { graphql } from "gatsby"

import Page from "../components/layouts/page"
import { Jumbotron } from "../components/generic"
import { Flex } from "../components/wrappers"
import style from "./pages.module.css"

const BlogPage = ({ data }) => {
  console.log(data)
  const posts = data.allMarkdownRemark.edges.map(e => e.node.frontmatter)
  const featuredPost = posts.filter(p => p.isFeatured)?.[0]
  console.log(posts, featuredPost)
  return (
    <Page title="Blog">
      <Flex column className={style.blog}>
        <Jumbotron
          title={featuredPost.title}
          subtitle={"Featured Article"}
          path={featuredPost.image}
          color={featuredPost.color}
        />
      </Flex>
    </Page>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            isFeatured
            type
            title
            image
            date
            category
          }
        }
      }
    }
  }
`
export default BlogPage
