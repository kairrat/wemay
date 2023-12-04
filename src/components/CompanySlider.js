import React, { useState } from 'react';
import '../index.css'
import leftIcon from '../assets/icons/left.svg'
import rightIcon from '../assets/icons/right.svg'
const CompanySlider = ({ companiesSlides }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const slidesPerPage = 5;
    const totalSlides = companiesSlides.length;
  
    const toPrevious = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? totalSlides - slidesPerPage : prevIndex - 1
      );
    };
  
    const toNext = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex + slidesPerPage >= totalSlides ? 0 : prevIndex + 1
      );
    };
  
    const showMore = () => {
    };
  
    return (
      <div className="CompanySlider">
      <h1 className="font-bold text-2xl text-[#333] ml-[9rem] mt-[3.75rem]">Компании</h1>
    
      <div className="overflow-x-auto md:overflow-hidden mt-4">
        <div className="grid grid-flow-col auto-cols-max gap-x-4 transition-transform ease-in-out duration-300 transform translate-x-[-204px*currentIndex]">
          {companiesSlides
            .slice(currentIndex, currentIndex + slidesPerPage)
            .map((slide, index) => (
              <div
                key={index}
                className="w-[204px] h-[280px] mx-[31px] transition-shadow hover:shadow-lg bg-[#fff] rounded-[24px] border-[1px] border-solid border-[#F3F3F3] m-1"
              >
                <img src={slide.url} alt={slide.title} className="w-[180px] mx-auto h-[168px] object-cover" />
                <h3 className="ml-[20px]">Акций: <span className="font-bold">{slide.discount}</span></h3>
                <h3 className="ml-[20px]">Скидки до: <span className="font-bold">{slide.discountEnd}</span></h3>
              </div>
            ))}
        </div>
      </div>
      <img
  src={leftIcon}
  className="absolute top-1/2 transform -translate-y-1/2 h-4 left-2 cursor-pointer hidden md:block"
  onClick={toPrevious}
/>
<img
  src={rightIcon}
  className="absolute top-1/2 transform -translate-y-1/2 h-4 right-2 cursor-pointer hidden md:block"
  onClick={toNext}
/>

    
      <button className="mt-4 text-[#2F80ED]" onClick={showMore}>
        Показать еще
      </button>
    </div>
    
    );
  };
  
  
export default CompanySlider;
