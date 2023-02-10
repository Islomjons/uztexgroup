import React from 'react'
import c from "./Energy.module.css"
import { v4 as uuidv4 } from 'uuid';
import energyJson from "../../dummiy-data.energy.json"
import { Link } from 'react-router-dom';

const Energy = () => {
  return (
    <div className={c.energy}>
        <div className={c.container}>
            <div className={c.enery__container}>
                <div className={c.enery__heading__wrapper}>
                    <h3 className={c.enery__heading}>Yillik ishlab chiqarish quvvati</h3>
                </div>
                <ul className={c.enery__list}>
                    {
                        energyJson.map(energy => 
                            <li key={uuidv4()} className={c.enery__item}>
                                 <h4 className={c.energy__title}>{energy.eneryTitle}</h4>
                                 <p className={c.energy__name}>{energy.energyName}</p>
                            </li>
                        )
                    }
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Energy