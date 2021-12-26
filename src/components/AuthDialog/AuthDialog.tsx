import React, {useState} from 'react';
import {Button, Dialog, Grid, Modal, TextField} from '@mui/material';
import './AuthDialog.css';
import Login from './components/Login';
import Registration from './components/Registration';
import useToggle from '../../hooks/useToggle';
import {IPermission} from '../../constants';

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

  const handleLogin = () => {
    setPermission('User');
    toggle();
  }

  const handleRegistration = () => {
    setPermission('Admin');
    toggle();
  }


  return (
    <Dialog
      open={open}
      className="auth-dialog"
    >
      <Grid className="grid">
        {
          isAuthLogin ?
            <Login toggleLogin={setAuthLogin} handleClick={handleLogin}/>
            : <Registration toggleLogin={setAuthLogin} handleClick={handleRegistration}/>
        }
      </Grid>
    </Dialog>
  )
}
export default AuthDialog;