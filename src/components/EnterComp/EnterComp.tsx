import React, {useEffect} from 'react';
import {IPermission} from '../../constants';
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
import {getUserInfo} from '../../services/userAuthService';

interface IEnterCompProps {
  permission: IPermission;
  setPermission: React.Dispatch<React.SetStateAction<IPermission>>;
  username?: string;
  toggleOpenDialog: () => void;
  setAuthLogin: React.Dispatch<React.SetStateAction<boolean>>;
}

const EnterComp = ({
  permission,
  setPermission,
  toggleOpenDialog,
  setAuthLogin
}: IEnterCompProps) => {
  const [username, setUsername] = React.useState<string>('');

  useEffect(() => {
    getUserInfo().then((res) => setUsername(`${res.FirstName[0]}${res.SecondName[0]}`));
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
    toggleOpenDialog();
  };

  const handleRegistration = () => {
    setAuthLogin(false);
    toggleOpenDialog();
  };

  const handleLogout = () => {
    localStorage.removeItem('userToken');
    localStorage.removeItem('userInfo');
    handleCloseNavMenu();
    setPermission(undefined);
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
        <MenuItem onClick={handleCloseNavMenu}>
          <Typography textAlign="center" onClick={handleLogout}>Выйти</Typography>
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