import React from 'react';

import advant1 from '../../icon/advant1.png'
import advant2 from '../../icon/advant2.png'
import advant3 from '../../icon/advant3.png'
import advant4 from '../../icon/advant4.png'

import './advantages.sass'

function Advantages () {

  const discription = {
    cause: "Почему нужно выбрать именно нас?",
    dis1: "Мы продаем только проверенный, высококачественный товар.",
    dis2: "У нас самый большой ассортимент лопат среди всех дестрибьюторов.",
    dis3: "Мы просто делаем свою работу и не задаем лишних вопросов.",
    dis4: "У нас самые выгодные цены на рынке лопат, благодаря прямой работе с производителями."
  }


  return (
    <div>
      <h2 className="causes">{discription.cause}</h2>
      <ul className="advant">
        <li className="advant_item"><img src={advant1} alt="" /><span>{discription.dis1}</span></li>
        <li className="advant_item"><span>{discription.dis2}</span><img src={advant2} alt="" /></li>
        <li className="advant_item"><img src={advant3} alt="" /><span>{discription.dis3}</span></li>
        <li className="advant_item"><span>{discription.dis4}</span><img src={advant4} alt="" /></li>
      </ul>
  </div>
  );
}

export default Advantages;