import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import { Jumbotron, Nav } from "../../components/generic"
import { Flex } from "../../components/wrappers"
import colors from "../../constants/colors"
import { capitalizeFirstLetter } from "../../utils"

const getSubtitle = count =>
  count ? `${count} article${count > 1 ? "s" : ""}` : "no articles"

const Blog = ({ children, page }) => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(filter: { frontmatter: { type: { eq: "blog" } } }) {
        distinct(field: frontmatter___category)
        nodes {
          frontmatter {
            category
          }
        }
      }
      markdownRemark(frontmatter: { isFeatured: { eq: true } }) {
        frontmatter {
          category
          color
          date
          image
          title
          type
        }
        fields {
          path
        }
      }
    }
  `)
  const { distinct, nodes } = data.allMarkdownRemark
  const featuredPost = {
    ...data.markdownRemark.frontmatter,
    path: data.markdownRemark.fields.path,
  }
  const navItems = [
    {
      name: "latest",
      link: "/blog",
      value: "latest",
      subtitle: getSubtitle(nodes.length),
    },
    ...distinct.map(n => ({
      name: capitalizeFirstLetter(n),
      link: `/blog/${n}`,
      value: n,
      subtitle: getSubtitle(
        nodes.filter(node => node.frontmatter.category === n).length
      ),
    })),
  ]
  return (
    <Flex column>
      <Jumbotron
        title={featuredPost.title}
        subtitle={"Featured Article"}
        path={featuredPost.image}
        color={featuredPost.color}
        link={featuredPost.path}
      />
      <Nav items={navItems} selected={page} color={colors.comment} />
      {children}
    </Flex>
  )
}

export default Blog
