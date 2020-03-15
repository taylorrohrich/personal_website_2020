import React from "react"

import Header from "./header"
import Footer from "./footer"
import { Flex } from "../../wrappers"
import { SEO } from "../../generic"

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

export default Page
