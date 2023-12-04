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
import DiscountPagination from '../components/DiscountPagination'
import Footer from '../components/Footer'
import '../index.css'
import MainHeader from '../components/MainHeader'





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
    <div className='main_container'>

        <div className='  h-full flex mx-auto'>
            <div className=' container_pos'>
      <MainHeader/>
      <Slider slides={slides}/>
      <CompanySlider companiesSlides={compSlides} />
      <DiscountPagination/>
      <Footer/>
      </div>
        </div>
      
    </div>
  )
}
