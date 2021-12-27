import React, {useEffect, useState} from 'react';
import './App.css';
import useToggle from './hooks/useToggle';
import AppHeader from './components/AppHeader/AppHeader';
import AuthDialog from './components/AuthDialog/AuthDialog';
import Contacts from './pages/Contacts/Contacts';
import {Navigate, Route, Routes} from 'react-router-dom';
import About from './pages/About/About';
import ClientList from './pages/ClientList/ClientList';
import Computers from './pages/Computers/Computers';
import Entries from './pages/Entries/Entries';
import {defaultUserString, IPermission} from './constants';
import DrawerHeader from './components/DrawerHeader/DrawerHeader';
import Main from './components/Main/Main';
import {getUserInfo, IRegisterRequest, IUserInfo} from './services/userAuthService';
import CreateEntryDialog from './components/CreateEntryDialog/CreateEntryDialog';
import PrivateOutlet from './components/PrivateOutlet/PrivateOutlet';
import CreateUserDialog from './components/CreateUserDialog/CreateUserDialog';

export interface IBarElements {
  text: string;
  path: string
}

export interface ICreateEntry {
  date: string;
  beginTime: string;
  endTime: string;
  user: string;
  idComp: string;
}

function App() {
  const [openDialog, toggleOpenDialog] = useToggle(false);
  const [openToolBar, toggleOpenToolBar] = useToggle(false)
  const [openCreateEntry, toggleOpenCreateEntry] = useToggle(false);
  const [openCreateUser, toggleOpenCreateUser] = useToggle(false);
  const [pc, setPc] = useState<string | undefined>()
  const [permission, setPermission] = useState<IPermission>();
  const [isAuthLogin, setAuthLogin] = useState<boolean>(true);
  const [barElements, setBarElements] = useState<Array<IBarElements>>([]);
  const [isCreateAdmin, setIsCreateAdmin] = useState<boolean>(false);


  const checkPermission = () => {
    const currentUser: IUserInfo = JSON.parse(localStorage.getItem('CurrentUser') || defaultUserString);
    if (currentUser) {
      setPermission(currentUser.role);
    }
  }

  const handleCreateEntry = (entry: ICreateEntry, toggle: () => void) => {
    const normalizedEntry = JSON.stringify({
      date: entry.date,
      time: `${entry.beginTime} - ${entry.endTime}`,
      user: entry.user,
      idComp: entry.idComp
    });
    if (localStorage.getItem('Entries') !== null) {
      const entries = JSON.parse(localStorage.getItem('Entries') || '');
      localStorage.setItem('Entries', JSON.stringify([...entries, normalizedEntry]));
    } else {
      localStorage.setItem('Entries', JSON.stringify([normalizedEntry]));
    }

    toggle();
  }

  useEffect(() => {
    checkPermission();
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
  }, [permission]);

  return (
    <Main open={openToolBar}>
      <AppHeader
        setIsCreateAdmin={setIsCreateAdmin}
        permission={permission}
        setPermission={setPermission}
        barElements={barElements} 
        openToolBar={openToolBar}
        toggleOpenToolBar={toggleOpenToolBar}
        toggleOpenDialog={toggleOpenDialog}
        toggleOpenCreateEntry={toggleOpenCreateEntry}
        toggleOpenCreateUser={toggleOpenCreateUser}
        setAuthLogin={setAuthLogin}
      />
      <DrawerHeader />
      <AuthDialog 
        isCreateAdmin={isCreateAdmin}
        setPermission={setPermission}
        open={openDialog}
        toggle={toggleOpenDialog}
        isAuthLogin={isAuthLogin}
        setAuthLogin={setAuthLogin}
      />
      <CreateEntryDialog
        pc={pc}
        open={openCreateEntry}
        toggle={toggleOpenCreateEntry}
        permission={permission}
        handleCreateEntry={handleCreateEntry}
      />
      <CreateUserDialog 
        open={openCreateUser}
        toggle={toggleOpenCreateUser}
      />
      <Routes>
        <Route path="/" element={<About/>}/>
        <Route path="clientlist" element={<PrivateOutlet isAllowed={permission === 'Admin'}/>}>
          <Route path="" element={<ClientList permission={permission}/>}/>
        </Route>
        <Route path="computers" element={<PrivateOutlet isAllowed={permission}/>}>
          <Route path="" element={<Computers setPc={setPc} toggleOpenCreateEntry={toggleOpenCreateEntry}/>}/>
        </Route>
        <Route path="entries" element={<PrivateOutlet isAllowed={permission}/>}>
          <Route path="" element={<Entries permission={permission}/>}/>
        </Route>

        <Route path="contacts" element={<Contacts/>}/>
      </Routes>
    </Main>  
  )
}

export default App;
