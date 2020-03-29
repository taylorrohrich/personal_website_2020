import React from "react"
import { graphql } from "gatsby"

import { Jumbotron } from "../components/generic"
import { Flex } from "../components/wrappers"
import Page from "../components/layouts/page"
import style from "./templates.module.css"

const Blog = ({ data }) => {
  const post = {
    ...data.markdownRemark.frontmatter,
    html: data.markdownRemark.html,
  }
  const date = new Date(post.date).toDateString()
  return (
    <Page title={post.title}>
      <Flex column className={style.template}>
        <Jumbotron
          title={post.title}
          subtitle={post.category}
          path={post.image}
          color={post.color}
        />
        <Flex
          style={{ backgroundColor: post.color }}
          className={style.blogDate}
          justifyFlexEnd
        >
          <div>{date}</div>
        </Flex>
        <div
          className={style.blogContent}
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </Flex>
    </Page>
  )
}

export const query = graphql`
  query($path: String!) {
    markdownRemark(fields: { path: { eq: $path } }) {
      frontmatter {
        type
        title
        isFeatured
        image
        date
        color
        category
      }
      html
    }
  }
`

export default Blog
