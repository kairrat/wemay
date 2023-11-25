import React from 'react';
import likes from '../assets/icons/likes.svg'
const Card = ({ ...data }) => {
  return (
    <div className="w-1/2 p-4">
      <div className="bg-white rounded-lg overflow-hidden relative h-[16rem] w-[33rem]">
        <img
          src={data.image}
          alt="Card Image"
          className="w-full h-full object-cover rounded-[24px]"
        />
        <div className=" flex justify-center absolute bottom-0 left-0 p-2  bg-gradient-to-r from-blue-500 via-blue-400 rounded-bl-[24px] rounded-br-[24px] w-[5rem]  h-[3rem]">
          <span className='text-white text-2xl font-bold'>{data.discount}</span>
        </div>

        <div className=" flex flex-row  justify-center items-center absolute bottom-0 right-0 p-2 bg-gradient-to-l from-black opacity-20 via-black to-transparent rounded-bl-[24px] rounded-br-[24px]    to-transparent w-[5rem]  h-[3rem]">
        <img className='w-[18px] h-[18px]' src={likes} />
         <span className='text-white text-2xl font-bold'> {data.likes}</span>
        </div>
      </div>

      <div className="mt-2">
        <p className="text-sm text-gray-700">SPA-программа в SPA-салоне Shy Lady</p>
      </div>
      <div className="flex justify-start mt-4">
        <span className="text-gray-500 line-through">от 1 500 сом</span>
        <span className="text-black font-bold ml-4">от 750 сом</span>
      </div>
    </div>
  );
};




export default Card;
