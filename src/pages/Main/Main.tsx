import {Dialog} from '@mui/material';
import React, {useState} from 'react';
import AppHeader from '../../components/AppHeader/AppHeader';
import AuthDialog from '../../components/AuthDialog/AuthDialog';
import useToggle from '../../hooks/useToggle';
import './Main.css';

const Main = () => {
  // const [isOpen, setIsOpen] = useState<boolean>(true);
  const [open, toggleOpen] = useToggle(true);
  const [permission, setPermission] = useState('Client');
  const barElements = ['О нас', 'Запись', 'Компьютеры', 'Список клиентов', 'Контакты'];

  return (
    <div>
      <AppHeader barElements={barElements}/>
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