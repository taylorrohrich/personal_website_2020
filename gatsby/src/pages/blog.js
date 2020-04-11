import React from "react"
import { graphql } from "gatsby"

import { Page, BlogPage } from "../components/layouts"
import { Card } from "../components/generic"
import style from "./pages.module.css"

const Blog = ({ data }) => {
  const { nodes } = data.allMarkdownRemark
  const posts = nodes.map(n => ({
    ...n.frontmatter,
    path: n.fields.path,
  }))
  const cardCollection = posts.map((card, i) => (
    <Card
      key={`card-${i}`}
      link={card.path}
      title={card.title}
      subtitle={card.category}
      path={card.image}
      color={card.color}
    />
  ))
  return (
    <Page title="Blog">
      <BlogPage page="latest">
        <div className={style.blogCardCollection}>{cardCollection}</div>
      </BlogPage>
    </Page>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(filter: { frontmatter: { type: { eq: "blog" } } }) {
      nodes {
        frontmatter {
          category
          color
          isFeatured
          image
          title
          type
        }
        fields {
          path
        }
      }
    }
  }
`
export default Blog
