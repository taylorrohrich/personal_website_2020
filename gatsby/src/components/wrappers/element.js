import React from "react"

import Flex from "./flex"
import colors from "../../constants/colors"
import style from "./wrappers.module.css"

const Element = ({ children, onClick, color, size, comment }) => {
  return (
    <div
      className={style.tag}
      style={{
        fontSize: size,
      }}
      role="button"
      onClick={onClick}
    >
      <Flex row space-between className={style.div}>
        <Flex flex>
          {"<"}
          <div style={{ color: colors[color] }}>{children}</div>
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
