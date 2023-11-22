import React from 'react'
import Banner from '../components/Banner'
import Header from '../components/Header'
import Categories from '../components/Categories'
import Slider from '../components/Slider'
import slider1 from '../assets/images/slider-img.png'





export default function MainPage() {

    const slides = [
        { title: 'Подарки для неё и для него', subtitle : 'Покупай прямо сейчас', btn: 'Подробнее', url: slider1 },
        { title: 'Выгодные акции', subtitle : 'Каждый день и круглый год!', btn: 'Подробнее', url: slider1 }

    ]


  return (
    <div className=' w-[100vw] h-[100vh]'>

        <div className=' max-w-[1440px] flex mx-auto  '>
            <div className='flex flex-col   '>
      <Banner/>
      <Header/>
      <Categories/>
      <Slider slides={slides}/>
      </div>
      

        </div>
      
    </div>
  )
}
