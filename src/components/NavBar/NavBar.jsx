import React, { useContext } from 'react';
import AppBar from '@mui/material/AppBar';
import { Avatar, Badge, Box, Input } from '@mui/material';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import { DomainContext } from '../../context/Context';
function NavBar() {
  const {handleClickOpen} = useContext(DomainContext)
  
  return (
    <AppBar
      position=""
      sx={{
        display: 'flex',
        width: 'calc(100% - 75px)',
        flexDirection: 'row',
        marginLeft: '75px',
        bgcolor: 'inherit',
        boxShadow: 'none',
        p: '30px',
      }}
    >
      <Box flexGrow={1}></Box>
      <Box
        sx={{ display: 'flex', borderRadius: '50px' }}
        justifyContent={'between'}
        alignItems={'center'}
        bgcolor={'#ffffff'}
      >
        <Box
          sx={{ display: 'flex', backgroundColor: '#f6f6f6' }}
          justifyContent={'space-between'}
          alignItems={'center'}
          borderRadius={'15px'}
          mx={2}
        >
          <SearchOutlinedIcon
            color="action"
            sx={{ display: 'block', mx: '15px', fontWeight: 'normal' }}
            fontSize="small"
          />
          <Input placeholder={'search'} type="search" disableUnderline />
        </Box>

        <SearchOutlinedIcon color="action" />
        <Badge
          badgeContent={2}
          color="error"
          sx={{ fontSize: '5px', mx: '10px' }}
        >
          <NotificationsNoneOutlinedIcon
            color="action"
            sx={{
              display: 'block',
              transition: '0.5s ease',
              '&:hover': { borderRadius: '50%' },
            }}
          />
        </Badge>

        <Avatar
          alt="Remy Sharp"
          src="https://mui.com//static/images/avatar/1.jpg"
        />
      </Box>
    </AppBar>
  );
}

export default NavBar;
