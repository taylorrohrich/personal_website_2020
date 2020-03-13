import React from "react"

import Page from "../components/layouts/page"
import { Flex, Div, Element } from "../components/wrappers"

const IndexPage = () => (
  <Page title="Home">
    <Flex column flex>
      <Div size={60} color={"pink"} text="header">
        <Element comment="That's me" color="orange">
          Taylor Rohrich
        </Element>
      </Div>
      <Div size={60} color={"pink"} text="main">
        <Element color="green">Github</Element>
        <Element color="cyan">LinkedIn</Element>
      </Div>
    </Flex>
  </Page>
)

export default IndexPage
