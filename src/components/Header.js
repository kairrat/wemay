import React, { useState } from 'react'
import Sidebar from './SideBar'
import logo from '../assets/icons/wemay.svg'
import search from '../assets/icons/search.svg'
import user from '../assets/icons/user.svg'

import { Button } from './Button'
import RegistrationModal from './RegModal'



export default function Header() {

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
    console.log()
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
  return (
    <div className='flex justify-center h-[111px]  items-center bg-[#F3F3F3]    '>
        <Sidebar/>
        <img className='w-[124px] h-[24px] ml-[24px] ' src={logo} alt='WEMAY'/>
        <div className='flex items-center  w-[578px] h-[51px] border-[1px] border-solid border-[#333333] rounded-[100px] ml-[100px]'>
          
        <div>
            <img src={search} alt='search icon' className=' pl-[24px] pr-[8px] ' />
        </div>
        <input
        type="text"
        placeholder="Поиск акций"
        className=" bg-transparent outline-0 w-[100%]"
      />



        </div>
        <Button onClick={openModal}className={'border-[1px] ml-40 rounded-[100px] w-[127px] px-[24px] h-[53px] border-solid border-[#333]'} image={user} children={'Войти'} />
        <RegistrationModal isOpen={modalIsOpen} closeModal={closeModal} />

    </div>
  )
}
