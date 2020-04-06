import React from "react"
import { graphql } from "gatsby"

import { Page, BlogPage } from "../components/layouts"
import { Card } from "../components/generic"
import { capitalizeFirstLetter } from "../utils"
import style from "./templates.module.css"

const Blog = ({ data, pageContext }) => {
  const category = pageContext.category
  const posts = data.allMarkdownRemark.nodes.map(n => ({
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
    <Page title={`Blog - ${capitalizeFirstLetter(category)}`}>
      <BlogPage page={category}>
        <div className={style.blogCardCollection}>{cardCollection}</div>
      </BlogPage>
    </Page>
  )
}

export const query = graphql`
  query($category: String!) {
    allMarkdownRemark(
      filter: {
        frontmatter: { type: { eq: "blog" }, category: { eq: $category } }
      }
    ) {
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
