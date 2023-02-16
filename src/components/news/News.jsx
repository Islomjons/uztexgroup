import React from 'react'
import { Link } from 'react-router-dom'
import c from "./News.module.css"

const News = () => {
  return (
    <div className={c.news}>
        <div className={c.container}>
            <div className={c.news__container}>
                <div className={c.news__top}>
                    <h3 className={c.news__top__heading}>YANGILIKLAR</h3>
                    <Link className={c.news__top__link}>Barcha maqolalarni ko'rish</Link>
                </div>
                <div className={c.news__bottom}>
                    <ul className={c.news__bottom__list}>
                        <li className={c.news__bottom__item}>
                           <Link className={c.news__bottom__img}></Link>
                        </li>
                        <li className={c.news__bottom__item}>
                           <Link className={c.news__bottom__img1}></Link>
                        </li>
                        <li className={c.news__bottom__item}>
                           <Link className={c.news__bottom__img2}></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default News