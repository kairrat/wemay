import React from 'react'

import category1 from '../assets/icons/category1.svg'
import category2 from '../assets/icons/category2.svg'
import category3 from '../assets/icons/category3.svg'
import category4 from '../assets/icons/category4.svg'
import category5 from '../assets/icons/category5.svg'
import category6 from '../assets/icons/category6.svg'
import category7 from '../assets/icons/category7.svg'
import category8 from '../assets/icons/category8.svg'
import category9 from '../assets/icons/category9.svg'

import categoryBtn from '../assets/icons/category-btn.svg'


export default function Categories() {


    let items = [
        {title : "Кафе и Рестораны", discounts: '7 акций', img: category1},
        {title : "Развлечения ", discounts: '7 акций', img: category2},
        {title : "Личные вещи", discounts: '7 акций', img: category3},
        {title : "Красота и уход ", discounts: '7 акций', img: category4},
        {title : "Транспорт", discounts: '7 акций', img: category5},
        {title : "Недвежимость", discounts: '7 акций', img: category6},
        {title : "Медицина ", discounts: '7 акций', img: category7},
        {title : "Работа  ", discounts: '7 акций', img: category8},
        {title : "Услуги  ", discounts: 'услуги', img: category9}

    
    
      ]
  return (
    <div className='flex flex-wrap mt-[0.1rem] bg-[#F3F3F3] h-[81px] mb-[32px]'>

    {items.map((item,index) => (
        <div key={index} className='flex flex-col  justify-center text-center text-center items-center mx-auto hover:text-[#00B956] '>
            <img className='w-[16px] h-[16px]' src={item.img}/>
            <div className='flex mx-auto items-center text-center'>
            <p className='m-0'>{item.title}</p>
            <img className='m-1' src={categoryBtn}/>
            </div>
       


        </div>
    ))}

    </div>
  )
}
