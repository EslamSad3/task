import React, { useContext } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { DomainContext } from '../components/Context';
import { Box, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import TaskAltOutlinedIcon from '@mui/icons-material/TaskAltOutlined';

function DialogForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

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
        maxWidth={'xl'}
      >
        <DialogTitle
          sx={{
            display: 'flex',
            alignItems: 'start',
            fontSize: '24px',
            fontWeight: 600,
            lineHeight: '36px',
            letterSpacing: '0em',
            textAlign: 'left',
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
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <form
                width={805}
                onSubmit={handleSubmit((data) => console.log(data))}
              >
                {/* name */}
                <Box
                  width={600}
                  display={'flex'}
                  justifyContent="space-between"
                  alignItems={'center'}
                >
                  {/* fname */}
                  <Box
                    width={'45%'}
                    display={'flex'}
                    justifyContent={'space-between'}
                    flexDirection={'column'}
                    alignItems={'left'}
                  >
                    <label htmlFor="fname">First Name</label>
                    <input
                      {...register('fname', { required: true })}
                      type="text"
                      id="fname"
                      placeholder="Enter First Name"
                    />
                    {errors.fname && (
                      <Typography color={'error'}>
                        First name is required.
                      </Typography>
                    )}
                  </Box>
                  {/* lname */}
                  <Box
                    width={'45%'}
                    display={'flex'}
                    justifyContent={'center'}
                    flexDirection={'column'}
                    alignItems={'left'}
                  >
                    <label htmlFor="lname">Last Name</label>
                    <input
                      {...register('lname', { required: true })}
                      type="text"
                      id="lname"
                      placeholder="Enter Last Name"
                    />
                    {errors.lname && (
                      <Typography color={'error'}>
                        Last name is required.
                      </Typography>
                    )}
                  </Box>
                </Box>

                {/* Company */}
                <Box
                  width={600}
                  display={'flex'}
                  justifyContent="space-between"
                  alignItems={'center'}
                  mb={2}
                >
                  {/* Company */}
                  <Box
                    width={'45%'}
                    display={'flex'}
                    justifyContent={'space-between'}
                    flexDirection={'column'}
                    alignItems={'left'}
                  >
                    <label htmlFor="Company">Company Name</label>
                    <input
                      {...register('Company', { required: true })}
                      type="text"
                      id="Company"
                      placeholder="Enter Company"
                    />
                    {errors.email && (
                      <Typography color={'error'}>
                        Company is required.
                      </Typography>
                    )}
                  </Box>
                  {/* email */}
                  <Box
                    width={'45%'}
                    display={'flex'}
                    justifyContent={'space-between'}
                    flexDirection={'column'}
                    alignItems={'left'}
                  >
                    <label htmlFor="email">Email</label>
                    <input
                      {...register('email', { required: true })}
                      type="text"
                      id="email"
                      placeholder="Enter email"
                    />
                    {errors.email && (
                      <Typography color={'error'}>
                        email is required.
                      </Typography>
                    )}
                  </Box>
                </Box>
                {/* address1 */}
                <Box
                    width={'100%'}
                    display={'flex'}
                    justifyContent={'space-between'}
                    flexDirection={'column'}
                    alignItems={'left'}
                  >
                    <label htmlFor="address1">address1</label>
                    <input
                      {...register('address1', { required: true })}
                      type="text"
                      id="address1"
                      placeholder="Enter address1"
                    />
                    {errors.address1 && (
                      <Typography color={'error'}>
                        address1 is required.
                      </Typography>
                    )}
                  </Box>
                {/* address2 */}
                <Box
                    width={'100%'}
                    display={'flex'}
                    justifyContent={'space-between'}
                    flexDirection={'column'}
                    alignItems={'left'}
                  >
                    <label htmlFor="address2">address2</label>
                    <input
                      {...register('address2', { required: true })}
                      type="text"
                      id="address2"
                      placeholder="Enter address2"
                    />
                    {errors.address2 && (
                      <Typography color={'error'}>
                        address2 is required.
                      </Typography>
                    )}
                  </Box>

                <Box
                  width={600}
                  display={'flex'}
                  justifyContent="space-between"
                  alignItems={'center'}
                >
                  {/* city */}
                  <Box
                    width={'45%'}
                    display={'flex'}
                    justifyContent={'space-between'}
                    flexDirection={'column'}
                    alignItems={'left'}
                  >
                    <label htmlFor="city">City</label>
                    <input type="text" id="city" placeholder="Enter City" />
                  </Box>
                  {/* state */}
                  <Box
                    width={'45%'}
                    display={'flex'}
                    justifyContent={'center'}
                    flexDirection={'column'}
                    alignItems={'left'}
                  >
                    <label htmlFor="state">State</label>
                    <input type="text" id="state" placeholder="Enter State" />
                  </Box>
                </Box>

                <Box
                  width={600}
                  display={'flex'}
                  justifyContent="space-between"
                  alignItems={'center'}
                >
                  {/* zip */}
                  <Box
                    width={'45%'}
                    display={'flex'}
                    justifyContent={'space-between'}
                    flexDirection={'column'}
                    alignItems={'left'}
                  >
                    <label htmlFor="zcode">Zip Code</label>
                    <input
                      type="text"
                      id="zcode"
                      placeholder="Enter Zip Code"
                    />
                  </Box>
                  {/* phone */}
                  <Box
                    width={'45%'}
                    display={'flex'}
                    justifyContent={'center'}
                    flexDirection={'column'}
                    alignItems={'left'}
                  >
                    <label htmlFor="phone">Phone</label>
                    <input type="text" id="phone" placeholder="Enter Phone" />
                  </Box>
                </Box>
                {/* country */}
                <Box
                  width={'100%'}
                  display={'flex'}
                  justifyContent={'space-between'}
                  flexDirection={'column'}
                  alignItems={'left'}
                >
                  <label htmlFor="country">Country</label>
                  <input type="text" id="country" placeholder="Enter Country" />
                </Box>

                <DialogActions>
                  <Button
                    type="submit"
                    onClick={errors.length > 0 ? console.log(errors) : handleClose}
                    variant="contained"
                    color="success"
                    sx={{
                      m: 'auto',
                      borderRadius: '20px',
                      fonSize: '16px',
                      fontWeight: 500,
                      lineHeight: '24px',
                      letterSpacing: '0em',
                      textAlign: 'left',
                    }}
                  >
                    Buy Now
                  </Button>
                </DialogActions>
              </form>

              {/* right */}
              <Box bgcolor="#F9FAFC" ml={2} p={2} borderRadius={2} width={400}>
                <Typography
                  sx={{
                    pb: 2,
                    fontSize: '18px',
                    fontWeight: 'bold',
                    lineHeight: '27px',
                    letterSpacing: '0em',
                    textAlign: 'left',
                    borderBottom: '1px dotted #E4E4E4',
                    color: '#000',
                  }}
                >
                  Domain Details
                </Typography>
                <Box
                  my={2}
                  display={'flex'}
                  flexDirection={'row'}
                  justifyContent={'space-between'}
                >
                  <Typography
                    sx={{
                      fontSize: '18px',
                      fontWeight: 'bold',
                      lineHeight: '27px',
                      letterSpacing: '0em',
                      textAlign: 'left',
                      color: '#000',
                    }}
                  >
                    Tridmark.net
                  </Typography>
                  <Typography
                    variant="body3"
                    sx={{
                      fontWeight: 'bold',
                      fontSize: '18px',
                      lineHeight: '27px',
                      color: '#55B76E',
                    }}
                  >
                    15.40 USD
                  </Typography>
                </Box>
                <Box display={'flex'} mb={2}>
                  <TaskAltOutlinedIcon color="success" />
                  <Typography
                    mx={1}
                    sx={{ color: '#000', fontWeight: 'bold', fontSize: '16px' }}
                  >
                    Privacy protection is on
                  </Typography>
                </Box>
                <Box display={'flex'}>
                  <TaskAltOutlinedIcon color="success" />
                  <Typography
                    mx={1}
                    sx={{ color: '#000', fontWeight: 'bold', fontSize: '16px' }}
                  >
                    Auto-renew is on
                  </Typography>
                </Box>
                <Typography variant="body1" mt={2}>
                  This domain will be auto-renewed around August 1 every year.
                  You will automatically be billed when the renewal occurs.
                </Typography>
              </Box>
            </Box>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}

export default DialogForm;