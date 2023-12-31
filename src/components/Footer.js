import React from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../assets/icons/logo.svg'
import soc1 from '../assets/icons/soc1.svg'
import soc2 from '../assets/icons/soc2.svg'
import soc3 from '../assets/icons/soc3.svg'
import soc4 from '../assets/icons/soc4.svg'
import soc5 from '../assets/icons/soc5.svg'

import '../index.css'





export default function () {

    let navigate = useNavigate();


    
  return (
    <div className='bg-[#F3F3F3]   w-full mx-auto pt-[80px]  relative '>
        <div className=' ml-[9rem]  '>
        <img className='mb-[1rem]' src={logo} alt='logo' />
        <p className='text-[##4F4F4F]' >Сервис скидок и выгодных предложений</p>
        </div>

        <div className=' footer_container flex justify-between  ml-[9rem] mb-[4.6rem]   '>
            <div className='flex flex-col mr-[14rem] mt-[3.75rem] '>
                <p className='text-[20px] font-bold'>О сервисе</p>

                <ul className=' mt-6'>
                    <li className=' mb-6'>
                        <a onClick={ () => { navigate('/about') }} className='hover:underline cursor-pointer '>Контакты</a>
                    </li>
                    <li className=' mb-6'>
                        <a className='hover:underline cursor-pointer '>Как купить </a>
                    </li>
                    <li className=' mb-6'>
                        <a className='hover:underline cursor-pointer '>Реквезиты</a>
                    </li>
                </ul>

            </div>
            <div className='flex flex-col mt-[3.75rem] '>
                <p className='text-[20px] font-bold'>Оплата и доставка</p>

                <ul className=' mt-6'>
                    <li className=' mb-6'>
                        <a className='hover:underline cursor-pointer '>Оплата</a>
                    </li>
                    <li className=' mb-6'>
                        <a className='hover:underline cursor-pointer '>Доставка </a>
                    </li>
                    <li className=' mb-6'>
                        <a className='hover:underline cursor-pointer '>Покупка в кредит</a>
                    </li>
                </ul>

            </div>


            <div className='flex flex-col  mt-[3.75rem]  '>
                <p className='text-[20px] font-bold'>Мы в соцсетях</p>

                <ul className='flex flex-row mt-6' >
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

            </div  >
            
      
          
        </div>
        <div className='flex pb-[1.5rem]  justify-center items-center mx-auto'>
            <p className='text-[#4F4F4F] '>  © wemay 2023 </p>

            </div>
    </div>
  )
}
