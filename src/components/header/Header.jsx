import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./Header.css"
import uztexLogo from "../../assets/images/uztex.png"
import { RxHamburgerMenu } from "react-icons/rx"
import { changeLanguage } from "i18next"
import { useTranslation } from 'react-i18next'

const Header = ({setIsHamburgerActive}) => {
    const { t } = useTranslation()
    const [changeLang, setChangeLang] = useState("")
    const { i18n } = useTranslation()
    const changeWebSiteLang = (evt) => {
        i18n.changeLanguage(evt.target.value || "uz")
    }
  return (
    <div className="header">
        <div className="container">
            <div className="header__container">
                <Link to="/">
                    <img className="header__logo" src={uztexLogo} alt="" />
                </Link>
                <ul className="header__list">
                    <li className="header__item">
                        <Link className="header__link header__active">{t("main")}</Link>
                    </li>
                    <li className="header__item">
                        <Link className="header__link">{t("AboutCompany")}</Link>
                    </li>
                    <li className="header__item">
                        <Link className="header__link">{t("News")}</Link>
                    </li>
                    <li className="header__item">
                        <Link className="header__link">{t("communication")}</Link>
                    </li>
                    <li className="header__item">
                        <select className="header__select" onChange={changeWebSiteLang}>
                            <option value="uz">O'ZBEKCHA</option>
                            <option value="ru">RUSCHA</option>
                            <option value="en">INGLIZCHA</option>
                        </select>
                    </li>
                </ul>
                <button className="header__btn" onClick={() => {setIsHamburgerActive(true)}}>
                    <RxHamburgerMenu className="header__icon"/>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Header