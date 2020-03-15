import React from "react"

import { Flex } from "../wrappers"
import style from "./generic.module.css"

const Jumbotron = ({ color, path, title, subtitle }) => {
  return (
    <Flex style={{ backgroundColor: color, minHeight: 300 }}>
      <Flex column flex={3} alignCenter justifyCenter>
        <div style={{ margin: 40 }}>
          <div className={style.jumbotronTitle}>{title}</div>
          <div className={style.jumbotronSubtitle}>{subtitle}</div>
        </div>
      </Flex>
      <Flex column flex={2} justifyCenter>
        <div>
          <img style={{ height: 150 }} src={path} />
        </div>
      </Flex>
    </Flex>
  )
}

export default Jumbotron
