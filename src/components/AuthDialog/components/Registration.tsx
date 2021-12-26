import {Button, TextField} from '@mui/material';
import React, {useRef} from 'react';
import {IRegisterRequest} from '../../../services/userAuthService';

interface IRegistrationProps {
  toggleLogin: React.Dispatch<React.SetStateAction<boolean>>;
  handleClick: (userData: IRegisterRequest) => any;
}

const Registration = ({
  toggleLogin,
  handleClick
}: IRegistrationProps) => {
  const handleLogin = () => {
    toggleLogin(true)
  }

  const refFirstname = useRef<HTMLInputElement>(null);
  const refLastname = useRef<HTMLInputElement>(null);
  const refPhone = useRef<HTMLInputElement>(null);
  const refEmail = useRef<HTMLInputElement>(null);
  const refPass = useRef<HTMLInputElement>(null);

  return (
    <div className="registration">
      <div className="header">
        <h2>Регистрация</h2>
      </div>
      <div className="input">
        <p>Имя</p>
        <TextField inputRef={refFirstname}/>
      </div>
      <div className="input">
        <p>Фамилия</p>
        <TextField inputRef={refLastname}/>
      </div>
      <div className="input">
        <p>Номер телефона</p>
        <TextField inputRef={refPhone}/>
      </div>
      <div className="input">
        <p>E-mail</p>
        <TextField inputRef={refEmail}/>
      </div>
      <div className="input">
        <p>Пароль</p>
        <TextField inputRef={refPass}/>
      </div>
      <Button variant="contained" sx={{
        backgroundColor: '#51a2f1', color: '#fff'
      }} onClick={() => handleClick({
        firstName: refFirstname?.current ? refFirstname?.current.value : '',
        secondName: refLastname?.current ? refLastname?.current.value : '',
        email: refEmail?.current ? refEmail?.current.value : '',
        phoneNumber: refPhone?.current ? refPhone?.current.value : '',
        password: refPass?.current ? refPass?.current.value : '',
        role: 'User'
      })}>Зарегистрироваться</Button> <br/>
      <a className="fmain-anchor" onClick={handleLogin}>Есть логин? <br/> Войти</a>
    </div>
  )
}

export default Registration;