import React from "react"
import { Link } from "gatsby"

import { Flex } from "../wrappers"
import style from "./generic.module.css"

const Pill = ({ color, path, title, subtitle, link, onClick, className }) => {
  const Wrapper = link ? Link : Flex
  return (
    <Wrapper
      className={[style.pillContainer, className].join(" ")}
      style={{ backgroundColor: color }}
      to={link}
      onClick={onClick}
    >
      <Flex justifyCenter column>
        <div className={style.pillTitle}>{title}</div>
        <div className={style.pillSubtitle}>{subtitle}</div>
      </Flex>
      {path && (
        <Flex
          className={style.pillImageContainer}
          column
          alignCenter
          justifyCenter
        >
          <div>
            <img src={path} className={style.pillImage} />
          </div>
        </Flex>
      )}
    </Wrapper>
  )
}

export default Pill
