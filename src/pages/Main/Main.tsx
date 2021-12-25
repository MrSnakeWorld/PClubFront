import {Dialog} from '@mui/material';
import React, {useState} from 'react';
import AuthDialog from '../../components/AuthDialog/AuthDialog';
import useToggle from '../../hooks/useToggle';
import Admin from '../Admin/Admin';
import Client from '../Client/Client';
import './Main.css';

const Main = () => {
  // const [isOpen, setIsOpen] = useState<boolean>(true);
  const [open, toggleOpen] = useToggle(true);
  const [permission, setPermission] = useState('Client');
  console.log(permission);
  return (
    <div>
      {permission === 'Client' ? <Client/> : <Admin/>}
      <AuthDialog 
        setPermission={setPermission}
        open={open}
        toggle={toggleOpen}
        isAuthLogin={true}
      />
    </div>
  )
}
export default Main;