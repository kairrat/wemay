import React from 'react'
import { Button } from './Button'
import discountIcon from '../assets/icons/discount.svg'
import alarmIcon from '../assets/icons/alarm.svg'
import smileIcon from '../assets/icons/smile.svg'
import {useNavigate} from 'react-router-dom'

export default function Banner() {
  let navigate = useNavigate()
  return (
    <div className='flex justify-center items-center  bg-[#F3F3F3]  h-[70px] border-b-[1px] border-solid border-[#DDD] '> 
    <Button onClick={() => {navigate('/discount-create')}} className={'rounded-[100px] border-[1px] border-solid   mx-[24px]  py-[6px] h-[30px] px-[10px] border-[#9B51E0]  text-[#9B51E0]  '} children={'Акции дня'} image={discountIcon}/>
    <Button className={'rounded-[100px] border-[1px] border-solid   mx-[24px] py-[6px] h-[30px] px-[10px] border-[#D63D3D]  text-[#D63D3D]  '} children={'Скоро закончатся'} image={alarmIcon}/>
    <Button className={'rounded-[100px] border-[1px] border-solid   mx-[24px] py-[6px] h-[30px] px-[10px] border-[#00B856]  text-[#00B856]  '} children={'Бесплатно'} image={smileIcon}/>
</div>
  )
}
