import React from "react"
import { Link } from "gatsby"

import { Flex } from "../wrappers"
import style from "./generic.module.css"

const TimelineContent = ({ start, end, title, body }) => {
  const date = `${start}${end ? "-" + end : ""}`
  return (
    <div className={style.timelineContentContainer}>
      <Flex alignCenter>
        <div className={style.timelineContentDot} />
        <div className={style.timelineContentDate}>{date}</div>
      </Flex>
      <div className={style.timelineContentHeader}>
        <div className={style.timelineContentTitle}>{title}</div>
        {body}
      </div>
    </div>
  )
}
const Timeline = ({ color, path, title, subtitle, link }) => {
  return (
    <div>
      <TimelineContent
        start="2016"
        end="2017"
        title={"University of Virginia"}
        body={"The quick brown fox jumped over the lazy dog"}
      />
      <TimelineContent
        start="2016"
        end="2017"
        title={"University of Virginia"}
        body={"The quick brown fox jumped over the lazy dog"}
      />
      <TimelineContent
        start="2016"
        end="2017"
        title={"University of Virginia"}
        body={"The quick brown fox jumped over the lazy dog"}
      />
      <TimelineContent
        start="2016"
        end="2017"
        title={"University of Virginia"}
        body={"The quick brown fox jumped over the lazy dog"}
      />
    </div>
  )
}

export default Timeline
