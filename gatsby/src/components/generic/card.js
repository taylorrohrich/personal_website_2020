import React from "react"
import { Link } from "gatsby"

import { Flex } from "../wrappers"
import style from "./generic.module.css"

const Card = ({ path, color, title, subtitle, link, ...props }) => {
  return (
    <div style={props.style} className={style.cardContainer}>
      <Link to={link}>
        <div
          className={style.cardImageContainer}
          style={{ backgroundColor: color }}
        >
          <img className={style.cardImage} src={path} />
        </div>
        <Flex column className={style.cardContent} style={{ color }}>
          <div className={style.cardTitle}>{title}</div>
          <div className={style.cardSubtitle}>{subtitle}</div>
        </Flex>
      </Link>
    </div>
  )
}

export default Card
