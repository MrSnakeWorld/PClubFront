import React from 'react';
import {TextField} from '@mui/material';

interface ILoginProps {
  toggleLogin: () => void;
}

const Login = ({
  toggleLogin
}: ILoginProps) => {
  const handleRegistration = () => {
    toggleLogin()
  }
  return (
    <div className="login">
      <div className="header">
        <h2>Авторизация</h2>
      </div>
      <div className="input">
        <p>E-mail</p>
        <TextField/>
      </div>
      <div className="input">
        <p>Пароль</p>
        <TextField/>
      </div>
      <p onClick={handleRegistration}>Регистрация</p>
    </div>
  )
}

export default Login;