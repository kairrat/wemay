import React from 'react'
import MainHeader from '../components/MainHeader'
import Footer from '../components/Footer'
import '../index.css'
import aboutBack from '../assets/images/about_back.jpg'
import soc1 from '../assets/icons/soc1.svg'
import soc2 from '../assets/icons/soc2.svg'
import soc3 from '../assets/icons/soc3.svg'
import soc4 from '../assets/icons/soc4.svg'
import soc5 from '../assets/icons/soc5.svg'
function AboutPage() {
  return (
    <div>
        <MainHeader/>

        <div className=' about_container ' style={{ backgroundImage: `url(${aboutBack})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
    <p className='absolute top-1/2 text-white text-[2rem] left-1/2'>О Нас</p>
</div>



        <div className=' w-1/2 mx-auto   flex flex-col mt-[4rem] justify-center  text-left  '>

            <p className='text-[32px] text-[#333] font-extrabold '> Наш сервис самый лучший</p>
            <p className='max-w-[55rem]' >Значимость этих проблем настолько очевидна, что сложившаяся структура организации требуют от нас анализа дальнейших направлений развития. С другой стороны рамки и место обучения кадров позволяет выполнять важные задания по разработке новых предложений.</p>

            <p className='text-[32px] text-[#333] mt-[2rem] font-extrabold'> Контакты</p>
            <p>sampletext@gmail.com</p>

            <p className='text-[32px] text-[#333] mt-[2rem] font-extrabold'>Соцсети </p>

            <ul className='flex flex-row mt-6  mb-[4rem]' >
                <li className=''>
                        <a className='hover:underline cursor-pointer '><img src={soc5}/></a>
                    </li>
                    <li className='ml-6'>
                        <a className='hover:underline cursor-pointer '><img src={soc1}/></a>
                    </li>
                    <li className='ml-6'>
                        <a className='hover:underline cursor-pointer '> <img src={soc2}/> </a>
                    </li>
                    <li className='ml-6'>
                        <a className='hover:underline cursor-pointer '> <img src={soc3} /> </a>
                    </li>
                    <li className='ml-6 mr-5 '>
                        <a className='hover:underline cursor-pointer '> <img src={soc4} /> </a>
                    </li>
                </ul>
        </div>
        <Footer/>
    </div>
  )
}

export default AboutPage