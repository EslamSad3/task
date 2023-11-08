import React, { useContext, useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { DomainContext } from '../context/Context';
import { Box } from '@mui/material';

function DialogForm() {
  const { open, handleClose } = useContext(DomainContext);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <React.Fragment>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        {/* <img src="./images/buy.jpg" alt="buy" sx={{height:"50px",width:"50px"}} /> */}
        <DialogTitle
          sx={{
            display: 'flex',
            alignItems: 'start',
          }}
          variant="h4"
          component={'h4'}
          id="responsive-dialog-title"
        >
          <Box
            component="img"
            sx={{
              height: 50,
              width: 50,
              maxHeight: { xs: 50, md: 50 },
              maxWidth: { xs: 50, md: 50 },
              mx: 1,
            }}
            alt="Buy Domain"
            src="./images/buy.jpg"
          />
          {'Buy Domain'}
        </DialogTitle>
        <DialogContent>
          <DialogContentText my={3}>
            This information required in order to reach you in case of problems
            with your registration
          </DialogContentText>
          <DialogContentText>
            {/* COntainer Box */}
            <Box sx={{display:"flex", justifyContent:"space-between"}}>
              {/* left */}
              <Box>f</Box>
              {/* right */}
              <Box>d</Box>
            </Box>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Disagree
          </Button>
          <Button onClick={handleClose} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}

export default DialogForm;
