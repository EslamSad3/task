import React, { useContext } from 'react';
import { DomainContext } from './context/Context';
import DomainsList from './components/DomainList/DomainsList';
import NavBar from './components/NavBar/NavBar';
import Banner from './components/banner/Banner';
import { Box } from '@mui/material';
import SideBar from './components/SideBar/SideBar';

function App() {
  const { rows } = useContext(DomainContext);

  return (
    <>
      <NavBar />
      <Box sx={{ marginLeft: '75px' }}>
        <Banner />
        <DomainsList/>
      </Box>
      <SideBar />
    </>
  );
}
export default App;
