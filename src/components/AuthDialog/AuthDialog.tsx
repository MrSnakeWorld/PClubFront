import React, {useState} from 'react';
import {Button, Dialog, Grid, Modal, TextField} from '@mui/material';
import './AuthDialog.css';
import Login from './components/Login';
import Registration from './components/Registration';
import useToggle from '../../hooks/useToggle';
import {IPermission} from '../../constants';
import {ILoginRequest, IRegisterRequest, IUserInfo, loginUser, registerUser} from '../../services/userAuthService';

interface IAuthDialogProps {
  open: boolean;
  toggle: () => void;
  isAuthLogin: boolean;
  isCreateAdmin: boolean;
  setAuthLogin: React.Dispatch<React.SetStateAction<boolean>>;
  setPermission: React.Dispatch<React.SetStateAction<IPermission>>;
}

const AuthDialog = ({
  open,
  toggle,
  isAuthLogin,
  isCreateAdmin = false,
  setAuthLogin,
  setPermission
}: IAuthDialogProps) => {

  const handleLogin = (userData: ILoginRequest) => {
    const user = JSON.parse(localStorage[userData.email])
    if (user.password === userData.password) {
      setPermission(user.role);
      localStorage.setItem('CurrentUser', JSON.stringify(user));
      toggle();
    }
  }

  const handleRegistration = (userData: IRegisterRequest) => {
    const user = JSON.stringify(userData);
    localStorage.setItem(userData.email, user);
    localStorage.setItem('CurrentUser', user);
    if (userData.role !== 'Admin') {
      if (localStorage.getItem('Users') !== null) {
        const users = JSON.parse(localStorage.getItem('Users') || '');
        localStorage.setItem('Users', JSON.stringify([...users, user]));
      } else {
        localStorage.setItem('Users', JSON.stringify([user]));
      }
    }
    handleLogin({email: userData.email, password: userData.password})
  }

  return (
    <Dialog
      open={open}
      className="auth-dialog"
      onClose={toggle}
    >
      <Grid className="grid">
        {
          isAuthLogin && !isCreateAdmin
          ? <Login toggleLogin={setAuthLogin} handleClick={handleLogin}/>
            : <Registration toggleLogin={setAuthLogin} handleClick={handleRegistration} isCreateAdmin={isCreateAdmin}/>
        }
      </Grid>
    </Dialog>
  )
}
export default AuthDialog;