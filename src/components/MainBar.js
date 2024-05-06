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
import { useNavigate } from 'react-router-dom';

export default function MainBar(props) {
  const [showLogin, setShowLogin] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const navigate = useNavigate();

  const [anchorProfile, setAnchorProfile] = useState(null);
  const [anchorRoutes, setAnchorRoutes] = useState(null);

  function logout() {
    googleLogout()
    dispatch(setUser(null));
  }

  function changeRoute(path) {
    navigate(path);
    return true
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
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={(event) => setAnchorRoutes(event.currentTarget)}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="pages"
            anchorEl={anchorRoutes}
            open={Boolean(anchorRoutes)}
            onClose={() => setAnchorRoutes(null)}
          >
            {props.routes.map((route) => {
              return (
                <MenuItem key={route.path} onClick={() => changeRoute(route.path) && setAnchorRoutes(null)}>{route.name}</MenuItem>
              );
            })}
          </Menu>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Family Challenge
          </Typography>
          {user &&
            <Box sx={{
              cursor: 'pointer',
            }}>
              <Avatar alt={user.name} src={user.picture} onClick={(event) => setAnchorProfile(event.currentTarget)}/>
              <Menu
                id="simple-menu"
                anchorEl={anchorProfile}
                open={Boolean(anchorProfile)}
                onClose={() => setAnchorProfile(null)}
              >
                <MenuItem onClick={() => logout() && setAnchorProfile(null)}>Logout</MenuItem>
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