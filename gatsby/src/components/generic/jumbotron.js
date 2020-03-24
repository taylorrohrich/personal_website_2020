import React from "react"

import { Flex } from "../wrappers"
import style from "./generic.module.css"

const Jumbotron = ({ color, path, title, subtitle }) => {
  return (
    <Flex
      className={style.jumbotronContainer}
      style={{ backgroundColor: color }}
    >
      <Flex column flex={3} alignCenter justifyCenter>
        <div>
          <div className={style.jumbotronTitle}>{title}</div>
          <div className={style.jumbotronSubtitle}>{subtitle}</div>
        </div>
      </Flex>
      <Flex column flex={2} justifyCenter>
        <div>
          <img src={path} className={style.jumbotronImage} />
        </div>
      </Flex>
    </Flex>
  )
}

export default Jumbotron
