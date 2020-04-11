import React from "react"
import { Link } from "gatsby"
import { Flex } from "../wrappers"
import { SEO } from "../generic"
import style from "./layout.module.css"

const Main = ({ children }) => <main>{children}</main>

const Page = ({ children, title }) => {
  return (
    <Flex column style={{ height: "100%" }}>
      <SEO title={title} />
      <Header title={title} />
      <Main children={children} />
      <Footer />
    </Flex>
  )
}

const tabNames = [
  { route: "", title: "Home" },
  { route: "blog", title: "Blog" },
  { route: "about", title: "About" },
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
    <Flex className={style.tabContainer} row alignCenter>
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

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <footer>
      <div className={style.footer}>
        © Taylor Rohrich {year} | taylorrohrich@gmail.com
      </div>
    </footer>
  )
}

export default Page
