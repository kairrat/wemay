// Sidebar.js
import React, { useState } from 'react';
import sideBarIcon  from '../assets/icons/sidebar.svg'
import closeIcon  from '../assets/icons/close.svg'


import image  from '../assets/images/Image.png'
import image1  from '../assets/images/Image (1).png'
import image2  from '../assets/images/Image (2).png'
import image3  from '../assets/images/Image (3).png'
import image4  from '../assets/images/Image (4).png'
import image5  from '../assets/images/Image (5).png'
import image6  from '../assets/images/Image (6).png'
import image7  from '../assets/images/Image (7).png'


const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  let items = [
    {title : "Кафе и Рестораны", discounts: '7 акций', img: image},
    {title : "Развлечения ", discounts: '7 акций', img: image1},
    {title : "Личные вещи", discounts: '7 акций', img: image2},
    {title : "Красота и уход ", discounts: '7 акций', img: image3},
    {title : "Транспорт", discounts: '7 акций', img: image4},
    {title : "Недвежимость", discounts: '7 акций', img: image5},
    {title : "Медицина ", discounts: '7 акций', img: image6},
    {title : "Работа  ", discounts: '7 акций', img: image7}


  ]

  return (
    <div className={` ${isOpen ? ' absolute   left-0 top-0 h-inherit  w-[360px] shadow-2xl    hover:shadow-4xl      z-50 bg-[#fff]  mb-8 ' : 'z-50 '}`}>
      <button onClick={toggleSidebar} className={`${isOpen ? "absolute right-[-30px] top-2 " : ' w-[32px] h-[32px] `'}`}>
        <img  src={isOpen ?closeIcon  :sideBarIcon } alt='sidebar' />
      </button>
      {isOpen && (
        <div className='flex flex-col relative  '>
             <div className="flex flex-col justify-center px-[32px] w-[310px] ">
        <button className=" flex text-base mt-[24px] border-b-[1px] border-solid border-[#D7D7D7] ">Главная</button>
        <button className="flex text-base  mt-[24px] border-b-[1px] border-solid border-[#D7D7D7]">О нас</button>
        <button className="flex text-base  mt-[24px] border-b-[1px] border-solid border-[#D7D7D7] mb-[24px]">Выйти</button>
      </div>
     
      
      {items.map((item,index) => (
     <div className=" flex justify-center mx-auto my-[0.5rem]  relative" key={index}>
     <div className="w-[310px] h-[149px] bg-gradient-to-r from-blue-500 to-blue-300 rounded-[12px]">
        <div className='flex flex-col absolute bottom-[1.3rem]'>
        <p>{item.title} </p>
       <p>{item.discounts}</p>
        </div>
      <div className='absolute right-0'>
      <img src={item.img} className=' object-contain  ' />

      </div>
     </div>
   </div>
      ))}
      
        </div>
      )}
  
     
    </div>
  );
};

export default Sidebar;
