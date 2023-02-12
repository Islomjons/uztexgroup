import React from 'react'
import c from "./News.module.css"

const News = () => {
  return (
    <div className={c.news}>
        <div className={c.container}>
            <div className={c.news__container}>
                <div className={c.news__top}>
                    <h3 className={c.news__top__heading}>YANGILIKLAR</h3>
                </div>
            </div>
        </div>
    </div>
  )
}

export default News