import React from 'react'
import { Link } from 'react-router-dom'
import c from "./Header.module.css"
import uztexLogo from "../../assets/images/uztex.png"

const Header = () => {
  return (
    <div className={c.header}>
        <div className={c.container}>
            <div className={c.header__container}>
                <Link to="/">
                    <img className={c.header__logo} src={uztexLogo} alt="" />
                </Link>
                <ul className={c.header__list}>
                    
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Header