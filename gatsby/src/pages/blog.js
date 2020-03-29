import React, { useState } from "react"
import { graphql } from "gatsby"

import Page from "../components/layouts/page"
import { Jumbotron, Nav, Card } from "../components/generic"
import { Flex } from "../components/wrappers"
import colors from "../constants/colors"
import style from "./pages.module.css"

const navItems = [
  { name: "Latest", value: "latest" },
  { name: "Project", value: "project" },
  { name: "Personal", value: "personal" },
  { name: "Random", value: "random" },
]
const BlogPage = ({ data }) => {
  const [blogTab, setBlogTab] = useState(navItems[0].value)
  const posts = data.allMarkdownRemark.edges.map(e => ({
    ...e.node.frontmatter,
    path: e.node.fields.path,
  }))
  const featuredPost = posts.filter(p => p.isFeatured)?.[0]
  const items = navItems.reduce((acc, item) => {
    const categoryLength =
      item.value === "latest"
        ? posts.length
        : posts.filter(p => p.category === item.value).length
    return acc.concat({
      ...item,
      subtitle: categoryLength
        ? `${categoryLength} article${categoryLength > 1 ? "s" : ""}`
        : "no articles",
    })
  }, [])
  const cards =
    blogTab == "latest" ? posts : posts.filter(p => p.category === blogTab)
  const cardCollection = cards.map((card, i) => (
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
      <Flex column className={style.blog}>
        <Jumbotron
          title={featuredPost.title}
          subtitle={"Featured Article"}
          path={featuredPost.image}
          color={featuredPost.color}
          link={featuredPost.path}
        />
        <Nav
          items={items}
          selected={blogTab}
          onChange={setBlogTab}
          color={colors.comment}
        />
        <div className={style.blogCardCollection}>{cardCollection}</div>
      </Flex>
    </Page>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
      edges {
        node {
          fields {
            path
          }
          frontmatter {
            isFeatured
            type
            title
            image
            date
            category
            color
          }
        }
      }
    }
  }
`
export default BlogPage
