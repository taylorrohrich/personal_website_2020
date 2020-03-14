import React from "react"
import { Link } from "gatsby"

import Flex from "./flex"
import colors from "../../constants/colors"
import style from "./wrappers.module.css"

const getLink = (to, children, color) => {
  console.log(to)
  if (to?.length) {
    if (to.includes("https")) {
      return (
        <a style={{ color: color }} href={to}>
          {children}{" "}
        </a>
      )
    } else {
      return (
        <Link style={{ color: color }} to={to}>
          {" "}
          {children}
        </Link>
      )
    }
  }
  return <div style={{ color: color }}>{children}</div>
}
const Element = ({ children, onClick, color, size, comment, to }) => {
  return (
    <div
      className={style.tag}
      style={{
        fontSize: `${size}em`,
      }}
      role="button"
      onClick={onClick}
    >
      <Flex row space-between className={style.div}>
        <Flex flex>
          {"<"}
          {getLink(to, children, colors[color])}
          {" />"}
        </Flex>
        {comment && (
          <div style={{ color: colors.comment }}>
            {"//"} {comment}
          </div>
        )}
      </Flex>
    </div>
  )
}

export default Element
