import React, {useEffect, useState} from 'react';
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
import {getUserInfo} from './services/userAuthService';

interface IBarElements {
  text: string;
  path: string
}

function App() {
  getUserInfo().then((res) => setPermission(res.Role));
  const [openDialog, toggleOpenDialog] = useToggle(false);
  const [openToolBar, toggleOpenToolBar] = useToggle()
  const [permission, setPermission] = useState<IPermission>();
  const [isAuthLogin, setAuthLogin] = useState<boolean>(true);
  const [barElements, setBarElements] = useState<Array<IBarElements>>([]);
  console.log(permission)
  useEffect(() => {
    switch (permission) {
      case 'Admin': {
        setBarElements(
          [
            {
              text: 'Записи',
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
              path: '/'
            },
            {
              text: 'Контакты',
              path: 'contacts'
            },
          ]
        );
        break;
      }

      case 'User': {
        setBarElements([
          {
            text: 'Записи',
            path: 'entries'
          },
          {
            text: 'Компьютеры',
            path: 'computers'
          },
          {
            text: 'О нас',
            path: '/'
          },
          {
            text: 'Контакты',
            path: 'contacts'
          },
        ]);
        break;
      }

      default: {
        setBarElements([
          {
            text: 'О нас',
            path: '/'
          },
          {
            text: 'Контакты',
            path: 'contacts'
          },
        ])
        break;
      }
    }
  }, [permission])

  return (
    <Main open={openToolBar}>
      <AppHeader
        permission={permission}
        setPermission={setPermission}
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
        <Route path="/" element={<About/>}/>
        <Route path="clientlist" element={<ClientList/>}/>
        <Route path="computers" element={<Computers/>}/>
        <Route path="contacts" element={<Contacts/>}/>
        <Route path="entries" element={<Entries permission={permission}/>}/>
      </Routes>
    </Main>  
  )
}

export default App;
