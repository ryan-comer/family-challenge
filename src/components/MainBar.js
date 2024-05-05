import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Avatar, Menu, MenuItem } from '@mui/material';
import { useState } from 'react';
import LoginCard from './LoginCard';

import { useSelector, useDispatch } from 'react-redux';
import { setUser } from '../features/user/userslice';

import { googleLogout } from '@react-oauth/google';

export default function MainBar(props) {
  const [showLogin, setShowLogin] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);

  const [anchorEl, setAnchorEl] = useState(null);

  function handleMenu(event) {
    setAnchorEl(event.currentTarget);
  }

  function logout() {
    googleLogout()
    dispatch(setUser(null));
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      {showLogin &&
        <Box sx={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-25%, -25%)',
          zIndex: 1000,
        }}>
          <LoginCard onClose={() => setShowLogin(false)}/>
        </Box>
      }
      <AppBar position="sticky">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Family Challenge
          </Typography>
          {user &&
            <Box sx={{
              cursor: 'pointer',
            }}>
              <Avatar alt={user.name} src={user.picture} onClick={handleMenu}/>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={() => setAnchorEl(null)}
              >
                <MenuItem onClick={() => logout() && setAnchorEl(null)}>Logout</MenuItem>
              </Menu>
            </Box>
          }
          {!user &&
            <Button color="inherit" onClick={() => setShowLogin(true)}>Login</Button>
          }
        </Toolbar>
      </AppBar>
    </Box>
  );
}