import React from 'react'
import sliderImg from '../assets/images/slider-img.png'
import leftIcon from '../assets/icons/left.svg'
import rightIcon from '../assets/icons/right.svg'


const Slider = () => {
  return (
    <div className="relative w-[1377px] h-[508px] rounded-[48px]  mx-auto bg-[#D7D7D7]">
      <img
        src={sliderImg}
        alt="Slider Image"
        className="absolute right-0 top-[30%]   object-cover"
      />


      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1/3 text-center">
        <div className='ml-[118px]'>
        <h1 className="text-4xl font-extrabold ">Подарки для неё и для него</h1>
        <p className="text-lg">Покупай прямо сейчас</p>
        <button className="border-[1px] border-solid  border-[#333]  text-[#333] px-4 py-2 mt-4 rounded-full">
          Подробнее
        </button>


        </div>

      </div>
      <img src={leftIcon} className=' absolute  top-[50%]  left-[2%] cursor-pointer ' />
      <img src={rightIcon} className=' absolute top-[50%]  right-[2%] cursor-pointer ' />


    </div>
  );
};

export default Slider;
