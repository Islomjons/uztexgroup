import React from 'react'
import c from "./Student.module.css"
import studentJson from "../../dummiy-data.student.json"
import { v4 as uuidv4 } from 'uuid';

const Student = () => {
  return (
    <div className={c.student}>
        <div className={c.container}>
            <div className={c.student__container}>
                <ul className={c.student__list}>
                    {
                        studentJson.map(students => 
                          <li key={uuidv4()} className={c.student__item}>
                              <h3 className={c.student__num}>{students.studentNumber}</h3>
                              <p className={c.student__text}>{students.studentText}</p>
                          </li>  
                        )
                    }
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Student