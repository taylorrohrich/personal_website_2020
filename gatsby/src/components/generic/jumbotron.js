import React from "react"
import { Link } from "gatsby"

import { Flex } from "../wrappers"
import style from "./generic.module.css"

const Jumbotron = ({ color, path, title, subtitle, link }) => {
  const Wrapper = link ? Link : Flex
  return (
    <Wrapper
      className={link ? style.jumbotronContainerLink : style.jumbotronContainer}
      style={{ backgroundColor: color }}
      to={link}
    >
      <Flex column flex={3} alignCenter justifyCenter>
        <div className={style.jumbotronContent}>
          <div className={style.jumbotronTitle}>{title}</div>
          <div className={style.jumbotronSubtitle}>{subtitle}</div>
        </div>
      </Flex>
      <Flex column flex={2} justifyCenter>
        <div>
          <img src={path} className={style.jumbotronImage} />
        </div>
      </Flex>
    </Wrapper>
  )
}

export default Jumbotron
