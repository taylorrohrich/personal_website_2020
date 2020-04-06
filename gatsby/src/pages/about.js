import React from "react"
import { Page } from "../components/layouts"
import { Timeline, Skills } from "../components/generic"
import style from "./pages.module.css"
const AboutPage = () => (
  <Page title="About">
    <div className={style.aboutTitle}>Education & Experience</div>
    <Timeline />
    <div className={style.aboutTitle}>Skills</div>
    <Skills />
  </Page>
)

export default AboutPage
