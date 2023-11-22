import React, { useState } from 'react'
import leftIcon from '../assets/icons/left.svg'
import rightIcon from '../assets/icons/right.svg'
import { Button } from './Button';



const Slider = ({slides}) => {
    const [currentIndex, SetCurrentIndex] = useState(0);

    const toPrevious = () => {
        let isFirstSLide = currentIndex === 0;
        let newIndex = isFirstSLide ?slides.length-1 : currentIndex- 1;
        SetCurrentIndex(newIndex)
}

    const toNext = () => {

        let isLastSLide = currentIndex === slides.length-1
        let newIndex = isLastSLide ? 0 : currentIndex + 1
        SetCurrentIndex(newIndex)
    }
  return (
   <div className=' relative rounded-[48px]  mx-8  justify-center bg-[#DDD]  h-[35rem]'>

    <img src={leftIcon} onClick={() => toPrevious()} className=' absolute top-1/2 transform -translate-y-1/2 left-[32px] cursor-pointer ' />
    <div className='ml-[7rem] absolute top-1/2 transform -translate-y-1/2' >
        <p className=' text-5xl font-extrabold text-[#333] max-w-[554px] mb-[1.2rem]'>{slides[currentIndex].title}</p>
        <p className='text-[#333] text-[20px] mb-[2.4rem] '>{slides[currentIndex].subtitle}</p>
        <Button className='rounded-[2rem] border-[2px] border-black border-solid flex justify-center items-center text-[18px] py-[0.8rem] px-[3rem] '  children={slides[currentIndex].btn} />
    </div>

    <div>
    <img src={slides[currentIndex].url} className='absolute right-0  top-1/2 transform -translate-y-1/2 w-[555px] h-[340px]' />
    </div>
    <img src={rightIcon} onClick={() => toNext()} className='absolute top-1/2 transform -translate-y-1/2 right-[32px] cursor-pointer'  />


   </div>
  );
};

export default Slider;
