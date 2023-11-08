import React from 'react';
import {
  Drawer,
  Toolbar,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
} from '@mui/material';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ViewInArOutlinedIcon from '@mui/icons-material/ViewInArOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import ContactSupportOutlinedIcon from '@mui/icons-material/ContactSupportOutlined';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined';
import CampaignOutlinedIcon from '@mui/icons-material/CampaignOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
function SideBar() {
  const drawerWidth = 75;
  const iconsShape = [
    <HomeOutlinedIcon sx={{ color: '#fff' }} fontSize="large" />,
    <ViewInArOutlinedIcon sx={{ color: '#fff' }} fontSize="large" />,
    <GroupOutlinedIcon sx={{ color: '#fff' }} fontSize="large" />,
    <ContactSupportOutlinedIcon sx={{ color: '#fff' }} fontSize="large" />,
    <LocalMallOutlinedIcon sx={{ color: '#fff' }} fontSize="large" />,
    <TrendingUpOutlinedIcon sx={{ color: '#fff' }} fontSize="large" />,
    <CampaignOutlinedIcon sx={{ color: '#fff' }} fontSize="large" />,
    <SettingsOutlinedIcon sx={{ color: '#fff' }} fontSize="large" />,
  ];
  return (
    <>
      <Drawer
        variant="permanent"
        anchor="left"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            background: 'linear-gradient(to right bottom, #cb1a32, #6524c8)',
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
      >
        <Toolbar />

        <List
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {iconsShape.map((icon, index) => (
            <ListItem
              key={index}
              disablePadding
              sx={{ '&:hover': { bgcolor: 'inherit' } }}
            >
              <ListItemButton>
                <ListItemIcon>{icon}</ListItemIcon>
              </ListItemButton>
            </ListItem>
          ))}
          <ListItem
            disablePadding
            sx={{
              '&:hover': { bgcolor: 'inherit' },
              marginTop: '150px', 
            }}
          >
            <ListItemButton>
              <ListItemIcon>
                <LogoutOutlinedIcon sx={{ color: '#fff' }} fontSize="large" />
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </>
  );
}

export default SideBar;
