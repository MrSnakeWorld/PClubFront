import React, {useState} from 'react';
import {Button, Dialog, Grid, Modal, TextField} from '@mui/material';
import './AuthDialog.css';
import Login from './components/Login';
import Registration from './components/Registration';
import ActionButtons from '../ActionButtons/ActionButtons';
import useToggle from '../../hooks/useToggle';

interface IAuthDialogProps {
  open: boolean;
  toggle: () => void;
  isAuthLogin: boolean;
  setPermission: React.Dispatch<React.SetStateAction<string>>
}

const AuthDialog = ({
  open,
  toggle,
  isAuthLogin,
  setPermission
}: IAuthDialogProps) => {
  const [login, toggleLogin] = useToggle(isAuthLogin)
  const handleCancel = () => {
    setPermission('User');
    toggle();
  }

  const handleConfirm = () => {
    setPermission('Admin');
    toggle();
  }

  return (
    <Dialog
      open={open}
      className="auth-dialog"
    >
      <Grid className="grid">
        {login ?
          <Login toggleLogin={toggleLogin}/> 
          : <Registration toggleLogin={toggleLogin}/>}
        <ActionButtons
          handleCancel={handleCancel}
          handleConfirm={handleConfirm}
        />
        
      </Grid>
    </Dialog>
  )
}
export default AuthDialog;