import React from 'react'
import "./Hamburger.css"
import { FiX } from "react-icons/fi"
import HamburgerLinkJson from "../../dummiy-data.hamburger.json"
import { Link } from 'react-router-dom'

const Hamburger = ({isHamburgerActive, setIsHamburgerActive}) => {
  return (
    <div className={isHamburgerActive === true ? "hamburger hamburgeractive" : "hamburger"}>
        <div className="hamburger__wrapper">
            <div className="hambuger__list__wrapper">
                <div>
                    <ul className="hamburger__list">
                        {
                          HamburgerLinkJson.map(links => 
                              <li className="hamburger__item">
                                <Link className="hamburger__link">{links.hamburgerLinks}</Link>
                              </li>
                            )
                        }
                    </ul>
                    <p className="hamburger__bottom__text">© 2009-2022 <span className="hamburger__bottom__bold">UZTEX GROUP</span>. All Rights Reserved. Design by <span className="hamburger__bottom__bold1">md.uz</span></p>
                </div>
                <FiX className="hamburger__icon" onClick={() => {setIsHamburgerActive(false)}}/>
            </div>
        </div>
    </div>
  )
}

export default Hamburger