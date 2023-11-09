import './App.css';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';

import DomainsList from './components/DomainList/DomainsList';
import NavBar from './components/NavBar/NavBar';
import Banner from './components/banner/Banner';
import { Box } from '@mui/material';
import SideBar from './components/SideBar/SideBar';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NavBar />
      <Box sx={{ marginLeft: '75px' }}>
        <Banner />
        <DomainsList />
      </Box>
      <SideBar />
    </QueryClientProvider>
  );
}

export default App;
