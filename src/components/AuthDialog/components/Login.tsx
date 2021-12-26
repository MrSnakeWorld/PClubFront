import React from 'react';
import {Button, TextField} from '@mui/material';

interface ILoginProps {
  toggleLogin: React.Dispatch<React.SetStateAction<boolean>>;
  handleClick: () => any;
}

const Login = ({
  toggleLogin,
  handleClick
}: ILoginProps) => {
  const handleRegistration = () => {
    toggleLogin(false)
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
      <Button variant="contained" sx={{
        backgroundColor: '#51a2f1', color: '#fff'
      }} onClick={handleClick}>Войти</Button>
      <p className="fmain-anchor" onClick={handleRegistration}>Регистрация</p>
    </div>
  )
}

export default Login;