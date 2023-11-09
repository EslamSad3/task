import React, { useContext, useState } from 'react';
import TableSortLabel from '@mui/material/TableSortLabel';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import {
  Checkbox,
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import DialogForm from '../DialogForm';
import { useQuery } from '@tanstack/react-query';
import { DomainContext } from '../Context';

function DomainsList() {
const {compareValues} = useContext(DomainContext)
const [sortDirection, setSortDirection] = useState('asc');
const [sortProperty, setSortProperty] = useState('id');

const handleSort = (property) => {
  setSortProperty(property);
  if (sortDirection === 'asc') {
    setSortDirection('desc');
  } else {
    setSortDirection('asc');
  }
};

  const { isPending, error, data } = useQuery({
    queryKey: ['domains'],
    queryFn: () =>
      fetch('http://localhost:5555/domains').then((res) => res.json()),
  });
  if (isPending) return 'Loading...';
  if (error) return 'An error has occurred: ' + error.message;

  const sortedRows = data.sort(
    compareValues(sortProperty, sortDirection)
  );
  console.log(sortedRows)
  
  return (
    <>
      <Container>
        <TableContainer component={Paper} sx={{ overflow: 'visible' }}>
          <Table sx={{ mb: '20px', overflow: 'hidden' }}>
            <TableHead>
              <TableRow hover align="left">
                <TableCell>
                  <Checkbox color="primary" />
                  <TableSortLabel
                    active={sortProperty === 'id'}
                    direction={sortDirection}
                    onClick={() => handleSort('id')}
                  >
                    ID
                  </TableSortLabel>
                </TableCell>
                <TableCell align="left">
                  Domain Price
                  <TableSortLabel
                    active={sortProperty === 'price'}
                    direction={sortDirection}
                    onClick={() => handleSort('price')}
                  ></TableSortLabel>
                </TableCell>
                <TableCell align="center">
                  Status
                  <TableSortLabel
                    active={sortProperty === 'status'}
                    direction={sortDirection}
                    onClick={() => handleSort('status')}
                  ></TableSortLabel>
                </TableCell>
                <TableCell align="center">
                  CreatedAT
                  <TableSortLabel
                    active={sortProperty === 'createdAt'}
                    direction={sortDirection}
                    onClick={() => handleSort('createdAt')}
                  ></TableSortLabel>
                </TableCell>
                <TableCell align="center">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody
              sx={{
                '& .MuiTableRow-root': { padding: '5px' },
                overflow: 'hidden',
              }}
            >
              {data.map((row) => (
                <TableRow
                  // hover
                  key={row.id}
                  sx={{
                    td: { border: 0 },
                    th: { border: 0 },
                    transition: '0.5s ease',
                    '&:hover': {
                      transform: 'scaleX(1.02)',
                      boxShadow: 3,
                    },
                    position: 'relative',
                  }}
                  className="cells"
                >
                  <TableCell component="th" scope="row" className="cells ">
                    <Checkbox color="primary" /># {row.id}
                  </TableCell>
                  <TableCell align="center" className="cells">
                    $ {row.price}.00
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      bgcolor:
                        row.status === 'Running'
                          ? '#ebf5ed'
                          : row.status === 'Will Expire'
                          ? '#fef4eb'
                          : row.status === 'Expired'
                          ? '#fae8ea'
                          : '',
                      color:
                        row.status === 'Running'
                          ? '#3a974c'
                          : row.status === 'Will Expire'
                          ? '#f29339'
                          : row.status === 'expired'
                          ? '#d11a2a'
                          : '',
                      borderRadius: '30px',
                      display: 'flex',
                      justifyContent: 'space-around',
                      alignItems: 'center',
                      mt: '10px',
                    }}
                  >
                    {row.status} <KeyboardArrowDownOutlinedIcon />
                  </TableCell>
                  <TableCell align="center" sx={{ position: 'relative' }}>
                    {' '}
                    <CalendarMonthOutlinedIcon
                      color="primary"
                      sx={{ position: 'absolute', right: '75%' }}
                    />
                    {row.createdAt}
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{ color: '#3a974c', position: 'relative' }}
                  >
                    {' '}
                    <VisibilityOutlinedIcon
                      color="success"
                      sx={{ position: 'absolute', right: '80%' }}
                    />{' '}
                    {row.action}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <DialogForm />
      </Container>
    </>
  );
}
export default DomainsList;
