import React, {useState} from 'react';
import './App.css';
import useToggle from './hooks/useToggle';
import AppHeader from './components/AppHeader/AppHeader';
import AuthDialog from './components/AuthDialog/AuthDialog';
import Contacts from './pages/Contacts/Contacts';
import {Route, Routes} from 'react-router-dom';
import About from './pages/About/About';
import ClientList from './pages/ClientList/ClientList';
import Computers from './pages/Computers/Computers';
import Entries from './pages/Entries/Entries';
import {IPermission} from './constants';
import DrawerHeader from './components/DrawerHeader/DrawerHeader';
import Main from './components/Main/Main';

function App() {
  const [openDialog, toggleOpenDialog] = useToggle(false);
  const [openToolBar, toggleOpenToolBar] = useToggle()
  const [permission, setPermission] = useState<IPermission>();
  const [isAuthLogin, setAuthLogin] = useState<boolean>(true);

  console.log(permission);

  const barElements = [
    {
      text: 'Запись',
      path: 'entries'
    },
    {
      text: 'Компьютеры',
      path: 'computers'
    },
    {
      text: 'Список клиентов',
      path: 'clientlist'
    },
    {
      text: 'О нас',
      path: 'about'
    },
    {
      text: 'Контакты',
      path: 'contacts'
    },
  ];

  return (
    <Main open={openToolBar}>
      <AppHeader
        permission={permission}
        barElements={barElements} 
        openToolBar={openToolBar}
        toggleOpenToolBar={toggleOpenToolBar}
        toggleOpenDialog={toggleOpenDialog}
        setAuthLogin={setAuthLogin}
      />
      <DrawerHeader />
      <AuthDialog 
        setPermission={setPermission}
        open={openDialog}
        toggle={toggleOpenDialog}
        isAuthLogin={isAuthLogin}
        setAuthLogin={setAuthLogin}
      />
      <Routes>
        <Route path="about" element={<About/>}/>
        <Route path="clientlist" element={<ClientList/>}/>
        <Route path="computers" element={<Computers/>}/>
        <Route path="contacts" element={<Contacts/>}/>
        <Route path="entries" element={<Entries/>}/>
      </Routes>
    </Main>  
  )
}

export default App;
