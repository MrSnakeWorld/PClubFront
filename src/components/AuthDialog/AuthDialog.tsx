import React, {useState} from 'react';
import {Button, Dialog, Grid, Modal, TextField} from '@mui/material';
import './AuthDialog.css';
import Login from './components/Login';
import Registration from './components/Registration';
import useToggle from '../../hooks/useToggle';
import {IPermission} from '../../constants';
import {ILoginRequest, IRegisterRequest, loginUser, registerUser} from '../../services/userAuthService';

interface IAuthDialogProps {
  open: boolean;
  toggle: () => void;
  isAuthLogin: boolean;
  setAuthLogin: React.Dispatch<React.SetStateAction<boolean>>;
  setPermission: React.Dispatch<React.SetStateAction<IPermission>>;
}

const AuthDialog = ({
  open,
  toggle,
  isAuthLogin,
  setAuthLogin,
  setPermission
}: IAuthDialogProps) => {

  const handleLogin = (userData: ILoginRequest) => {
    console.log('Login', userData);
    loginUser(userData).then((res) => {
      setPermission('User');
      toggle();
    }).catch((err) => console.log('Login', err))
  }

  const handleRegistration = (userData: IRegisterRequest) => {
    console.log('Register',userData);
    registerUser(userData).then((res) => {
      handleLogin({email: userData.email, password: userData.password})
    }).catch((err) => console.log('Register', err))
  }

  return (
    <Dialog
      open={open}
      className="auth-dialog"
    >
      <Grid className="grid">
        {
          isAuthLogin
          ? <Login toggleLogin={setAuthLogin} handleClick={handleLogin}/>
            : <Registration toggleLogin={setAuthLogin} handleClick={handleRegistration}/>
        }
      </Grid>
    </Dialog>
  )
}
export default AuthDialog;