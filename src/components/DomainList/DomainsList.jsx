import React, { useContext, useState } from 'react';
import { DomainContext } from '../../context/Context';
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

function DomainsList() {
 
  const { LoadedData, formatCreatedAt, compareValues,handleClickOpen } =
    useContext(DomainContext);

  const [sortDirection, setSortDirection] = useState('asc');
  const [sortProperty, setSortProperty] = useState('_id');

  const handleSort = (property) => {
    setSortProperty(property);
    if (sortDirection === 'asc') {
      setSortDirection('desc');
    } else {
      setSortDirection('asc');
    }
  };

  const sortedRows = LoadedData.sort(
    compareValues(sortProperty, sortDirection)
  );

  const updatedRows = sortedRows.map((row) => ({
    ...row,
    createdAt: formatCreatedAt(row.createdAt),
  }));

  return (
    <Container>
      <TableContainer component={Paper} sx={{ overflow: 'visible' }}>
        <Table sx={{ mb: '20px', overflow: 'hidden' }}>
          <TableHead>
            <TableRow hover align="left">
              <TableCell>
                <Checkbox color="primary" />
                <TableSortLabel
                  active={sortProperty === '_id'}
                  direction={sortDirection}
                  onClick={() => handleSort('_id')}
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
                >
                  Price
                </TableSortLabel>
              </TableCell>
              <TableCell align="center">
                Status
                <TableSortLabel
                  active={sortProperty === 'status'}
                  direction={sortDirection}
                  onClick={() => handleSort('status')}
                >
                  Status
                </TableSortLabel>
              </TableCell>
              <TableCell align="center">
                CreatedAT
                <TableSortLabel
                  active={sortProperty === 'createdAt'}
                  direction={sortDirection}
                  onClick={() => handleSort('createdAt')}
                >
                  CreatedAT
                </TableSortLabel>
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
            {updatedRows.map((row) => (
              <TableRow
                // hover
                key={row._id}
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
                        : row.status === 'expired'
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
                    sx={{ position: 'absolute', right: '70%' }}
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
      <DialogForm/>
    </Container>
  );
}

export default DomainsList;