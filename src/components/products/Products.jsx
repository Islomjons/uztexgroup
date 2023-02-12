import c from "./Products.module.css"
import { v4 as uuidv4 } from 'uuid';
import { BsChevronLeft, BsChevronRight } from "react-icons/bs"
import productsJson from "../../dummiy-data.products.json"
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

const Products = () => {
    const { t } = useTranslation()
    const elProducts = useRef()
    const [productsCarausel, setProductsCarausel] = useState(0)
    const swipeRight = () => {
        if (productsCarausel < productsJson.length - 1) {
            setProductsCarausel(productsCarausel => productsCarausel + 1)
        }else{
            setProductsCarausel(0)
        }
    }

    const swipeLeft =() => {
        if (productsCarausel > 0) {
            setProductsCarausel(productsCarausel => productsCarausel - 1)
        }else{
            productsCarausel(productsJson.length - 1)
        }
    }

    useEffect(() => {
        elProducts.current.scrollLeft = productsCarausel * elProducts.current.offsetWidth
    }, [productsCarausel])
  return (
    <div className={c.products}>
        <div className={c.container}>
            <div className={c.products__container}>
                <div className={c.products__wrapper}>
                    <h3 className={c.produvts__heading}>{t("ourFactory")}</h3>
                </div>
                <button className={c.products__btn} data-btn-type="left" onClick={swipeLeft}>
                    <BsChevronLeft />
                </button>
                <ul className={c.products__list} ref={elProducts}>
                    {
                        productsJson.map(product => 
                            <li key={uuidv4()} className={c.products__item}>
                                <img className={c.products__img} src={product} alt="" />
                            </li>    
                        )
                    }
                </ul>
                <button className={c.products__btn} data-btn-type="right" onClick={swipeRight}>
                    <BsChevronRight />
                </button>
            </div>
        </div>
    </div>
  )
}

export default Products