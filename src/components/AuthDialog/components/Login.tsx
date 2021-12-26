import React, {useRef} from 'react';
import {Button, TextField} from '@mui/material';
import {ILoginRequest} from '../../../services/userAuthService';

interface ILoginProps {
  toggleLogin: React.Dispatch<React.SetStateAction<boolean>>;
  handleClick: (userData: ILoginRequest) => any;
}

const Login = ({
  toggleLogin,
  handleClick
}: ILoginProps) => {
  const handleRegistration = () => {
    toggleLogin(false)
  }

  const refEmail = useRef<HTMLInputElement>(null);
  const refPass = useRef<HTMLInputElement>(null);

  return (
    <div className="login">
      <div className="header">
        <h2>Авторизация</h2>
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
        email: refEmail?.current ? refEmail.current.value : '',
        password: refPass?.current ? refPass.current.value : ''
      })}>Войти</Button>
      <p className="fmain-anchor" onClick={handleRegistration}>Регистрация</p>
    </div>
  )
}

export default Login;