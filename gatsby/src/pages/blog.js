import React, { useState } from "react"
import { graphql } from "gatsby"

import Page from "../components/layouts/page"
import { Jumbotron, Nav, Card } from "../components/generic"
import { Flex } from "../components/wrappers"
import style from "./pages.module.css"

const navItems = [
  { name: "Latest", value: "latest" },
  { name: "Project", value: "project" },
  { name: "Personal", value: "personal" },
  { name: "Random", value: "random" },
]
const BlogPage = ({ data }) => {
  const [blogTab, setBlogTab] = useState(navItems[0].value)
  const posts = data.allMarkdownRemark.edges.map(e => e.node.frontmatter)
  const featuredPost = posts.filter(p => p.isFeatured)?.[0]
  const cards = posts.filter(p => p.category === blogTab)

  const cardCollection = cards.map((card, i) => (
    <Card
      title={card.title}
      subtitle={card.category}
      path={card.image}
      color={card.color}
    />
  ))
  return (
    <Page title="Blog">
      <Flex column className={style.blog}>
        <Nav items={navItems} selected={blogTab} onChange={setBlogTab} />
        <Jumbotron
          title={featuredPost.title}
          subtitle={"Featured Article"}
          path={featuredPost.image}
          color={featuredPost.color}
        />
        <div className={style.blogCardCollection}>{cardCollection}</div>
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
            color
          }
        }
      }
    }
  }
`
export default BlogPage
