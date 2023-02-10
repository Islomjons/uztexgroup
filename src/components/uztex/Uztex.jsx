import React from 'react'
import { Link } from 'react-router-dom'
import c from "./Uztex.module.css"

const Uztex = () => {
  return (
    <div className={c.uztex}>
        <div className={c.container}>
            <div className={c.uztex__container}>
                <div className={c.uztex__left}>
                    <div className={c.uztex__left__wrapper}>
                        <p className={c.uztex__left__title}>SINCE <br />2009</p>
                    </div>
                </div>
                <div className={c.uztex__right}>
                    <p className={c.uztex__right__title}>Kompaniya haqida</p>
                    <h3 className={c.uztex__right__heading}>«UZTEX GROUP»</h3>
                    <p className={c.uztex__right__text}>UZTEX kompaniyalar guruhi MDH mamlakatlarida to'qimachilik mahsulotlarini vertikal integratsiyalashgan etakchi ishlab chiqaruvchisi hisoblanadi. "UZTEX GROUP" ning ishlab chiqarish quvvatlari paxtadan to'qimachilik mahsulotlarining butun assortimentini ishlab chiqarishga imkon beradi: qo'pol va bo'yalgan iplarning barcha turlari, qo'pol va bo'yalgan trikotaj mato, tayyor trikotaj, paypoq va terri mahsulotlari.</p>
                    <p className={c.uztex__right__text1}>"UZTEX GROUP" ning tarixi 10 yildan ko'proq vaqtga borib taqaladi, o'shanda 2009 yilda bo'yalgan tuval ishlab chiqarish bo'yicha birinchi zavod ishga tushirilgan.</p>
                    <p className={c.uztex__right__text2}>Bugungi kunda O'zbekiston Respublikasining turli hududlarida joylashgan "UZTEX GROUP" korxonalarining yillik ishlab chiqarish quvvati 45000 tonnadan ortiq har xil turdagi kulrang ipni tashkil qiladi.</p>
                    <Link className={c.uztex__right__link}>Biz haqimizda koproq</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Uztex