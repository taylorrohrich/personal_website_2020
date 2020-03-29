import React from "react"
import style from "./page.module.css"
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

export default Footer
