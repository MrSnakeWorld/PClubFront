import {TextField} from '@mui/material';
import React from 'react';

interface IRegistrationProps {
  toggleLogin: React.Dispatch<React.SetStateAction<boolean>>;
}

const Registration = ({
  toggleLogin
}: IRegistrationProps) => {
  const handleLogin = () => {
    toggleLogin(true)
  }

  return (
    <div className="registration">
      <div className="header">
        <h2>Регистрация</h2>
      </div>
      <div className="input">
        <p>Имя</p>
        <TextField/>
      </div>
      <div className="input">
        <p>Фамилия</p>
        <TextField/>
      </div>
      <div className="input">
        <p>Номер телефона</p>
        <TextField/>
      </div>
      <div className="input">
        <p>E-mail</p>
        <TextField/>
      </div>
      <div className="input">
        <p>Пароль</p>
        <TextField/>
      </div>
      <a onClick={handleLogin}>Есть логин? <br/> Войти</a>
    </div>
  )
}

export default Registration;