import React from "react"
import { Page } from "../components/layouts"
import { Timeline, Skills } from "../components/generic"
import { Flex } from "../components/wrappers"
import style from "./pages.module.css"
const AboutPage = () => (
  <Page title="About">
    <div className={style.aboutTitle}>Education & Experience</div>
    <Timeline className={style.aboutContent} />
    <div className={style.aboutTitle}>Skills</div>
    <Skills className={style.aboutContent} />
  </Page>
)

export default AboutPage
