import React from 'react'

import category1 from '../assets/icons/category1.svg'

export default function Categories() {


    let items = [
        {title : "Кафе и Рестораны", discounts: '7 акций', img: category1},
        {title : "Развлечения ", discounts: '7 акций', img: category1},
        {title : "Личные вещи", discounts: '7 акций', img: category1},
        {title : "Красота и уход ", discounts: '7 акций', img: category1},
        {title : "Транспорт", discounts: '7 акций', img: category1},
        {title : "Недвежимость", discounts: '7 акций', img: category1},
        {title : "Медицина ", discounts: '7 акций', img: category1},
        {title : "Работа  ", discounts: '7 акций', img: category1},
        {title : "Услуги  ", discounts: 'услуги', img: category1}

    
    
      ]
  return (
    <div className='flex mt-[0.1rem] bg-[#F3F3F3] h-[81px] mb-[32px]'>

    {items.map((item,index) => (
        <div key={index} className='flex flex-col justify-center text-center items-center mx-[24px] hover:text-[#00B956] '>
            <img className='w-[16px] h-[16px]' src={item.img}/>
            <p>{item.title} ! </p>

        </div>
    ))}

    </div>
  )
}
