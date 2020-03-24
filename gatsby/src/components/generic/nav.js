import React from "react"

import { Flex } from "../wrappers"
import style from "./generic.module.css"

const Nav = ({ color, items = [], onChange, selected, value }) => {
  const navItems = items.map(item => (
    <div
      className={
        selected === item.value ? style.selectedNavItem : style.navItem
      }
      onClick={() => onChange(item.value)}
    >
      {item.name}
    </div>
  ))
  return (
    <Flex className={style.navContainer} style={{ backgroundColor: color }}>
      {navItems}
    </Flex>
  )
}

export default Nav
