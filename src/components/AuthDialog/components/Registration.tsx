import {Button, TextField} from '@mui/material';
import React from 'react';

interface IRegistrationProps {
  toggleLogin: React.Dispatch<React.SetStateAction<boolean>>;
  handleClick: () => any;
}

const Registration = ({
  toggleLogin,
  handleClick
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
      <Button variant="contained" sx={{
        backgroundColor: '#51a2f1', color: '#fff'
      }} onClick={handleClick}>Зарегистрироваться</Button> <br/>
      <a className="fmain-anchor" onClick={handleLogin}>Есть логин? <br/> Войти</a>
    </div>
  )
}

export default Registration;