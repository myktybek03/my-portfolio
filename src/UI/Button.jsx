import React from "react"
import "./Button.css"
import gitHubIcon from "./../img/icons/gitHub-black.svg"

const Button = ({ link }) => {
  return (
    <a href={link} target="_blank" rel="noreferrer" className="btn-outline">
      <img src={gitHubIcon} alt="" />
      GitHub repo
    </a>
  )
}

export default Button
