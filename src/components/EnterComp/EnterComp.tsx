import React, {useEffect} from 'react';
import {defaultUserString, IPermission} from '../../constants';
import './EnterComp.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import {getUserInfo, IUserInfo} from '../../services/userAuthService';
import {formLabelClasses} from '@mui/material';

interface IEnterCompProps {
  permission: IPermission;
  setPermission: React.Dispatch<React.SetStateAction<IPermission>>;
  toggleOpenDialog: () => void;
  setAuthLogin: React.Dispatch<React.SetStateAction<boolean>>;
  setIsCreateAdmin: React.Dispatch<React.SetStateAction<boolean>>;
}

const EnterComp = ({
  permission,
  setPermission,
  toggleOpenDialog,
  setAuthLogin,
  setIsCreateAdmin
}: IEnterCompProps) => {
  const [username, setUsername] = React.useState<string>('');

  const currentUser: IUserInfo = JSON.parse(localStorage.getItem('CurrentUser') || defaultUserString);

  useEffect(() => {
    if (permission) {
      const currentUser = JSON.parse(localStorage.getItem('CurrentUser') || defaultUserString)
      if (currentUser.firstName && currentUser.secondName) {
        setUsername(`${currentUser.firstName[0]}${currentUser.secondName[0]}`)
      } else if (currentUser.firstName) {
        setUsername(`${currentUser.firstName[0]}`)
      } else if (currentUser.secondName) {
        setUsername(`${currentUser.secondName[0]}`)        
      }
    }
  }, [permission])

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogin = () => {
    setAuthLogin(true);
    setIsCreateAdmin(false);
    toggleOpenDialog();
  };

  const handleRegistration = () => {
    setAuthLogin(false);
    setIsCreateAdmin(false);
    toggleOpenDialog();
  };

  const handleLogout = () => {
    if (currentUser) {
      localStorage.removeItem('CurrentUser');
      handleCloseUserMenu();
      setPermission(undefined);
    }
  }

  const handleCreateAdmin = () => {
    handleCloseUserMenu();
    setIsCreateAdmin(true);
    toggleOpenDialog();
  }

  return permission ? (
    <Box sx={{ flexGrow: 0 }} className="enter-user">
      <Tooltip title="Open settings">
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar alt={username} sx={{
            backgroundColor: '#414bb2'
          }}>{username}</Avatar>
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: '45px' }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      > 
        <MenuItem onClick={handleCloseUserMenu}>
          <Typography textAlign="center" >{`${currentUser.firstName} ${currentUser.secondName}`}</Typography>
        </MenuItem>
        <MenuItem onClick={handleCloseUserMenu}>
          <Typography textAlign="center" >{
            permission === 'Admin' ? 'Администратор' : 'Пользователь'
          }</Typography>
        </MenuItem>
        {permission === 'Admin' ? (
          <MenuItem onClick={handleCreateAdmin}>
            <Typography textAlign="center" >Добавить Администратора</Typography>
          </MenuItem>
        ) : null}
        <MenuItem onClick={handleLogout}>
          <Typography textAlign="center" >Выйти</Typography>
        </MenuItem>
      </Menu>
    </Box>
  ) : (
    <p className='fmain-text fmain-anchor enter-text'>
      <a onClick={handleLogin}>Войти</a>/<a onClick={handleRegistration}>Регистрация</a>
    </p>
  )
}
export default EnterComp;