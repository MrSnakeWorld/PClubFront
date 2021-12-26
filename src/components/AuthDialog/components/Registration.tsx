import {Button, TextField} from '@mui/material';
import React, {useRef, useState} from 'react';
import {IRegisterRequest} from '../../../services/userAuthService';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

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

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  }

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const [showPassword, setShowPassword] = useState(false);

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
        <TextField variant="standard" label="Имя" inputRef={refFirstname}/>
      </div>
      <div className="input">
        <TextField variant="standard" label="Фамилия" inputRef={refLastname}/>
      </div>
      <div className="input">
        <TextField variant="standard" label="Номер телефона" inputRef={refPhone}/>
      </div>
      <div className="input">
        <TextField variant="standard" label="Электронная почта" inputRef={refEmail}/>
      </div>
      <div className="input">
        <FormControl sx={{ width: '25ch' }} variant="standard">
          <InputLabel htmlFor="standard-adornment-password">Пароль</InputLabel>
          <Input
            id="standard-adornment-password"
            type={showPassword ? 'text' : 'password'}
            inputRef={refPass}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
      </div>
      <Button variant="contained" sx={{
        backgroundColor: '#51a2f1', color: '#fff', marginTop: '10px', marginBottom: '10px'
      }} onClick={() => handleClick({
        firstName: refFirstname?.current ? refFirstname?.current.value : '',
        secondName: refLastname?.current ? refLastname?.current.value : '',
        email: refEmail?.current ? refEmail?.current.value : '',
        phoneNumber: refPhone?.current ? refPhone?.current.value : '',
        password: refPass?.current ? refPass?.current.value : '',
        role: 'Admin'
      })}>Зарегистрироваться</Button> <br/>
      <p>
        <a className="fmain-anchor reg-anchor" onClick={handleLogin}>Есть логин? <br/> Войти</a>
      </p>
    </div>
  )
}

export default Registration;