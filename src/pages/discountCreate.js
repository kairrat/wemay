import React from 'react'
import MainHeader from '../components/MainHeader'
import Footer from '../components/Footer'

function DiscountCreate() {
  return (
    <div>
        <MainHeader/>
        <div className=' flex flex-col mx-auto justify-center'>
           

            <div className='flex flex-col mx-auto '>
            <h1 className='font-extrabold text-[2rem]'>
                Опубликовать акцию
            </h1>
                <p className='text-[1.4rem] font-bold text-[#666]'>Заголовок</p>
              
                <input placeholder='SPA программа в салоне' className='border-[1px] py-[0.5rem] px-5 border-solid border-[#999] w-[55rem] rounded-[30px]' type='text'/>
                <button className='border-solid border-[2px] py-4 border-[#00B956] rounded-[30px] text-[#00B976] w-[15rem] mt-[16px] ' >Добавить фото</button>
                <div className='flex flex-col'>
                <p className='text-[1.4rem] font-bold text-[#666]'>описание</p>
                <textarea className='border-[1px] border-solid border-[#666] rounded-lg px-[1rem] h-[10rem] ' placeholder='Введите описание' />
            </div>
            <div className='flex flex-col'>
                <p className='text-[1.4rem] font-bold text-[#666]'>Тип акции</p>
                
                <div>
                <input type='radio' value='скидка' id='1' />
                <label for="1">скидка</label>
                </div>
               
                <div>
                <input type='radio' value="бонус" id='2'/>
                <label for="2">бонус</label>
                </div>
               
<div>
<input type='radio' value='сертификат' id='3' />
                <label for="3">сертификат</label>
</div>
              
            </div>
            <div className='flex flex-col'>
                <p className='text-[1.4rem] font-bold text-[#666]'>Цена</p>
                <input placeholder='Напишите цену' className='border-[1px] py-[0.5rem] px-5 border-solid border-[#999] w-[55rem] rounded-[30px]' type='text' />
            </div>
            <div className='flex flex-col'>
                <p className='text-[1.4rem] font-bold text-[#666]'>Контакты</p>

                <p className='text-[1.4rem] font-bold text-[#666]'>Номер телефона</p>

                <input placeholder='+996  502 555 777' className='border-[1px] py-[0.5rem] px-5 border-solid border-[#999] w-[55rem] rounded-[30px]' type='text' />
                <input placeholder='+996  222 555 777' className='border-[1px] mt-[1rem] py-[0.5rem] px-5 border-solid border-[#999] w-[55rem] rounded-[30px]' type='text' />

                <button className='border-solid py-4 border-[2px] border-[#00B956] rounded-[30px] text-[#00B976] w-[15rem] mt-[16px]'>Добавить еще</button>

            </div>
            <div className='flex flex-col'>
                <p className='text-[1.4rem] font-bold text-[#666]'>Адрес</p>
                <input placeholder='Кулатова 16А' className='border-[1px] py-[0.5rem] px-5 border-solid border-[#999] w-[55rem] rounded-[30px]' type='text' />
                <button className='border-solid py-4 border-[2px] border-[#00B956] rounded-[30px] text-[#00B976] w-[15rem] mt-[16px]'>Добавить еще</button>

            </div>

            <div className='flex flex-row justify-center mb-[4rem]'>
            <button className='border-solid mr-[1rem] py-4 border-[2px] border-[#00B956] rounded-[20px] text-[#00B976] w-[22rem] mt-[16px]'> Предпросмотр</button>
            <button className='border-solid py-4 border-[2px] border-[#555] bg-[#555] rounded-[20px] text-[#888] w-[22rem] mt-[16px]'>Опубликовать</button>

            </div>
            </div>

        


          
           
        </div>
        <Footer/>
    </div>
  )
}

export default DiscountCreate