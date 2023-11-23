import React from 'react'
import Banner from '../components/Banner'
import Header from '../components/Header'
import Categories from '../components/Categories'
import Slider from '../components/Slider'
import slider1 from '../assets/images/slider-img.png'
import CompanySlider from '../components/CompanySlider'
import brand1 from '../assets/images/brand1.png'
import brand2 from '../assets/images/brand2.png'
import brand3 from '../assets/images/brand3.png'
import brand4 from '../assets/images/brand4.png'
import brand5 from '../assets/images/brand5.png'
import brand6 from '../assets/images/brand6.png'





export default function MainPage() {

    const slides = [
        { title: 'Подарки для неё и для него', subtitle : 'Покупай прямо сейчас', btn: 'Подробнее', url: slider1 },
        { title: 'Выгодные акции', subtitle : 'Каждый день и круглый год!', btn: 'Подробнее', url: slider1 }
    ]

    const compSlides = [
        { discount: 14, discountEnd : 50, url: brand1 },
        { discount: 14, discountEnd : 50, url: brand2 },
        { discount: 14, discountEnd : 50, url: brand3 },
        { discount: 14, discountEnd : 50, url: brand4 },
        { discount: 14, discountEnd : 50, url: brand5 },
        { discount: 14, discountEnd : 50, url: brand6 }

    ]


  return (
    <div className=' w-[100vw] h-[100vh]'>

        <div className=' max-w-[1440px] flex mx-auto  '>
            <div className='flex flex-col   '>
      <Banner/>
      <Header/>
      <Categories/>
      <Slider slides={slides}/>
      <CompanySlider companiesSlides={compSlides} />


      </div>
      

        </div>
      
    </div>
  )
}
