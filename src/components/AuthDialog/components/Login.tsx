import React, {useRef, useState} from 'react';
import {Button, TextField} from '@mui/material';
import {ILoginRequest} from '../../../services/userAuthService';
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

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  }

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const [showPassword, setShowPassword] = useState(false);

  const refEmail = useRef<HTMLInputElement>(null);
  const refPass = useRef<HTMLInputElement>(null);

  return (
    <div className="login">
      <div className="header">
        <h2>Авторизация</h2>
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
        email: refEmail?.current ? refEmail.current.value : '',
        password: refPass?.current ? refPass.current.value : ''
      })}>Войти</Button>
      <p className="fmain-anchor" onClick={handleRegistration}>Регистрация</p>
    </div>
  )
}

export default Login;