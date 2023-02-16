import React from 'react'
import c from "./Mchj.module.css"
import { v4 as uuidv4 } from 'uuid';
import mchjJson from "../../dummiy-data.mchj.json"
import { AiFillCaretRight } from "react-icons/ai"
import { Link } from 'react-router-dom'

const Mchj = () => {
  return (
    <div className={c.mchj}>
        <div className={c.container}>
            <div className={c.mchj__container}>
                <div className={c.mchj__left}>
                    <h3 className={c.mchj__left__heading}>MChJ QK <span className={c.mchj__left__span}>“UZTEX GROUP”</span></h3>
                    <p className={c.mchj__left__text}>O'zbekiston Respublikasi, Toshkent viloyati, Chirchiq shahri,Yumalak posyolkasi, ko'ch. V. Qodirov, 207 y</p>
                    <ul className={c.mchj__left__list}>
                        {
                            mchjJson.map(mchjs => 
                                <li key={uuidv4()} className={c.mchj__left__item}>
                                    <Link className={c.mchj__left__link}>{mchjs.mchj__link}</Link>
                                </li>    
                            )
                        }
                    </ul>
                </div>
                <div className={c.mchj__right}>
                    <div className={c.mchj__right__wrapper}>
                        <input className={c.mchj__right__input__text} type="text" placeholder="To'liq ismi sharif"/>
                        <input className={c.mchj__right__input__email} type="email" placeholder="Elektron pochta"/>
                    </div>
                    <div className={c.mchj__right__wrapper1}>
                        <input className={c.mchj__right__input__text1} type="text" placeholder='Tell'/>
                        <input className={c.mchj__right__input__text2} type="text" placeholder='Shahar'/>
                    </div>
                    <div className={c.mchj__right__wrapper2}>
                        <input className={c.mchj__right__input__text3} type="text" placeholder="Bo'limni tanlang"/>
                    </div>
                    <div className={c.mchj__right__wrapper3}>
                        <input className={c.mchj__right__input__text4} type="text" placeholder="Sizning xatingiz"/>
                    </div>
                    <button className={c.mchj__right__btn}>
                        Jo'natish
                        <AiFillCaretRight className={c.mchj__right__icon}/>
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Mchj