import React from "react"

import Page from "../components/layouts/page"
import { Flex, Div, Element } from "../components/wrappers"
import style from "./pages.module.css"

const IndexPage = () => (
  <Page title="Home">
    <Flex column flex className={style.index}>
      <Div size={3} color={"pink"} text="header">
        <Element comment="That's me" color="orange" to="/about">
          Taylor Rohrich
        </Element>
      </Div>
      <Div size={3} color={"pink"} text="main">
        <Element color="green" to="https://github.com/taylorrohrich">
          Github
        </Element>
        <Element color="cyan" to="https://www.linkedin.com/in/taylor-rohrich/">
          LinkedIn
        </Element>
      </Div>
    </Flex>
  </Page>
)

export default IndexPage
