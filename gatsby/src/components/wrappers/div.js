import React from "react"

import colors from "../../constants/colors"
import style from "./wrappers.module.css"

const Div = ({ children, color, size, text = "div" }) => {
  return (
    <div style={{ fontSize: `${size}em` }}>
      <div className={style.tag} style={{ display: "inline-block" }}>
        <div className={style.div}>
          {"<"}
          <span style={{ color: colors[color] }}>{text}</span>
          {">"}
        </div>
      </div>
      <div className={style.indent}>{children}</div>
      <div className={style.tag} style={{ display: "inline-block" }}>
        <div className={style.div}>
          {"<"}
          <span style={{ color: colors[color] }}>{text}</span>
          {"/>"}
        </div>
      </div>
    </div>
  )
}

export default Div
