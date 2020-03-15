import { Link } from "gatsby"
import React from "react"

import { Flex } from "../../wrappers"
import style from "./page.module.css"

const tabNames = [
  { route: "", title: "Home" },
  { route: "about", title: "About" },
  { route: "blog", title: "Blog" },
  { route: "contact", title: "Contact" },
]
const Tabs = ({ title }) => {
  const tabs = tabNames.map((t, i) => {
    const isSelected = title === t.title
    const className = isSelected ? "selectedTab" : "tab"
    return (
      <Link
        key={`header-tab-${i}`}
        to={`/${t.route}`}
        className={style[className]}
      >
        {t.title}
      </Link>
    )
  })
  return (
    <Flex row justifyFlexStart alignCenter>
      {tabs}
    </Flex>
  )
}

const Header = ({ title }) => {
  return (
    <header className={style.header}>
      <Tabs title={title} />
    </header>
  )
}

export default Header
