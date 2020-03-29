import React from "react"

import { Flex } from "../wrappers"
import Pill from "./pill"
import style from "./generic.module.css"

const Nav = ({ color, items = [], onChange, selected }) => {
  const navItems = items.map((item, i) => (
    <Pill
      color={color}
      title={item.name}
      subtitle={item.subtitle}
      key={`nav-${i}`}
      className={
        selected === item.value ? style.selectedNavItem : style.navItem
      }
      onClick={() => onChange(item.value)}
    />
  ))
  return (
    <Flex wrap className={style.navContainer}>
      {navItems}
    </Flex>
  )
}

export default Nav
