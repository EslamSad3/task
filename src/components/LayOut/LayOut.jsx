import React from 'react';
import NavBar from '../NavBar/NavBar';
import SideBar from '../SideBar/SideBar';
import { Outlet } from 'react-router-dom';
import Container from '@mui/material/Container';
import { Box } from '@mui/material';
function LayOut({ children }) {
  return (
    <>
      <NavBar />
      <Box sx={{ marginLeft: '75px' }}>
        <Outlet>{children}</Outlet>
      </Box>
      <SideBar />
    </>
  );
}

export default LayOut;
