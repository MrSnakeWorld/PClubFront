import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import {Link, useLocation} from 'react-router-dom';
import './AppHeader.css';
import {drawerWidth, IPermission} from '../../constants';
import EnterComp from '../EnterComp/EnterComp';
import {Button} from '@mui/material';

interface IAppBarProps extends MuiAppBarProps {
  open?: boolean;
}

interface IAppHeaderProps {
  barElements: Array<{text: string, path: string}>;
  toggleOpenToolBar: () => void;
  toggleOpenDialog: () => void;
  toggleOpenCreateEntry: () => void;
  toggleOpenCreateUser: () => void;
  setIsCreateAdmin: React.Dispatch<React.SetStateAction<boolean>>;
  setAuthLogin: React.Dispatch<React.SetStateAction<boolean>>;
  openToolBar: boolean;
  permission: IPermission;
  setPermission: React.Dispatch<React.SetStateAction<IPermission>>
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<IAppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function AppHeader({
  barElements, 
  openToolBar, 
  toggleOpenToolBar, 
  toggleOpenDialog,
  toggleOpenCreateEntry,
  toggleOpenCreateUser,
  setAuthLogin,
  setIsCreateAdmin,
  permission,
  setPermission
}: IAppHeaderProps) {
  const theme = useTheme();

  const location = useLocation();

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar 
        position="fixed" 
        open={openToolBar} 
        className="app-header" 
        sx={{backgroundColor: '#e4e2e1'}}
      >
        <Toolbar>
          <IconButton
            className="hamburger"
            color="inherit"
            aria-label="open drawer"
            onClick={toggleOpenToolBar}
            edge="start"
            sx={{ mr: 2, backgroundColor:'#414bb2', ...(openToolBar && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          
        </Toolbar>
        <p className="fmain-header">
          PClub
        </p>
        <EnterComp
          permission={permission}
          setPermission={setPermission}
          toggleOpenDialog={toggleOpenDialog}
          setAuthLogin={setAuthLogin}
          setIsCreateAdmin={setIsCreateAdmin}
        />
        {permission ? (
          <Button 
          variant="contained" 
          className="btn-create-entry" 
          sx={{
            backgroundColor: '#51a2f1', 
            color: '#fff', 
          }}
          onClick={toggleOpenCreateEntry}
        >
          Добавить Запись
        </Button>
        ) : null}
        {permission === 'Admin' && location.pathname == '/clientlist' ? (
          <Button 
          variant="contained" 
          className="btn-create-user" 
          sx={{
            backgroundColor: '#51a2f1', 
            color: '#fff', 
          }}
          onClick={toggleOpenCreateUser}
        >
          Добавить клиента
        </Button>
        ) : null}
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={openToolBar}
      >
        <DrawerHeader>
          <IconButton onClick={toggleOpenToolBar}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {barElements.map((elem) => (
            <p className="elem-list" key={elem.path}>
              <Link to={elem.path} className="elem-list">
                {elem.text}
              </Link>
            </p>
          ))}
        </List>
      </Drawer>
    </Box>
  );
}
