import { Box, Button, Container, Typography } from '@mui/material';
import React, { useContext } from 'react';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import { DomainContext } from '../../context/Context';
function Banner() {
    
    const {handleClickOpen} = useContext(DomainContext)
  return (
    <Container sx={{ display: 'flex', justifyContent: 'center', p: '10px' }}>
      <Box flexGrow={1}>
        <Box>
          <Box mb={2}>
            <Typography variant="h5" color="#d8d8d8">
              Dashboard / domains
            </Typography>
          </Box>
          <Box mb={2}>
            <Typography variant="h2" component={'h2'} fontWeight={'bold'}>
              Domains
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box>
        <Button
        onClick = { handleClickOpen }
          sx={{
            backgroundColor: '#605bff',
            borderRadius: '20px',
            '&:hover': { backgroundColor: '#605bff' },
          }}
          variant="contained"
          startIcon={<AddCircleOutlineOutlinedIcon />}
        >
          Buy Domain
        </Button>
      </Box>
    </Container>
  );
}

export default Banner;
