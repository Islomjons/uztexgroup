import React from 'react'
import { Link } from 'react-router-dom'
import c from "./Uztex.module.css"
import { useTranslation } from 'react-i18next'

const Uztex = () => {
    const { t } = useTranslation()
  return (
    <div className={c.uztex}>
        <div className={c.container}>
            <div className={c.uztex__container}>
                <div className={c.uztex__left}>
                    <div className={c.uztex__left__wrapper}>
                        <p className={c.uztex__left__title}>SINCE <br />2009</p>
                    </div>
                </div>
                <div className={c.uztex__right}>
                    <p className={c.uztex__right__title}>{t("AboutCompany")}</p>
                    <h3 className={c.uztex__right__heading}>«UZTEX GROUP»</h3>
                    <p className={c.uztex__right__text}>{t("uztex")}</p>
                    <p className={c.uztex__right__text1}>"{t("uztexGroup")}</p>
                    <p className={c.uztex__right__text2}>{t("todaysDay")}</p>
                    <Link className={c.uztex__right__link}>{t("aboutUs")}</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Uztex