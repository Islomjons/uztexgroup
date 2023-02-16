import React from 'react'
import c from "./BgImg.module.css"
import { v4 as uuidv4 } from 'uuid';
import bgImgJson from "../../dummiy-data.bgImg.json"

const bgImg = () => {
  return (
    <div className={c.bgimg}>
        <div className={c.container}>
            <ul className={c.bgimg__list}>
                {
                    bgImgJson.map(bgimgs => 
                        <li key={uuidv4()} className={c.bgimg__item}>
                            <img className={c.bgimg__img} src={bgimgs.bgImgList} alt="" />
                        </li>    
                    )
                }
            </ul>
        </div>
    </div>
  )
}

export default bgImg