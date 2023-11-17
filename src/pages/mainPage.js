import React from 'react'
import { Button } from '../components/Button'
import Banner from '../components/Banner'
import Header from '../components/Header'
import Categories from '../components/Categories'
import Slider from '../components/Slider'




export default function MainPage() {
  return (
    <div className=' w-[100vw] h-[100vh]'>

        <div className=' max-w-[1440px] flex mx-auto  '>
            <div className='flex flex-col   '>
      <Banner/>
      <Header/>
      <Categories/>
    <Slider/>
      </div>
      

        </div>
      
    </div>
  )
}
