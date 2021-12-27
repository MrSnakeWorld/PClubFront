import React, {useState, useRef} from 'react';
import {Button, Dialog, Grid, TextField} from '@mui/material';
import './CreateUserDialog.css';
import {IPermission} from '../../constants';

interface ICreateUserDialogProps {
  open: boolean;
  toggle: () => void;
}

const CreateUserDialog = ({
  open,
  toggle,
}: ICreateUserDialogProps) => {

  const refFirstname = useRef<HTMLInputElement>(null);
  const refLastname = useRef<HTMLInputElement>(null);
  const refPhone = useRef<HTMLInputElement>(null);
  const refEmail = useRef<HTMLInputElement>(null);
  // const refPass = useRef<HTMLInputElement>(null);

  const handleCreate = (userData: {
    firstName: string;
    secondName: string;
    email: string;
    phoneNumber: string;
    role: IPermission;
  }) => {
    const user = JSON.stringify(userData);
    localStorage.setItem(userData.email, user);
    if (userData.role !== 'Admin') {
      if (localStorage.getItem('Users') !== null) {
        const users = JSON.parse(localStorage.getItem('Users') || '');
        localStorage.setItem('Users', JSON.stringify([...users, user]));
      } else {
        localStorage.setItem('Users', JSON.stringify([user]));
      }
    }
    toggle();
  }

  return (
    <Dialog
      open={open}
      className="auth-dialog"
      onClose={toggle}
    >
      <Grid className="grid">
        <div className="registration">
          <div className="header">
            <h2 className="fheader">Добавление клиента</h2>
          </div>
          <div className="input">
            <TextField variant="standard" label="Имя" fullWidth inputRef={refFirstname}/>
          </div>
          <div className="input">
            <TextField variant="standard" label="Фамилия" fullWidth inputRef={refLastname}/>
          </div>
          <div className="input">
            <TextField variant="standard" label="Номер телефона" fullWidth inputRef={refPhone}/>
          </div>
          <div className="input">
            <TextField variant="standard" label="Электронная почта" fullWidth inputRef={refEmail}/>
          </div>
          <Button variant="contained" sx={{
            backgroundColor: '#51a2f1', color: '#fff', marginTop: '10px', marginBottom: '10px'
          }} onClick={() => handleCreate({
            firstName: refFirstname?.current ? refFirstname?.current.value : '',
            secondName: refLastname?.current ? refLastname?.current.value : '',
            email: refEmail?.current ? refEmail?.current.value : '',
            phoneNumber: refPhone?.current ? refPhone?.current.value : '',
            // password: refPass?.current ? refPass?.current.value : '',
            role: 'User'
          })}>Добавить</Button> <br/>
    </div>
      </Grid>
    </Dialog>
  )
}
export default CreateUserDialog;