import React from 'react'
import "./Hamburger.css"
import { FiX } from "react-icons/fi"

const Hamburger = ({isHamburgerActive, setIsHamburgerActive}) => {
  return (
    <div className={isHamburgerActive === true ? "hamburger hamburgeractive" : "hamburger"}>
        <div className="hamburger__wrapper">
            <div className="hambuger__list">
                <h2>Hamburger</h2>
                <FiX className="hamburger__icon" onClick={() => {setIsHamburgerActive(false)}}/>
            </div>
        </div>
    </div>
  )
}

export default Hamburger