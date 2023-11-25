import React, { useState } from 'react'
import { Button } from './Button'
import mapICon from '../assets/icons/map.svg'
import Card from './Card'
import CardList from './CardList'
import MapModal from './mapModal'
export default function DiscountPagination() {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
      setModalIsOpen(true);
      console.log('open modal')
    };
  
    const closeModal = () => {
      setModalIsOpen(false);
    };
  return (
    <div className=' max-w-[1144px] ml-[9rem] mt-[3.75rem]'>
        <h1 className='font-bold text-2xl text-[#333] '> Все акции</h1>
        <div className='flex justify-between  '>     
        <select className='mt-[1rem] border-[1px] border-solid border-[#DDDDDF] px-auto py-[12px] rounded-lg text-center '>
            <option>
                По умолчанию
            </option>
            <option>
                По возрастанию
            </option>
            <option>
                По убыванию
            </option>
        </select>
    <Button onClick={openModal} image={mapICon} className={'  border-black rounded-[100px] border-[1px] py-2 px-6  border-solid '} children={"Акций на карте"} />
    <MapModal isOpen={modalIsOpen} closeModal={closeModal} />

        </div>



        <CardList/>

    </div>
  )
}
