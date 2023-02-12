import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./Technology.css"
import { BsChevronDown } from "react-icons/bs"
import { HiOutlineChevronUp } from "react-icons/hi"
import { v4 as uuidv4 } from 'uuid';
import { useTranslation } from 'react-i18next'
import factoryImg from "../../assets/images/uztexImg.jpeg"
import technologyJson from "../../dummiy-data.technology.json"

const Technology = () => {
  const { t } = useTranslation()
  const [toggles, setToggles] = useState(null)
  const toggle = (i) => {
    if (toggles == i) {
        return setToggles(null)
    }else{
        setToggles(i)
    }
  }
  return (
    <div className="technology">
        <div className="container">
            <h3 className="technology__heading">{t("technologies")}</h3>
            <div className="technology__container">
                <div className="technology__left">
                    <ul className="technology__left__list">
                        {
                            technologyJson.map((tech, i) => 
                                <li key={uuidv4()} className="technology__left__item">
                                    <div className="technology__left__wrapper" onClick={() => toggle(i)}>
                                        <h3 className="technology__left__link">{tech.title}</h3>
                                        <span>
                                          {toggles === i ? <HiOutlineChevronUp className="icon__up"/> : <BsChevronDown className="icon__down"/>}
                                        </span>
                                    </div>
                                    <div className={toggles === i ? "technology__left__body show" : "technology__left__body"}>{tech.body}</div>
                                </li>    
                            )
                        }
                    </ul>
                </div>
                <div className="technology__right">
                   <Link className="technology__right__link">
                       <img className="technology__right__img" src={factoryImg} alt="" />
                   </Link>
                   <span className="technology__bg__img"></span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Technology

{/* <li className={c.technology__left__item}>
<div className={c.technology__left__wrapper}>
    <Link className={c.technology__left__link}>{t("texnalogiyalarniBoyash")}</Link>
    <Link>
        <BsChevronDown style={{width: "17px", height: "17px"}}/>
    </Link>
</div>
</li> */}