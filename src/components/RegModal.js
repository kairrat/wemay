// RegistrationModal.js
import React, { useState } from 'react';
import Modal from 'react-modal';

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
      <div className="registration-form rounded-xl">
        <h2 className="text-2xl font-bold mb-4">Зарегистрироваться</h2>
        <div className='flex flex-col'>
        <label className='text-[#535354]' htmlFor="email">Введите email</label>
        <input type="email" id="email" className="mb-4 h-12 border-[1px] border-solid border-[#DDDDDF] rounded-[24px]" />
        </div>
    
<div className='flex flex-col'>
<label className='text-[#535354]' htmlFor="password">Введите пароль</label>
        <div className="password-input">
          <input type={showPassword ? 'text' : 'password'} id="password" className="mb-4 border-[1px] w-full h-12 border-solid border-[#DDDDDF] rounded-[24px]" />
          <button onClick={togglePasswordVisibility}>
            {/* {showPassword ? 'Скрыть пароль' : 'Показать пароль'} */}
          </button>
        </div>
</div>
        

        <div className="remember-forgot">
          <div>
            <input type="checkbox" id="rememberMe" checked={rememberMe} onChange={handleRememberMeChange} />
            <label htmlFor="rememberMe">Запомнить меня</label>
          </div>
          <a href="#">Забыли пароль?</a>
        </div>

        <button className="mx-auto text-center flex justify-center bg-[#089449] rounded-3xl text-white h-[4.25rem] text-center flex justify-center items-center w-full text-[18px] mt-[2rem] ">Создать аккаунт</button>

        <div className="login-options">
          <p>Есть аккаунт? <span className='text-[#2F80ED]'>Войдите </span> </p>
          <div className="social-login">
            <button className="google-login">Войти через Google</button>
            <button className="facebook-login">Войти через Facebook</button>
          </div>
        </div>
      </div>
      <button onClick={closeModal} className="close-button">
        &times;
      </button>
    </Modal>
  );
};

export default RegistrationModal;
