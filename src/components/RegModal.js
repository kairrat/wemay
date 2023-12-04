// RegistrationModal.js
import React, { useState } from 'react';
import Modal from 'react-modal';
import googleIcon from '../assets/icons/googleIcon.svg'
import facebookIcon from '../assets/icons/facebookIcon.svg'


const RegistrationModal = ({ isOpen, closeModal }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleRememberMeChange = () => {
    setRememberMe(!rememberMe);
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Registration Modal"
      className="registration-modal rounded-xl "
      overlayClassName="registration-modal-overlay"
    >
      <div className="registration-form relative rounded-xl">
        <h2 className="text-2xl font-bold mb-4">Зарегистрироваться</h2>
        <div className='flex flex-col'>
        <label className='text-[#535354]' htmlFor="email">Введите email <span className='text-[#EB5757]'> *</span></label>
        <input type="email" id="email" className="mb-4 h-12 border-[1px] border-solid border-[#DDDDDF] rounded-[24px]" />
        </div>
    
<div className='flex flex-col'>
<label className='text-[#535354]' htmlFor="password">Введите пароль <span className='text-[#EB5757]'> *</span></label>
        <div className="password-input">
          <input type={showPassword ? 'text' : 'password'} id="password" className="mb-4 border-[1px] w-full h-12 border-solid border-[#DDDDDF] rounded-[24px]" />
          <button onClick={togglePasswordVisibility}>
            {/* {showPassword ? 'Скрыть пароль' : 'Показать пароль'} */}
          </button>
        </div>
</div>
        

    <div className='flex justify-end mb-[2rem]'>
      <p> <span className='text-[#EB5757]'> *</span> - обязательное поле</p>
    </div>
        <div className="remember-forgot">
          <div className=''>
            <input type="checkbox" id="rememberMe" checked={rememberMe} onChange={handleRememberMeChange} />
            <label htmlFor="rememberMe">Запомнить меня</label>
          </div>
          <a href="#">Забыли пароль?</a>
        </div>

        <button className="mx-auto text-center flex justify-center bg-[#089449] rounded-3xl text-white h-[4.25rem] text-center flex justify-center items-center w-full text-[18px] mt-[2rem] ">Создать аккаунт</button>

        <div className="login-options">
          <p>Есть аккаунт? <span className='text-[#2F80ED]'>Войдите </span> </p>
          <div className="text-center  flex justify-center  items-center mt-[2rem]   flex-row">
            <button className=" border-[1px] border-solid rounded-[24px] py-[10px] px-[1.5rem] flex justify-center text-center items-center  border-[#a5a3a3] mr-[20px] "> <img src={googleIcon} className='w-[40px] h-[40px]' /> Войти через Google</button>
            <button className="facebook-login border-[1px] border-solid rounded-[24px] py-[10px] px-[1.5rem] flex justify-center text-center items-center border-[#a5a3a3] "> <img src={facebookIcon} className='w-[40px] h-[40px]' /> Войти через Facebook</button>
          </div>
        </div>
      </div>
      <button onClick={closeModal} className=" absolute top-0 right-0 w-[3rem] h-[3rem] ">
        &times;
      </button>
    </Modal>
  );
};

export default RegistrationModal;
