import React, {useState, useRef} from 'react';
import {Autocomplete, Button, Dialog, Grid, Modal, TextField} from '@mui/material';
import './CreateEntryDialog.css';
import useToggle from '../../hooks/useToggle';
import {defaultUsersString, defaultUserString,IPermission} from '../../constants';
import {ILoginRequest, IRegisterRequest, IUserInfo, loginUser, registerUser} from '../../services/userAuthService';
import computersData from '../../pages/Computers/computersData';
import {ICreateEntry} from '../../App';

interface ICreateEntryDialogProps {
  open: boolean;
  pc?: string;
  toggle: () => void;
  permission: IPermission;
  handleCreateEntry: (entry: ICreateEntry, toggle: () => void) => void;
}

const CreateEntryDialog = ({
  open,
  pc,
  toggle,
  permission,
  handleCreateEntry
}: ICreateEntryDialogProps) => {
  const computers = computersData.map(val => val.name);
  const stringUsers: string[] = JSON.parse(localStorage.getItem('Users') || defaultUsersString);
  console.log(stringUsers);
  const Users = stringUsers.map((val) => JSON.parse(val));
  const allUsers = Users.map(val => `${val.firstName} ${val.secondName}`);

  const currentUser: IUserInfo = JSON.parse(localStorage.getItem('CurrentUser') || defaultUserString);

  const refComputer = useRef<HTMLInputElement>(null);
  const refUser = useRef<HTMLInputElement>(null);
  const refDate = useRef<HTMLInputElement>(null);
  const refBeginTime = useRef<HTMLInputElement>(null);
  const refEndTime = useRef<HTMLInputElement>(null);

  const checkUser = (): string => {
    if (permission === 'User') {
      return `${currentUser.firstName} ${currentUser.secondName}` 
    }
    return refUser?.current ? refUser.current.value : ''
  }
  
  const checkComp = (): string => {
    if (pc) {
      return pc
    }
    return refComputer?.current ? refComputer.current.value : ''
  }

  return (
    <Dialog
      open={open}
      className="create-entry-dialog"
      onClose={toggle}
    >
      <div className="create-entry">
        <Grid container justifyContent={'center'}>
          <Grid item xs={12}>
            <p className="fmain-text">{permission === 'Admin' ? 'Записать' : 'Записаться'}</p>
          </Grid>
          {!pc ? (
            <Grid item xs={12}>
              <Autocomplete 
                disablePortal
                sx={{ width: 400, marginBottom: '20px' }}
                id="combo-box-demo"
                options={computers}
                renderInput={(params) => <TextField className="input" {...params} inputRef={refComputer} label="Выберите компьютер" />}
              />
            </Grid>
          )  : null}
          {permission === 'Admin' ? (
            <Grid item xs={12}>
              <Autocomplete 
                disablePortal
                sx={{ width: 400, marginBottom: '20px' }}
                id="combo-box-demo"
                options={allUsers}
                renderInput={(params) => <TextField className="input" {...params} inputRef={refUser} label="Выберите пользователя" />}
              />
            </Grid>
          ) : null}
          <Grid item xs={12}><TextField className="input" inputRef={refDate} label="Дата" sx={{width: 150, marginBottom: '20px'}}/></Grid>
          <Grid item xs>
            <TextField className="input" label="C" inputRef={refBeginTime} sx={{width: 80, marginBottom: '20px'}}/> 
          </Grid>
          <Grid item xs={6}>
            <TextField className="input" label="До" inputRef={refEndTime} sx={{width:80, marginBottom: '20px'}}/>
          </Grid>
          <Button 
            variant="contained" 
            sx={{
              backgroundColor: '#51a2f1', 
              color: '#fff', 
            }}
            onClick={() => {
              handleCreateEntry({
                date: refDate?.current ? refDate.current.value : '',
                beginTime: refBeginTime?.current ? refBeginTime.current.value : '',
                endTime: refEndTime?.current ? refEndTime.current.value : '',
                user: checkUser(),
                idComp: checkComp(),
              }, toggle)
            }}
          >
            Добавить Запись
          </Button>
        </Grid>
      </div>
    </Dialog>
  )
}
export default CreateEntryDialog;