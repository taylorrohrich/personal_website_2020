import React from "react"
import { useStaticQuery } from "gatsby"

import { Flex } from "../wrappers"
import style from "./generic.module.css"

const TimelineItem = ({ startDate, endDate, title, body, color, icon }) => {
  const startYear = new Date(startDate).getFullYear()
  const endYear = new Date(endDate).getFullYear()
  const date = `${startYear}${endYear ? "-" + endYear : ""}`
  return (
    <div className={style.timelineContainer}>
      <Flex alignCenter>
        <Flex
          column
          justifyCenter
          alignCenter
          style={{ backgroundColor: color }}
          className={style.timelineDot}
        >
          {icon && <img className={style.timelineIcon} src={icon} />}
        </Flex>
        <div className={style.timelineDate}>{date}</div>
      </Flex>
      <div className={style.timelineContent}>
        <div className={style.timelineTitle}>{title}</div>
        <div
          className={style.timelineBody}
          dangerouslySetInnerHTML={{ __html: body }}
        />
      </div>
    </div>
  )
}

const Timeline = ({ className }) => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { frontmatter: { type: { eq: "timeline" } } }
        sort: { fields: frontmatter___endDate, order: ASC }
      ) {
        nodes {
          frontmatter {
            title
            icon
            endDate
            startDate
            color
          }
          html
        }
      }
    }
  `)
  const timelineItems = data.allMarkdownRemark.nodes.map((n, i) => {
    const { title, icon, startDate, endDate, color } = n.frontmatter
    return (
      <TimelineItem
        key={`timelineItem-${i}`}
        title={title}
        icon={icon}
        startDate={startDate}
        endDate={endDate}
        color={color}
        body={n.html}
      />
    )
  })
  return <div className={className}>{timelineItems}</div>
}
export default Timeline
